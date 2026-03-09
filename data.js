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
//  Optional "lessonAccess" lets you control lessons per course.
//  Example: lessonAccess: { c1: ["l1", "l3"] }
//  If lessonAccess is omitted for a course, all lessons are allowed.
// ------------------------------------------------------------
const USERS = [
  { id: "IQS02_1054_Aseef Ali", username: "IQS02_1054_Aseef Ali", password: "IQS02_1054", name: "Aseef Ali",    courses: ["c1"], lessonAccess: { c1: ["l1", "l2"] } },
  { id: "IQS01_1031_Shafat", username: "IQS01_1031_Shafat", password: "IQS01_1031", name: "Shafat",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },

  { id: "user1", username: "user1", password: "12345", name: "user1",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1039_Leslie Ashlyn	Leslie Ashlyn", username: "IQS02_1039_Leslie Ashlyn", password: "IQS02_1039", name: "Leslie Ashlyn",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1042_Rawan", username: "IQS02_1042_Rawan", password: "IQS02_1042", name: "Rawan",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1043_Ammar", username: "IQS02_1043_Ammar", password: "IQS02_1043", name: "Ammar",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1046_Mohamed Insaf", username: "IQS02_1046_Mohamed Insaf", password: "IQS02_1046", name: "Mohamed Insaf",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1049_Mussab Habiballa", username: "IQS02_1049_Mussab Habiballa", password: "IQS02_1049", name: "Mussab Habiballa",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1070_Christian Dave Bulac", username: "IQS02_1070_Christian Dave Bulac", password: "IQS02_1070", name: "Christian Dave Bulac",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1065_Faisal Alqahtani", username: "IQS02_1065_Faisal Alqahtani", password: "IQS02_1065", name: "Faisal Alqahtani",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1068_Mitzie Ocan", username: "IQS02_1068_Mitzie Ocan", password: "IQS02_1068", name: "Mitzie Ocan",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "APC37_1681_Mohammed Hussain", username: "APC37_1681_Mohammed Hussain", password: "APC37_1681", name: "Mohammed Hussain",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "APC03_1124_Asmi", username: "APC03_1124_Asmi", password: "APC03_1124", name: "Asmi",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "IQS02_1071_Sharon Raviz", username: "IQS02_1071_Sharon Raviz", password: "IQS02_1071", name: "Sharon Raviz",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "APC35_1606_Naveed Malik", username: "APC35_1606_Naveed Malik", password: "APC35_1606", name: "Naveed Malik",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "APC36_1648_Michael Qaisiyeh", username: "APC36_1648_Michael Qaisiyeh", password: "APC36_1648", name: "Michael Qaisiyeh",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "AQS30_1424_ Abayomi", username: "AQS30_1424_ Abayomi", password: "AQS30_1424", name: "Abayomi",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "APC37_1674_Rumesh Jayasuriya", username: "APC37_1674_Rumesh Jayasuriya", password: "APC37_1674", name: "Rumesh Jayasuriya",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "APC35_1611_Kago McCroty Sechele", username: "APC35_1611_Kago McCroty Sechele", password: "APC35_1611", name: "Kago McCroty Sechele",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Dinesha", username: "Dinesha", password: "IQS_001", name: "Dinesha",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Rashid Ahamed", username: "Rashid Ahamed", password: "IQS_002", name: "Rashid Ahamed",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Ghassan Taha", username: "Ghassan Taha", password: "IQS_003", name: "Ghassan Taha",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Saajith", username: "Saajith", password: "IQS_004", name: "Saajith",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Ahamed Mashooth", username: "Ahamed Mashooth", password: "IQS_005", name: "Ahamed Mashooth",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Asim Iqbal", username: "Asim Iqbal", password: "IQS_006", name: "Asim Iqbal",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Sirajudeen Ihsan", username: "Sirajudeen Ihsan", password: "IQS_007", name: "Sirajudeen Ihsan",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
  { id: "Mohamed Sajith", username: "Mohamed Sajith", password: "IQS_008", name: "Mohamed Sajith",    courses: ["c1"], lessonAccess: { c1: ["l3"] } },
 
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
    title: "IQS - Integrated Quantity Surveying",
    description: "Learn the fundamentals of quantity surveying and project management.",
    thumbnail: "https://tse4.mm.bing.net/th/id/OIP.rcWWEPYQ9huyfUoBhAN4-wHaDZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    lessons: [
      { id: "l1", title: "Session 1 - Professional English",    duration: "1h 20m", driveId: "1lNpZc0ekNx7VtR3OETy8CTB7kxCoNQZs", description: "Tags, structure, semantics." },
      { id: "l2", title: "Session 2 - Technical Writing",       duration: "1h 30m", driveId: "1lNpZc0ekNx7VtR3OETy8CTB7kxCoNQZs", description: "Document structure, clarity, tone." },
      { id: "l3", title: "Session 4 - Tender Evaluation",     duration: "", driveId: "1Asaam57JYZRvzDacnc2u_1E7-9zAc8GM", description: "Tender evaluation techniques." },
      // Add more lessons below ↓
    ]
  },
  // {
  //   id: "c2",
  //   title: "Python for Data Science",
  //   description: "Learn Python and data analysis with real datasets.",
  //   thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  //   lessons: [
  //     { id: "l4", title: "Lesson 1 — Python Basics",           duration: "1h 30m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Syntax, types, control flow." },
  //     { id: "l5", title: "Lesson 2 — NumPy & Pandas",          duration: "2h 00m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Arrays, DataFrames, data wrangling." },
  //   ]
  // },
  // {
  //   id: "c3",
  //   title: "UI/UX Design Principles",
  //   description: "Design thinking, wireframing and Figma essentials.",
  //   thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
  //   lessons: [
  //     { id: "l6", title: "Lesson 1 — Design Thinking",         duration: "1h 15m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Empathy, ideation, prototyping." },
  //     { id: "l7", title: "Lesson 2 — Wireframing in Figma",    duration: "1h 50m", driveId: "YOUR_DRIVE_FILE_ID_HERE", description: "Frames, components, auto-layout." },
  //   ]
  // },
  // Add more courses below ↓
];
