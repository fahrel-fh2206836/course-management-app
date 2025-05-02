'use client'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/app/context/UserContext'
import styles from './page.module.css'
import CourseCard1 from '@/app/components/CourseCard1'
import { getRegSecAction } from '@/app/actions/server-actions'


export default function page() {
  // const [regSections, setRegSections] = useState([]);
  const { user } =  useContext(UserContext);

  useEffect (()  => {
    // const fetchRegSec =async () => {
    //   const regSec = await getRegSecAction();
    //   setRegSections(regSec);
    // };
    // fetchRegSec();
  }, []);


  return (
    <main className='main-dashboard'>
        <h1>Course Management System</h1>
        <div className="welcome-stats section-style">
            <p><span>Welcome</span>, <span id="name">{user?.firstName} {user?.lastName}</span>, to Qatar University's Course Management System.</p>
            <p>Register and manage courses with ease and track your progress!</p>
            
            <div className="stats-card">
                <div><span>Major:</span><span id="stats-major"></span></div>
                <div><span>CGPA:</span><span id="stats-CGPA"></span></div>
                <div><span>No. of Current Courses:</span><span id="stats-no-courses"></span></div>
                <div><span>Completed Credit Hours:</span><span id="stats-completed"></span></div>
                <div><div id="progress-bar"><div></div></div><span id="bar-percentage">40%</span></div>
            </div>
        </div>
        <div className="welcome-img">
            <img src="../assets/images/welcome.jpg" alt=""/>
        </div>
        <h1 id="ongoing-text">Ongoing Registered Courses</h1>
        <div className="registered-courses   section-style">
            <ul className={`course-card-list ${styles.courseCardList}`} id="course-card-list"> 
                {/* {regSections.map((rs) => <CourseCard1 key={rs.id} c={rs.section.course} s={rs.section} i={rs.instructor}></CourseCard1>)} */}
            </ul>
        </div>
    </main>
  )
}
