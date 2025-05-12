import React from "react";
import StatCard from "../components/StatCard";
import Link from "next/link";

export default async function page() {
  return (
    <>
      <header>
        <div className="qu-header">
          <img
            src="assets/images/qu-banner.jpg"
            alt="Qatar University"
            className="qu-header-bg"
          />
          <div className="qu-header-overlay">
            <div className="qu-header-left">
              <img
                src="/assets/images/qu_logo_white2.png"
                alt="QU Logo"
                className="qu-logo"
              />
              <h1 className="qu-title">Qatar University</h1>
            </div>
            <Link href="/" className="qu-login-btn">
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className="stats-page-main">
        <h1>Qatar University Statistics</h1>
        <div className="stat-page-intro-container">
          <div className="stat-page-intro">
            <h2>📊 Statistics Overview</h2>
            <p>
              Explore insights about student performance, course trends, and
              academic progress at Qatar University.
            </p>
          </div>
          <div className="stat-page-container">
            <StatCard
              title="Top 3 Most Enrolled Courses"
              description="The three courses with the highest number of student enrollments."
              /* data={stats.top3Courses} */
            />

            <StatCard
              title="Top 3 Students by GPA"
              description="The students with the highest cumulative GPA across all semesters."
              /* data={stats.top3Students} */
            />

            <StatCard
              title="Average GPA per Major"
              description="The average GPA of students grouped by their declared majors."
              /* data={stats.avgGpaPerMajor} */
            />

            <StatCard
              title="Total Students per Major"
              description="The number of students currently enrolled in each major."
              /* data={stats.totalStudentsPerMajor} */
            />

            <StatCard
              title="Total Students per Semester"
              description="The total number of students enrolled during each academic semester."
              /* data={stats.studentsPerSemester} */
            />

            <StatCard
              title="Fail Rate Per Course"
              description="The percentage of students who received an 'F' in each course."
              /* data={stats.highestFailRateCourses} */
            />

            <StatCard
              title="Pass Rate Per Course"
              description="The percentage of students who successfully passed each course."
              /* data={} */
            />

            <StatCard
              title="Average Credits Completed per Major"
              description="The average number of credit hours completed by students in each major."
              /* data={stats.avgGradePerCourse} */
            />

            <StatCard
              title="Average Class Size Per Course"
              description="The average number of students registered in each course section."
              /* data={stats.completionRateByCourse} */
            />

            <StatCard
              title="Top 5 Most Active Instructor (Most Students)"
              description="Instructors with the highest number of total students across all their classes."
              /* data={stats.avgCreditsPerMajor} */
            />
          </div>
        </div>
        <img
          src="assets/images/student_drawing.webp"
          alt="student-drawing"
          className="stat-page-img"
        />
      </main>
    </>
  );
}
