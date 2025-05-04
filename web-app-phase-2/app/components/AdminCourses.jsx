'use client'

import styles from "@/app/dashboard/admin/page.module.css"
import React, { useEffect, useRef, useState } from 'react';
import { getCourseByMajorStatusAction, getCourseByStatusAction } from "../actions/server-actions";

export default function AdminCourses({ majors, ongoingCourse, regCourse, notOfferedCourse}) {

    const [status, setStatus] = useState('ongoing');

    const [selectedMajors, setSelectedMajors] = useState({
        smallScreen: 'all',
        ongoing: 'all',
        registration: 'all',
        notOffered: 'all'
    });

    const [courses, setCourses] = useState({
        smallScreen: ongoingCourse,
        ongoing: ongoingCourse,
        registration: regCourse,
        notOffered: notOfferedCourse
    });

    const [hasMounted, setHasMounted] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
        setIsSmallScreen(window.matchMedia("(max-width: 1023px)").matches);
    };

    handleResize(); // check immediately on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

if (!hasMounted) return null; // ← prevents mismatch
    

    async function handleChangeStatus(e) {
        const courseStatus = e.target.value;
        const filteredCourses = await getCourseByStatusAction(courseStatus);
        setStatus(courseStatus);
        setCourses({...courses, smallScreen: filteredCourses});
    }

    async function handleMajorChange(key, majorIdSelected) {
        let filteredMajors;
        const courseStatus = key === "smallScreen" ? status : key;
        if(majorIdSelected==="all") {
            filteredMajors = await getCourseByStatusAction(courseStatus);
        } else {
            filteredMajors = await getCourseByMajorStatusAction(majorIdSelected, courseStatus);
        }
        setCourses(prev => ({
          ...prev,
          [key]: filteredMajors
        }));
      }
    
    return (
    <>
        {isSmallScreen && (
        <>
            <div className={styles.statusContainer}>
            <i
                className={`${
                    status === 'ongoing'
                    ? 'bx bxs-hourglass-top'
                    : status === 'registration'
                    ? 'bx bxs-check-circle'
                    : 'bx bxs-x-circle'
                } icon-circle ${styles[status]}`}
            />
            <label htmlFor="status" className={styles.label}>Select Status:</label>
            <select
                name="status"
                id="status"
                className={styles.select}
                defaultValue={status}
                onChange={(e) => handleChangeStatus(e)}
            >
                <option value="ongoing">Ongoing</option>
                <option value="registration">Registration</option>
                <option value="notOffered">Not Offered</option>
            </select>
            </div>

            <div className={styles.courseContainer}>
            <div className={styles.searchFilter}>
                <div className={styles.statusTitle}>
                <i className={`bx bxs-circle ${styles[status]}`}></i>
                <p className={styles[status]}>{status === 'ongoing' ? 'Ongoing Courses' : status === 'registration' ? 'Open Courses' : 'Not Offered Courses'}</p>
                </div>
                <div className={styles.majorFilter}>
                <label htmlFor="major"><i className='bx bxs-filter-alt icon-circle'></i></label>
                <select id="major" name="major" defaultValue={selectedMajors.smallScreen} onChange={(e) => handleMajorChange("smallScreen", e.target.value)}>
                    {renderMajorOptions(majors)}
                </select>
                </div>
            </div>
            <hr />
            <div className={styles.courseList}>
                    {status === "ongoing" ? courses.ongoing.map((c, index) => renderCourses(index, c)) : status === "registration" ? courses.registration.map((c, index) => renderCourses(index, c)) : courses.notOffered.map((c, index) => renderCourses(index, c))}
                </div>
            </div>
        </>
      )}

      {!isSmallScreen && [
        <div key="ongoing" className={`${styles.courseContainer} ${styles.ongoingContainer}`}>
          <div className={styles.searchFilter}>
            <div className={styles.statusTitle}>
              <i className={`bx bxs-circle ${styles.ongoing}`}></i>
              <p className={styles.ongoing}>Ongoing Courses</p>
            </div>
            <div className={styles.majorFilter}>
              <label htmlFor="major-ongoing"><i className='bx bxs-filter-alt icon-circle'></i></label>
              <select id="major-ongoing" name="major" defaultValue={selectedMajors.ongoing} onChange={(e) => handleMajorChange("ongoing", e.target.value)}>
                {renderMajorOptions(majors)}
              </select>
            </div>
          </div>
          <hr />
          <div className={styles.courseList}>
                {courses.ongoing.map((c, index) => renderCourses(index, c))}
            </div>
        </div>,

        <div key="registration" className={`${styles.courseContainer} ${styles.registrationContainer}`}>
          <div className={styles.searchFilter}>
            <div className={styles.statusTitle}>
              <i className={`bx bxs-circle ${styles.registration}`}></i>
              <p className={styles.registration}>Open Courses</p>
            </div>
            <div className={styles.majorFilter}>
              <label htmlFor="major-reg"><i className='bx bxs-filter-alt icon-circle'></i></label>
              <select id="major-reg" name="major" defaultValue={selectedMajors.registration} onChange={(e) => handleMajorChange("registration", e.target.value)}>
                {renderMajorOptions( majors )}
              </select>
            </div>
          </div>
          <hr />
            <div className={styles.courseList}>
                {courses.registration.map((c, index) => renderCourses(index, c))}
            </div>
        </div>,

        <div key="not-offered" className={`${styles.courseContainer} ${styles.notOfferedContainer}`}>
          <div className={styles.searchFilter}>
            <div className={styles.statusTitle}>
              <i className={`bx bxs-circle ${styles.notOffered}`}></i>
              <p className={styles.notOffered}>Not Offered Courses</p>
            </div>
            <div className={styles.majorFilter}>
              <label htmlFor="major-not"><i className='bx bxs-filter-alt icon-circle'></i></label>
              <select id="major-not" name="major" defaultValue={selectedMajors.notOffered} onChange={(e) => handleMajorChange("notOffered", e.target.value)}>
                {renderMajorOptions(majors)}
              </select>
            </div>
          </div>
          <hr />
          <div className={styles.courseList}>
                {courses.notOffered.map((c, index) => renderCourses(index, c))}
            </div>
        </div>
      ]}
    </>
    )
}

function renderMajorOptions(majors) {
    return (
      <>
        <option value="all">All Majors</option>
        {majors.map(m => (
          <option key={m.majorId} value={m.majorId}>
            {m.majorName}
          </option>
        ))}
      </>
    );
}

function renderCourses(key, c) {
    return (
        <div className="course-card" key={key}>
            <div className="manage-class-btn" /*onClick="manageCourse('${c.id}')"*/><i className='bx bxs-cog'></i><p>Manage Course</p></div>
            <div className="card-flag"><p>{c.courseCode}</p></div>
            <div className="card-course-name"><p>{c.courseName}</p></div>
            <div className="card-course-name"><p>Course ID: {c.id} </p></div>
        </div>
    )
}

