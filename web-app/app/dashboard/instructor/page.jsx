'use client'
import { getInstructorSecBySemAction, getInstructorTotalStudentSemAction, getSemestersAction } from '@/app/actions/server-actions';
import CourseCard2 from '@/app/components/CourseCard2';
import EmptySection from '@/app/components/EmptySection';
import { UserContext } from '@/app/context/UserContext';
import React, { useContext, useState, useEffect } from 'react'
import styles from './page.module.css'
import LoadingSpinner from '@/app/components/LoadingSpinner';


export default function page() {
  const { user } =  useContext(UserContext);
  const [ongoingSecs, setOngoingSecs] = useState(null);
  const [nonOngoingSecs, setNonOngoingSecs] = useState(null);
  const [currStudents, setCurrStudents] = useState(0);

  useEffect (()  => {
      if(user) {
        const fetchActiveSecs = async () => {
          const semesters = await getSemestersAction();
          const activeSecs = await getInstructorSecBySemAction(user.userId, semesters[semesters.length-2].semester, false);
          setOngoingSecs(activeSecs);
        };
        const fetchNonActiveSecs = async () => {
          const semesters = await getSemestersAction();
          const nonActiveSecs = await getInstructorSecBySemAction(user.userId,  semesters[semesters.length-2].semester, true);
          setNonOngoingSecs(nonActiveSecs);
        }
        const fetchCurrStudent = async () => {
          const semesters = await getSemestersAction();
          const totalCurrStudent = await getInstructorTotalStudentSemAction(user.userId,  semesters[semesters.length-2].semester);
          setCurrStudents(totalCurrStudent._sum.currentSeats);
        }
        fetchActiveSecs();
        fetchNonActiveSecs();
        fetchCurrStudent();
      }
    }, [user]);

  return (
    <main className='main-dashboard'>
        <h1>Course Management System</h1>
        <div className="welcome-stats section-style">
            <p><span>Welcome</span>, <span id="name">{user?.firstName} {user?.lastName}</span>, to Qatar University's Course Management System.</p>
            <p>Your personalized dashboard is here to help you manage your courses and streamline your teaching experience</p>
            
            <div className="stats-card">
                <div><span>Active Classes:</span><span id="Activeclass">{ongoingSecs?.length}</span></div>
                <div><span>Number of Active Students:</span><span id="totalStud">{currStudents}</span></div>
                <div><span>Total Classes:</span><span id="Noclasses">{!nonOngoingSecs ? "N/A" : nonOngoingSecs?.length + ongoingSecs?.length}</span></div>
            </div>
        </div>
        <div className="welcome-img">
            <img src="../assets/images/welcome2.jpg" alt=""/>
        </div>
        <h1 id="ongoing-text">Teaching Sections</h1>
        <div className="registered-courses section-style">

            <ul className="course-card-list">
              <h3>Ongoing Courses</h3>
              <div className={styles.cardGroup}>{!ongoingSecs ? <LoadingSpinner></LoadingSpinner> : ongoingSecs?.length === 0 ? <EmptySection text="No Ongoing Courses"></EmptySection> : 
                                      ongoingSecs?.map(s => <CourseCard2 key={s.sectionId} s={s} c={s.course}></CourseCard2>)}</div>
              
              <div className={styles.pFcourses}>
                  <h3>Previous/Future Courses</h3>
              </div>
              <div className={styles.pFcardGroup}>{!nonOngoingSecs ? <LoadingSpinner></LoadingSpinner> : nonOngoingSecs?.length === 0 ? <EmptySection text="No Non-Active Courses"></EmptySection> :
                                        nonOngoingSecs?.map(s => <CourseCard2 key={s.sectionId} s={s} c={s.course}></CourseCard2>)}</div>
            </ul>
        </div>
    </main>
  )
}
