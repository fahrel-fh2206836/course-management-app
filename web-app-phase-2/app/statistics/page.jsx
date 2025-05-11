import React from 'react'
import StatCard from '../components/StatCard';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <header>
        <div className="qu-header">
          <img src="assets/images/qu-banner.jpg" alt="Qatar University" className="qu-header-bg" />
          <div className="qu-header-overlay">
            <div className="qu-header-left">
              <img src="/assets/images/qu_logo_white2.png" alt="QU Logo" className="qu-logo" />
              <h1 className="qu-title">Qatar University</h1>
            </div>
            <Link href="/" className="qu-login-btn">Login</Link>
          </div>
        </div>
      </header>
      <main className="stats-page-main"> 
        <h1>Qatar University Statistics</h1>
        <div className='stat-page-intro-container'>
          <div className="stat-page-intro">
              <h2>📊 Statistics Overview</h2>
              <p>Explore insights about student performance, course trends, and academic progress at Qatar University.</p>
          </div>
          <div className="stat-page-container">
            <StatCard title="Total Students per Major" /*data={stats.totalStudentsPerMajor}*/ />
            <StatCard title="Top 3 Most Enrolled Courses" /*data={stats.top3Courses}*/ />
            <StatCard title="Pass/Fail Rate per Course" /*data={mergePassFail(stats.passRates, stats.failRates)}*//>
            <StatCard title="Average GPA per Major" /*data={stats.avgGpaPerMajor}*/ />
            <StatCard title="Average Grade per Course" /*data={stats.avgGradePerCourse}*/ />
            <StatCard title="Completion Rate by Course" /*data={stats.completionRateByCourse}*/ />
            <StatCard title="Courses with Highest Fail Rate" /*data={stats.highestFailRateCourses}*/ />
            <StatCard title="Students per Semester" /*data={stats.studentsPerSemester}*/ />
            <StatCard title="Top 3 Students by GPA" /*data={stats.top3Students}*/ />
            <StatCard title="Average Credits per Major" /*data={stats.avgCreditsPerMajor}*/ />
          </div>
        </div>
        <img src="assets/images/student_drawing.webp" alt="student-drawing" className='stat-page-img'/>
      </main>
    </>
  );
}


function mergePassFail(passes, fails) {
  const merged = {};
  passes.forEach(p => {
    merged[p.courseId] = { label: p.courseId, value: p._count._all };
  });
  fails.forEach(f => {
    if (merged[f.courseId]) {
      merged[f.courseId].value += f._count._all;
    } else {
      merged[f.courseId] = { label: f.courseId, value: f._count._all };
    }
  });
  return Object.values(merged);
}