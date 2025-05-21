# 🎓 QU Student Management Application

A full-stack web application built for the CSE department of Qatar University to manage students, courses, instructors, and administrators. Developed as part of the CMPS 350 Web Development course project.

## 📌 Overview

This application enables:
- Students to register for and view courses, track learning paths, and see grades.
- Instructors to manage classes and submit grades.
- Administrators to create and manage courses/classes, validate enrollments and view classes schedules.

It is built in two phases:
- **Phase 1:** JSON-based file storage and basic functionality impemented with vanilla HTML, CSS, and JS.
- **Phase 2:** Transition to a real database using Prisma with full statistics, Next.js Web APIs and React.js.


## 🚀 Features

### 🛠️ Phase 1 Functionalities (JSON-based)
- **Login** using JSON-based credential verification.
- **Search Courses** by name or category.
- **Course Registration** with validation of prerequisites and available seats.
- **Learning Path View**: Track completed, in-progress, and pending courses.
- **Course/Class Management** by administrators (create, validate/cancel).
- **Grade Submission** by instructors.
- **Weekly schedule** for classes displayed for administrators.

### ⬆️ Phase 2 Enhancements (Database + Fullstack)
- Re-implemented to **React.js**.
- Migration to a **relational database** using Prisma.
- **Seed.js** to populate database with 500+ students and 50+ courses.
- Implementation of **Data Repository** with efficient Prisma queries.
- Integration of both **Next.js Server Actions** and **REST APIs**.
- A **Statistics Dashboard** featuring at least **10 meaningful metrics**:
  - Total students per year/course/category
  - Top 3 most taken courses
  - Failure rates per course
  - And more...

## 🗂️ Technologies Used

| Area              | Tech Stack                     |
|-------------------|--------------------------------|
| Frontend          | HTML, CSS, JavaScript, React   |
| Backend           | Node.js, Next.js               |
| Database          | SQLite (via Prisma ORM)|  
| Authentication    | JSON-based (Phase 1), JWT-token sessions (Phase 2) |
| Dev Tools         | VSCode, Git, GitHub            |

## 📑 More About The Project
Detailed Documentation for Both Phases:

- **_CMPS350_Project Phase 1_Report.docx_**
- **_CMPS350_Project Phase 2_Report.docx_**

## 📦 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or later) – for running the backend and Next.js frontend  
- **npm** – Node package manager (comes with Node.js)

## 📎 Setup & Run Locally

```bash
git clone https://github.com/fahrel-fh2206836/student-management-app.git
cd student-management-app
npm install
npx prisma generate
npx prisma db push
node ./prisma/seed.js      # Populate database
npx prisma studio          # View the database
npm run dev                # Start the development server
```
## 🧑‍🤝‍🧑 Team Contributions
1. Fahrel Azki Hidayat
2. Mohammed Alam
3. AbdulWasay Saqib
4. Ghanim Al-Kuwari

