// ============================================================
//  LECTURE PORTAL — CENTRAL DATA STORE
//  Edit this file to manage users, courses, and lessons.
// ============================================================

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"   // ← Change this!
};

// ------------------------------------------------------------
//  USERS
//  Add/remove students here.
//  "courses" lists course IDs this user can access.
// ------------------------------------------------------------
const USERS = [
  { id: "u1", username: "student1", password: "pass123", name: "Alice Rahman",    courses: ["c1", "c2"] },
  { id: "u2", username: "student2", password: "pass456", name: "Bimal Fernando",  courses: ["c1"] },
  { id: "u3", username: "student3", password: "pass789", name: "Chamari Perera",  courses: ["c2", "c3"] },
  // Add more students below ↓
];

// ------------------------------------------------------------
//  COURSES & LESSONS
//  Each lesson has a Google Drive file ID.
//  How to get the file ID:
//    1. Upload video to Google Drive
//    2. Right-click → Share → Anyone with the link
//    3. Copy the link: https://drive.google.com/file/d/FILE_ID/view
//    4. Paste only FILE_ID below
// ------------------------------------------------------------
const COURSES = [
  {
    id: "c1",
    title: "Web Development Fundamentals",
    description: "HTML, CSS, JavaScript from the ground up.",
    thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
    lessons: [
      { id: "l1", title: "Lesson 1 — Introduction to HTML",    duration: "1h 20m", driveId: "1lNpZc0ekNx7VtR3OETy8CTB7kxCoNQZs", description: "Tags, structure, semantics." },
      { id: "l2", title: "Lesson 2 — CSS Styling Basics",      duration: "1h 45m", driveId: "1YgzVcnO3J779BcCQrGLd20duyHpN9fuP", description: "Selectors, box model, flexbox." },
      { id: "l3", title: "Lesson 3 — JavaScript Essentials",   duration: "2h 10m", driveId: "1YgzVcnO3J779BcCQrGLd20duyHpN9fuP", description: "Variables, functions, DOM." },
    ]
  },
  {
    id: "c2",
    title: "Python for Data Science",
    description: "Learn Python and data analysis with real datasets.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    lessons: [
      { id: "l4", title: "Lesson 1 — Python Basics",           duration: "1h 30m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Syntax, types, control flow." },
      { id: "l5", title: "Lesson 2 — NumPy & Pandas",          duration: "2h 00m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Arrays, DataFrames, data wrangling." },
    ]
  },
  {
    id: "c3",
    title: "UI/UX Design Principles",
    description: "Design thinking, wireframing and Figma essentials.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    lessons: [
      { id: "l6", title: "Lesson 1 — Design Thinking",         duration: "1h 15m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Empathy, ideation, prototyping." },
      { id: "l7", title: "Lesson 2 — Wireframing in Figma",    duration: "1h 50m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Frames, components, auto-layout." },
    ]
  },
  // Add more courses below ↓
];
