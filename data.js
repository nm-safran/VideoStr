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

  { id: "user1", username: "user1", password: "12345", name: "user1",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },

  // access for both sessions
  { id: "IQS02_1039_Leslie Ashlyn	Leslie Ashlyn", username: "IQS02_1039_Leslie Ashlyn", password: "IQS02_1039", name: "Leslie Ashlyn",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1042_Rawan", username: "IQS02_1042_Rawan", password: "IQS02_1042", name: "Rawan",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "IQS02_1043_Ammar", username: "IQS02_1043_Ammar", password: "IQS02_1043", name: "Ammar",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1046_Mohamed Insaf", username: "IQS02_1046_Mohamed Insaf", password: "IQS02_1046", name: "Mohamed Insaf",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1049_Mussab Habiballa", username: "IQS02_1049_Mussab Habiballa", password: "IQS02_1049", name: "Mussab Habiballa",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1070_Christian Dave Bulac", username: "IQS02_1070_Christian Dave Bulac", password: "IQS02_1070", name: "Christian Dave Bulac",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1065_Faisal Alqahtani", username: "IQS02_1065_Faisal Alqahtani", password: "IQS02_1065", name: "Faisal Alqahtani",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1068_Mitzie Ocan", username: "IQS02_1068_Mitzie Ocan", password: "IQS02_1068", name: "Mitzie Ocan",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "APC37_1681_Mohammed Hussain", username: "APC37_1681_Mohammed Hussain", password: "APC37_1681", name: "Mohammed Hussain",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC03_1124_Asmi", username: "APC03_1124_Asmi", password: "APC03_1124", name: "Asmi",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "IQS02_1071_Sharon Raviz", username: "IQS02_1071_Sharon Raviz", password: "IQS02_1071", name: "Sharon Raviz",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC35_1606_Naveed Malik", username: "APC35_1606_Naveed Malik", password: "APC35_1606", name: "Naveed Malik",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC36_1648_Michael Qaisiyeh", username: "APC36_1648_Michael Qaisiyeh", password: "APC36_1648", name: "Michael Qaisiyeh",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "AQS30_1424_ Abayomi", username: "AQS30_1424_ Abayomi", password: "AQS30_1424", name: "Abayomi",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "APC37_1674_Rumesh Jayasuriya", username: "APC37_1674_Rumesh Jayasuriya", password: "APC37_1674", name: "Rumesh Jayasuriya",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "APC35_1611_Kago McCroty Sechele", username: "APC35_1611_Kago McCroty Sechele", password: "APC35_1611", name: "Kago McCroty Sechele",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "Dinesha", username: "Dinesha", password: "IQS_001", name: "Dinesha",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "Rashid Ahamed", username: "Rashid Ahamed", password: "IQS_002", name: "Rashid Ahamed",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "Ghassan Taha", username: "Ghassan Taha", password: "IQS_003", name: "Ghassan Taha",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "Saajith", username: "Saajith", password: "IQS_004", name: "Saajith",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "Ahamed Mashooth", username: "Ahamed Mashooth", password: "IQS_005", name: "Ahamed Mashooth",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "Asim Iqbal", username: "Asim Iqbal", password: "IQS_006", name: "Asim Iqbal",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "Sirajudeen Ihsan", username: "Sirajudeen Ihsan", password: "IQS_007", name: "Sirajudeen Ihsan",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "Mohamed Sajith", username: "Mohamed Sajith", password: "IQS_008", name: "Mohamed Sajith",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1067_Rinos", username: "IQS02_1067_Rinos", password: "IQS02_1067", name: "Mohammed Rinos",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "IQS02_Mohamed Riyaf", username: "IQS02_Mohamed Riyaf", password: "IQS02_014", name: "Mohamed Riyaf",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
 
  // access for only session 2
  { id: "IQS01_1030_Irshadh", username: "IQS01_1030_Irshadh", password: "IQS01_1030", name: "Irshadh",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1031_Shafat", username: "IQS02_1031_Shafat", password: "IQS02_1031", name: "Shafat",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },
  { id: "AQS37_1652_Taufique", username: "AQS37_1652_Taufique", password: "AQS37_1652", name: "Taufique",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS35_1616_Fareed", username: "AQS35_1616_Fareed", password: "AQS35_1616", name: "Fareed",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },
  { id: "IQS02_1032_Samuel Nartey", username: "IQS02_1032_Samuel Nartey", password: "IQS02_1032", name: "Samuel Nartey",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS26_1074_Fazal", username: "AQS26_1074_Fazal", password: "AQS26_1074", name: "Fazal",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC16_1060_Mirghani Othman", username: "APC16_1060_Mirghani Othman", password: "APC16_1060", name: "Mirghani Othman",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1033_Seeth", username: "IQS02_1033_Seeth", password: "IQS02_1033", name: "Seeth",    courses: ["c1"], lessonAccess: { c1: [] } }, 
  { id: "IQS02_1034_Yathurshan", username: "IQS02_1034_Yathurshan", password: "IQS02_1034", name: "Yathurshan",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS37_1668_Rasul", username: "AQS37_1668_Rasul", password: "AQS37_1668", name: "Rasul",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1035_Rameez", username: "IQS02_1035_Rameez", password: "IQS02_1035", name: "Rameez",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS37_1680_Kareemullah Farooqui", username: "AQS37_1680_Kareemullah Farooqui", password: "AQS37_1680", name: "Kareemullah Farooqui",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },
  { id: "APC37_1676_Milhan", username: "APC37_1676_Milhan", password: "APC37_1676", name: "Milhan",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1037_Shakir", username: "IQS02_1037_Shakir", password: "IQS02_1037", name: "Shakir",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "MEP05_1642_Ancy Joseph", username: "MEP05_1642_Ancy Joseph", password: "MEP05_1642", name: "Ancy Joseph",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1038_Aadhil Feroz", username: "IQS02_1038_Aadhil Feroz", password: "IQS02_1038", name: "Aadhil Feroz",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1040_Mohammad Insaf", username: "IQS02_1040_Mohammad Insaf", password: "IQS02_1040", name: "Mohammad Insaf",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1041_Hisbu Rahman", username: "IQS02_1041_Hisbu Rahman", password: "IQS02_1041", name: "Hisbu Rahman",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC27_1116_Mohammad Oraib", username: "APC27_1116_Mohammad Oraib", password: "APC27_1116", name: "Mohammad Oraib",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },
  { id: "IQS02_1044_Ahmad Faizan", username: "IQS02_1044_Ahmad Faizan", password: "IQS02_1044", name: "Ahmad Faizan",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1045_Мuhammad Ali", username: "IQS02_1045_Мuhammad Ali", password: "IQS02_1045", name: "Мuhammad Ali",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS37_1586_Shams Tasnuva", username: "AQS37_1586_Shams Tasnuva", password: "AQS37_1586", name: "Shams Tasnuva",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1046_Lyka", username: "IQS02_1046_Lyka", password: "IQS02_1046", name: "Lyka",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS27_1096_Hazem", username: "AQS27_1096_Hazem", password: "AQS27_1096", name: "Hazem",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1048_Sajid Ullah Khattak", username: "IQS02_1048_Sajid Ullah Khattak", password: "IQS02_1048", name: "Sajid Ullah Khattak",    courses: ["c1"], lessonAccess: { c1: ["l2", "l3"] } },
  { id: "IQS02_1050_Mohamed Kaleem", username: "IQS02_1050_Mohamed Kaleem", password: "IQS02_1050", name: "Mohamed Kaleem",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1082_althaf", username: "IQS02_1082_althaf", password: "IQS02_1082", name: "althaf",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1051_Muhammad Nafraz", username: "IQS02_1051_Muhammad Nafraz", password: "IQS02_1051", name: "Muhammad Nafraz",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS38_1697_Ashraf Faroqui", username: "AQS38_1697_Ashraf Faroqui", password: "AQS38_1697", name: "Ashraf Faroqui",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1054_Aseef Ali	", username: "IQS02_1054_Aseef Ali", password: "IQS02_1054", name: "Aseef Ali",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1052_Fathima", username: "IQS02_1052_Fathima", password: "IQS02_1052", name: "Fathima",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1056_Fathima Raha", username: "IQS02_1056_Fathima Raha", password: "IQS02_1056", name: "Fathima Raha",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1059_Ahmed Askari", username: "IQS02_1059_Ahmed Askari", password: "IQS02_1059", name: "Ahmed Askari",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1060_Virgilio", username: "IQS02_1060_Virgilio", password: "IQS02_1060", name: "Virgilio",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1062_Prabu Sankar Yathindran", username: "IQS02_1062_Prabu Sankar Yathindran", password: "IQS02_1062", name: "Prabu Sankar Yathindran",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC37_1687_Praveen", username: "APC37_1687_Praveen", password: "APC37_1687", name: "Praveen",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1063_Prajwal Manmohan Pai", username: "IQS02_1063_Prajwal Manmohan Pai", password: "IQS02_1063", name: "Prajwal Manmohan Pai",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },  
  { id: "IQS02_1064_Azar", username: "IQS02_1064_Azar", password: "IQS02_1064", name: "Azar",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1069_Nabeel Wali", username: "IQS02_1069_Nabeel Wali", password: "IQS02_1069", name: "Nabeel Wali",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC33_1547_Harsan Sasny", username: "APC33_1547_Harsan Sasny", password: "APC33_1547", name: "Harsan Sasny",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS36_1630_Nafeer", username: "AQS36_1630_Nafeer", password: "AQS36_1630", name: "Nafeer",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC34_1592_Javeed", username: "APC34_1592_Javeed", password: "APC34_1592", name: "Javeed",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },
  { id: "AQS33_1545_Abdul Wasi", username: "AQS33_1545_Abdul Wasi", password: "AQS33_1545", name: "Abdul Wasi",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC37_1649_Asham", username: "APC37_1649_Asham", password: "APC37_1649", name: "Asham",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS31_1469_Abdulaziz Alsowaidi", username: "AQS31_1469_Abdulaziz Alsowaidi", password: "AQS31_1469", name: "Abdulaziz Alsowaidi",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },
  { id: "AQS35_1613_Anand Brahmbhatt", username: "AQS35_1613_Anand Brahmbhatt", password: "AQS35_1613", name: "Anand Brahmbhatt",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "IQS02_1072_Alhussein Mahmoud Ali Ahmed", username: "IQS02_1072_Alhussein Mahmoud Ali Ahmed", password: "IQS02_1072", name: "Alhussein Mahmoud Ali Ahmed",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS37_1685_Aqueel", username: "AQS37_1685_Aqueel", password: "AQS37_1685", name: "Aqueel",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC38_1708_Majid Qayyum", username: "APC38_1708_Majid Qayyum", password: "APC38_1708", name: "Majid Qayyum",    courses: ["c1"], lessonAccess: { c1: ["l2"] } },
  { id: "IQS02_1078_Safnas", username: "IQS02_1078_Safnas", password: "IQS02_1078", name: "Safnas",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "APC27_1113_Shafeek Faiz", username: "APC27_1113_Shafeek Faiz", password: "APC27_1113", name: "Shafeek Faiz",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "AQS36_1645_Dhanushka Chathuranga", username: "AQS36_1645_Dhanushka Chathuranga", password: "AQS36_1645", name: "Dhanushka Chathuranga",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "Safardeen wahabdeen", username: "Safardeen wahabdeen", password: "IQS_009", name: "Safardeen wahabdeen",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "Mohammed Noman", username: "Mohammed Noman", password: "IQS_010", name: "Mohammed Noman",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "Job Tom Joseph", username: "Job Tom Joseph", password: "IQS_011", name: "Job Tom Joseph",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "Akmal Wasifullah", username: "Akmal Wasifullah", password: "IQS_012", name: "Akmal Wasifullah",    courses: ["c1"], lessonAccess: { c1: [] } },
  { id: "Muhammad Shaban", username: "Muhammad Shaban", password: "IQS_013", name: "Muhammad Shaban",    courses: ["c1"], lessonAccess: { c1: [] } },
  

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
      // { id: "l1", title: "Session 1 - Professional English",    duration: "1h 20m", driveId: "1lNpZc0ekNx7VtR3OETy8CTB7kxCoNQZs", description: "Tags, structure, semantics." },
      { id: "l2", title: "Session 2 - Professional English for QS",       duration: "1h 08m", driveId: "17_-9Dvnp3CpmnK6r-hR3viSS2EbSEJBi", description: "cOMMUNICATION - Written" },
      { id: "l3", title: "Session 4 - Tender Evaluation",     duration: "1h 12m", driveId: "1Asaam57JYZRvzDacnc2u_1E7-9zAc8GM", description: "Tender evaluation techniques." },
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
