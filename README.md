# Course Management System

A comprehensive web application for managing university courses, student registrations, and academic workflows. Built with Next.js, React, and Prisma for a modern, scalable course management experience.

## 🔑 Demo Access
🔗 Live Demo: https://unitrack-eight.vercel.app

For demonstration purposes, you can find the user credentials under `/app/data/users.json`.

## 🚀 Features

### For Students
- **Course Registration**: Browse and register for available courses
- **Learning Path Visualization**: View recommended course sequences and prerequisites
- **Grade Tracking**: Monitor academic progress and completed courses
- **Schedule Management**: View class schedules and course timings

### For Instructors
- **Course Allocation**: Manage assigned courses and sections
- **Grade Management**: Input and update student grades
- **Section Management**: Handle course sections and student enrollment
- **Academic Oversight**: Monitor student progress and course completion

### For Administrators
- **Course Management**: Add, edit, and manage course offerings
- **Section Administration**: Create and manage course sections
- **User Management**: Oversee students, instructors, and admin accounts
- **System Statistics**: View comprehensive analytics and reports

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3.0, React 19.0.0
- **Authentication**: NextAuth.js 4.24.11
- **Database**: SQLite with Prisma ORM
- **Styling**: CSS Modules

## 🗄️ Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Users**: Authentication and role management
- **Students**: Academic records and course registrations
- **Instructors**: Teaching assignments and course management
- **Courses**: Course information and prerequisites
- **Sections**: Class sections with enrollment limits
- **Registrations**: Student-course enrollment records
- **Majors**: Academic programs and degree tracks

## 🔐 Authentication

The system supports multiple authentication methods:
- **Credentials**: Username/password login
- **Google OAuth**: Google account integration
- **GitHub OAuth**: GitHub account integration

## 📊 Features Overview

### Student Dashboard
- View available courses and sections
- Register for courses with prerequisite checking
- Track academic progress and GPA
- View personalized learning paths

### Instructor Dashboard
- Manage assigned course sections
- Input and update student grades
- View section enrollment and capacity
- Monitor student progress

### Admin Dashboard
- Add and manage courses and sections
- Oversee user accounts and roles
- View system statistics and reports
- Manage academic programs and majors

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
