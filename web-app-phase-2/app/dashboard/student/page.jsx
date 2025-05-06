'use client'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { UserContext } from '@/app/context/UserContext'
import styles from './page.module.css'
import CourseCard1 from '@/app/components/CourseCard1'
import { getRegSecBySemAction, getMajorByIdAction, getSemestersAction } from '@/app/actions/server-actions'
import EmptySection from '@/app/components/EmptySection'
import registrations from '@/app/data/registrations.json'
import sections from '@/app/data/sections.json'
import courses from '@/app/data/courses.json'

export default function page() {
  const [regSections, setRegSections] = useState([]);
  const [major, setMajor] = useState(null);
  const [progress, setProgress] = useState(0);
  const [completedCredits, setCompletedCredits] = useState(0);
  const { user } = useContext(UserContext);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (user) {
      const fetchRegSec = async () => {
        const semesters = await getSemestersAction();
        const regSec = await getRegSecBySemAction(user.userId, semesters[semesters.length - 2].semester);
        setRegSections(regSec);
      };

      const fetchMajor = async () => {
        const m = await getMajorByIdAction(user.Student?.majorId);
        setMajor(m);

        // === Learning Path-style credit calculation ===
        const studentRegs = registrations.filter(r => r.studentId === user.userId);
        let credits = 0;

        studentRegs.forEach(reg => {
          const course = courses.find(c => c.id === reg.courseId);
          const section = sections.find(s => s.sectionId === reg.sectionId);

          if (!course || !section) return;

          const grade = reg.grade?.toUpperCase();
          const status = section.sectionStatus;

          if (grade && grade !== 'F') credits += course.creditHour;
          else if (status === 'COMPLETED') credits += course.creditHour;
        });

        setCompletedCredits(credits);

        if (progressBarRef.current && m.totalCreditHour > 0) {
          const percent = Math.round((credits / m.totalCreditHour) * 100);
          setProgress(percent);
          progressBarRef.current.style.width = `${percent}%`;
        }
      };

      fetchRegSec();
      fetchMajor();
    }
  }, [user]);

  return (
    <main className="main-dashboard">
      <h1>Course Management System</h1>
      <div className="welcome-stats section-style">
        <p>
          <span>Welcome</span>, <span id="name">{user?.firstName} {user?.lastName}</span>, to Qatar University's Course Management System.
        </p>
        <p>Register and manage courses with ease and track your progress!</p>

        <div className="stats-card">
          <div><span>Major:</span><span id="stats-major">{major?.majorName ?? "N/A"}</span></div>
          <div><span>CGPA:</span><span id="stats-CGPA">{user?.Student?.gpa ?? "N/A"}</span></div>
          <div><span>No. of Current Courses:</span><span id="stats-no-courses">{regSections.length}</span></div>
          <div><span>Completed Credit Hours:</span><span id="stats-completed">{completedCredits}</span></div>
          <div>
            <div id="progress-bar"><div ref={progressBarRef}></div></div>
            <span id="bar-percentage">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="welcome-img">
        <img src="../assets/images/welcome.jpg" alt="Welcome" />
      </div>

      <h1 id="ongoing-text">Ongoing Registered Courses</h1>
      <div className="registered-courses section-style">
        <ul className={`course-card-list ${styles.courseCardList}`} id="course-card-list">
          {regSections.length === 0 ? (
            <EmptySection text="No Registered Section!" />
          ) : (
            regSections.map((rs) => (
              <CourseCard1 key={rs.id} c={rs.section.course} s={rs.section} i={rs.section.instructor} />
            ))
          )}
        </ul>
      </div>
    </main>
  );
}