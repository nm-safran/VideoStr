<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$action = $_GET['action'] ?? '';
$storageDir = __DIR__ . DIRECTORY_SEPARATOR . 'storage';
$storageFile = $storageDir . DIRECTORY_SEPARATOR . 'login-logs.json';

function respond($payload, int $status = 200): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function safeString($value, int $maxLen = 120): string {
    if (!is_string($value)) {
        return '';
    }
    $value = trim($value);
    if ($value === '') {
        return '';
    }

    if (function_exists('mb_strlen') && function_exists('mb_substr')) {
        if (mb_strlen($value) > $maxLen) {
            $value = mb_substr($value, 0, $maxLen);
        }
    } else {
        if (strlen($value) > $maxLen) {
            $value = substr($value, 0, $maxLen);
        }
    }

    return $value;
}

function getClientIp(): string {
    $headers = [
        'HTTP_CF_CONNECTING_IP',
        'HTTP_X_FORWARDED_FOR',
        'HTTP_X_REAL_IP',
        'REMOTE_ADDR',
    ];

    foreach ($headers as $header) {
        if (empty($_SERVER[$header])) {
            continue;
        }

        $raw = $_SERVER[$header];
        $first = explode(',', $raw)[0] ?? '';
        $ip = trim($first);
        if (filter_var($ip, FILTER_VALIDATE_IP)) {
            return $ip;
        }
    }

    return 'unknown';
}

function fetchIpGeo(string $ip): array {
    if (!filter_var($ip, FILTER_VALIDATE_IP)) {
        return [
            'country' => '',
            'region' => '',
            'city' => '',
            'isp' => '',
        ];
    }

    $url = 'http://ip-api.com/json/' . rawurlencode($ip) . '?fields=status,country,regionName,city,isp';
    $raw = null;

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 3);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $raw = curl_exec($ch);
        curl_close($ch);
    } elseif (ini_get('allow_url_fopen')) {
        $raw = @file_get_contents($url);
    }

    if (!$raw) {
        return [
            'country' => '',
            'region' => '',
            'city' => '',
            'isp' => '',
        ];
    }

    $data = json_decode($raw, true);
    if (!is_array($data) || ($data['status'] ?? '') !== 'success') {
        return [
            'country' => '',
            'region' => '',
            'city' => '',
            'isp' => '',
        ];
    }

    return [
        'country' => safeString($data['country'] ?? '', 80),
        'region' => safeString($data['regionName'] ?? '', 80),
        'city' => safeString($data['city'] ?? '', 80),
        'isp' => safeString($data['isp'] ?? '', 120),
    ];
}

function ensureStorage(string $storageDir, string $storageFile): void {
    if (!is_dir($storageDir) && !mkdir($storageDir, 0775, true) && !is_dir($storageDir)) {
        respond(['ok' => false, 'error' => 'Cannot create storage directory'], 500);
    }

    if (!file_exists($storageFile)) {
        $initial = ['logs' => []];
        file_put_contents($storageFile, json_encode($initial, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }
}

function loadLogs(string $storageFile): array {
    $raw = @file_get_contents($storageFile);
    if (!$raw) {
        return [];
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded) || !isset($decoded['logs']) || !is_array($decoded['logs'])) {
        return [];
    }

    return $decoded['logs'];
}

function saveLogs(string $storageFile, array $logs): void {
    $payload = ['logs' => $logs];
    file_put_contents($storageFile, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

ensureStorage($storageDir, $storageFile);

if ($action === 'log') {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        respond(['ok' => false, 'error' => 'Method not allowed'], 405);
    }

    $rawBody = file_get_contents('php://input');
    $body = json_decode($rawBody ?: '{}', true);

    if (!is_array($body)) {
        respond(['ok' => false, 'error' => 'Invalid JSON'], 400);
    }

    $username = safeString($body['username'] ?? '', 80);
    $role = safeString($body['role'] ?? '', 20);
    $userId = safeString($body['userId'] ?? '', 30);
    $name = safeString($body['name'] ?? '', 120);

    if ($username === '' || ($role !== 'admin' && $role !== 'student')) {
        respond(['ok' => false, 'error' => 'Missing login data'], 400);
    }

    $ip = getClientIp();
    $geo = fetchIpGeo($ip);

    $record = [
        'id' => uniqid('log_', true),
        'timestamp' => gmdate('c'),
        'username' => $username,
        'name' => $name,
        'role' => $role,
        'userId' => $userId,
        'ip' => $ip,
        'country' => $geo['country'],
        'region' => $geo['region'],
        'city' => $geo['city'],
        'isp' => $geo['isp'],
        'userAgent' => safeString($_SERVER['HTTP_USER_AGENT'] ?? '', 255),
    ];

    $fp = fopen($storageFile, 'c+');
    if ($fp === false) {
        respond(['ok' => false, 'error' => 'Cannot open storage'], 500);
    }

    if (!flock($fp, LOCK_EX)) {
        fclose($fp);
        respond(['ok' => false, 'error' => 'Cannot lock storage'], 500);
    }

    $raw = stream_get_contents($fp);
    $decoded = json_decode($raw ?: '{"logs":[]}', true);
    $logs = (is_array($decoded) && isset($decoded['logs']) && is_array($decoded['logs'])) ? $decoded['logs'] : [];

    array_unshift($logs, $record);
    $logs = array_slice($logs, 0, 1000);

    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode(['logs' => $logs], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);

    respond(['ok' => true]);
}

if ($action === 'list') {
    $logs = loadLogs($storageFile);
    respond(['ok' => true, 'logs' => $logs]);
}

if ($action === 'clear') {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        respond(['ok' => false, 'error' => 'Method not allowed'], 405);
    }

    $fp = fopen($storageFile, 'c+');
    if ($fp === false) {
        respond(['ok' => false, 'error' => 'Cannot open storage'], 500);
    }

    if (!flock($fp, LOCK_EX)) {
        fclose($fp);
        respond(['ok' => false, 'error' => 'Cannot lock storage'], 500);
    }

    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode(['logs' => []], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);

    respond(['ok' => true]);
}

respond(['ok' => false, 'error' => 'Unknown action'], 404);
