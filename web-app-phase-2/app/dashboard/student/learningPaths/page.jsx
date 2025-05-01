'use client'

import React from 'react'
import styles from './page.module.css'
import students from '@/app/data/students.json'
import users from '@/app/data/users.json'
import majors from '@/app/data/majors.json'

export default function LearningPathPage() {
  const student = students[0]
  const user = users.find(u => u.userId === student.userId)
  const major = majors.find(m => m.majorId === student.majorId)

  if (!student || !user || !major) return <p>Student data not found.</p>

  const progress = Math.round((student.finishedCreditHour / major.totalCreditHour) * 100)
  const completedCourses = 5

  return (
    <main className={styles.main}>
      <h1>Track your Progress</h1>

      <div className={styles.achievements}>
        <p>
          Hello, <span>{user.firstName} {user.lastName}</span>. Here’s a summary of your
          <span> Academic Performance</span> so far:
        </p>
        <img src="/assets/images/track_achievements_wide.png" alt="Achievements" />

        <div className={styles.statCard}>
          <div><span>Major:</span> <span>{major.majorName}</span></div>
          <div><span>CGPA:</span> <span>{student.gpa}</span></div>
          <div><span>Completed Courses:</span> <span>{completedCourses}</span></div>
          <div><span>Completed Credit Hours:</span> <span>{student.finishedCreditHour}/{major.totalCreditHour}</span></div>
          <div>
            <div className={styles.progressBar}>
              <div style={{ width: `${progress}%`, backgroundColor: 'green', height: '10px' }}></div>
            </div>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      <div className={styles.tracker}>
        <h1 className={styles.trackerHeading}>
          Track your Learning Path <i className='bx bx-trending-up'></i>
        </h1>

        <label htmlFor="status-filter" className={styles.statusLabel}>Select Status:</label>
        <select id="status-filter" className={styles.statusDropdown}>
          <option value="completed">Completed</option>
          <option value="in_progress">In Progress</option>
          <option value="pending">Pending</option>
        </select>

        <div className={styles.container}>
          <div className={styles.statusCompleted}>
            <h2 className={styles.statusHeading}>
              <span className={`${styles.statusDot} ${styles.completedDot}`}></span>
              Completed
            </h2>
            <div className={styles.courseList}></div>
          </div>

          <div className={styles.statusPending}>
            <h2 className={styles.statusHeading}>
              <span className={`${styles.statusDot} ${styles.pendingDot}`}></span>
              Pending
            </h2>
            <div className={styles.courseList}></div>
          </div>

          <div className={styles.statusInProgress}>
            <h2 className={styles.statusHeading}>
              <span className={`${styles.statusDot} ${styles.inProgressDot}`}></span>
              In Progress
            </h2>
            <div className={styles.courseList}></div>
          </div>
        </div>
      </div>

      <div className={styles.prerequisite}>
        <h1 className={styles.prerequisiteHeading}>
          Your Program's Prerequisite Flowchart <i className='bx bx-sitemap'></i>
        </h1>
        <div className={styles.imgPrerequisite}>
          <img id="picture" src="/assets/images/flowchart.png" alt="Prerequisite Flowchart" />
        </div>
      </div>
    </main>
  )
}