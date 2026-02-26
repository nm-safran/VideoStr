# EduPortal — Lecture Video Portal (GitHub Pages)

A static lecture video portal deployable on GitHub Pages.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Login page (admin + students) |
| `dashboard.html` | Student course/lesson view |
| `player.html` | Video player (Google Drive embed, download blocked) |
| `admin.html` | Admin panel — view users, courses, access |
| `data.js` | **⭐ All configuration lives here** |

---

## Quick Start

### 1. Edit `data.js`

**Change the admin password:**
```js
const ADMIN_CREDENTIALS = { username: "admin", password: "YOUR_PASSWORD" };
```

**Add students:**
```js
const USERS = [
  { id: "u1", username: "alice", password: "pass123", name: "Alice", courses: ["c1"] },
];
```

**Add courses and lessons:**
```js
const COURSES = [
  {
    id: "c1",
    title: "My Course",
    description: "Course description",
    thumbnail: "https://...",   // image URL for course card
    lessons: [
      { id: "l1", title: "Lesson 1", duration: "1h 20m", driveId: "GOOGLE_DRIVE_FILE_ID", description: "..." },
    ]
  }
];
```

### 2. Get Google Drive File ID
1. Upload video to Google Drive
2. Right-click → Share → Anyone with the link
3. Copy the link: `https://drive.google.com/file/d/FILE_ID/view`
4. Paste `FILE_ID` as `driveId` in the lesson

### 3. Deploy to GitHub Pages
1. Create a GitHub repo
2. Upload all 5 files
3. Settings → Pages → Source: main branch / root
4. Site is live at `https://username.github.io/repo-name/`

---

## Login
- Admin: `admin` / `admin123` (change in data.js!)
- Students: credentials defined in `USERS` array

## Access Control
Each user's `courses` array determines which courses they see.
Example: `courses: ["c1", "c3"]` — student sees Course 1 and Course 3 only.
