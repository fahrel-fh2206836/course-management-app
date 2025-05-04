'use client'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { UserContext } from '@/app/context/UserContext'
import styles from './page.module.css'
import CourseCard1 from '@/app/components/CourseCard1'
import { getRegSecBySemAction, getMajorByIdAction, getSemestersAction } from '@/app/actions/server-actions'
import EmptySection from '@/app/components/EmptySection'


export default function page() {
  const [regSections, setRegSections] = useState([]);
  const [major, setMajor] = useState("");
  const [progress, setProgress] = useState(0);
  const { user } =  useContext(UserContext);
  const progressBarRef =  useRef(null);

  useEffect (()  => {
    if(user) {
      const fetchRegSec = async () => {
        const semesters = await getSemestersAction();
        const regSec = await getRegSecBySemAction(user.userId, semesters[semesters.length-2].semester);
        setRegSections(regSec);
      };
      const fetchMajor = async () => {
        const m = await getMajorByIdAction(user.Student.majorId)
        setMajor(m);
        if (progressBarRef.current) {
          const progress = Math.round((user.Student.finishedCreditHour / m.totalCreditHour) * 100);
          setProgress(progress);
          progressBarRef.current.style.width = `${progress}%`;
        }
      }
      fetchRegSec();
      fetchMajor();
    }

  }, [user]);

  return (
    <main className='main-dashboard'>
        <h1>Course Management System</h1>
        <div className="welcome-stats section-style">
            <p><span>Welcome</span>, <span id="name">{user?.firstName} {user?.lastName}</span>, to Qatar University's Course Management System.</p>
            <p>Register and manage courses with ease and track your progress!</p>
            
            <div className="stats-card">
                <div><span>Major:</span><span id="stats-major">{major.majorName}</span></div>
                <div><span>CGPA:</span><span id="stats-CGPA">{user?.Student.gpa}</span></div>
                <div><span>No. of Current Courses:</span><span id="stats-no-courses">{regSections.length}</span></div>
                <div><span>Completed Credit Hours:</span><span id="stats-completed">{user?.Student.finishedCreditHour}</span></div>
                <div><div id="progress-bar"><div ref={progressBarRef}></div></div><span id="bar-percentage">{progress}%</span></div>
            </div>
        </div>
        <div className="welcome-img">
            <img src="../assets/images/welcome.jpg" alt=""/>
        </div>
        <h1 id="ongoing-text">Ongoing Registered Courses</h1>
        <div className="registered-courses   section-style">
            <ul className={`course-card-list ${styles.courseCardList}`} id="course-card-list"> 
                {regSections.length === 0 ? <EmptySection text={"No Registered Section!"}></EmptySection> :
                regSections.map((rs) => <CourseCard1 key={rs.id} c={rs.section.course} s={rs.section} i={rs.section.instructor}></CourseCard1>)}
            </ul>
        </div>
    </main>
  )
}
