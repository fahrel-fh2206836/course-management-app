import React from 'react'
import StatCard from '../components/StatCard';

export default function page() {
  return (
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