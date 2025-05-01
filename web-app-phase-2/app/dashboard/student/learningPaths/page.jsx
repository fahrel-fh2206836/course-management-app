'use client'

import React from 'react'
import styles from './page.module.css'

import students from '@/app/data/students.json'
import users from '@/app/data/users.json'
import majors from '@/app/data/majors.json'
import registrations from '@/app/data/registrations.json'
import sections from '@/app/data/sections.json'
import courses from '@/app/data/courses.json'


export default function LearningPathPage() {
  const student = students[0]
  const user = users.find(u => u.userId === student.userId)
  const major = majors.find(m => m.majorId === student.majorId)

  if (!student || !user || !major) return <p>Data missing for this student.</p>

  const progress = Math.round((student.finishedCreditHour / major.totalCreditHour) * 100)
  const studentRegistrations = registrations.filter(r => r.studentId === student.userId)

  const categorizedCourses = {
    completed: [],
    inProgress: [],
    pending: []
  }

  studentRegistrations.forEach(reg => {
    const course = courses.find(c => c.id === reg.courseId)
    const section = sections.find(s => s.sectionId === reg.sectionId)

    if (!course || !section) return

    const courseInfo = {
      courseCode: course.courseCode || 'N/A',
      courseName: course.courseName || 'Unnamed Course',
      days: section.days || 'No Days',
      time: section.time || 'No Time',
      grade: reg.grade || ''
    }

    if (courseInfo.grade && courseInfo.grade.toUpperCase() !== 'F') {
      categorizedCourses.completed.push(courseInfo)
    } else if (section.sectionStatus === 'ONGOING') {
      categorizedCourses.inProgress.push(courseInfo)
    } else {
      categorizedCourses.pending.push(courseInfo)
    }
  })

  const renderCourseList = (list) => (
    list.map((course, index) => (
      <div key={index} className={styles.courseCard}>
        <div className={styles.courseHeader}>
          <span className={styles.courseCode}>{course.courseCode}</span>
          {course.grade && (
            <span className={styles.courseGrade}>
              Grade: <span>{course.grade}</span>
            </span>
          )}
        </div>
        <div className={styles.courseBody}>
          <p className={styles.courseName}>{course.courseName}</p>
          <p className={styles.schedule}>{course.days} — {course.time}</p>
        </div>
      </div>
    ))
  )

  // Dynamically choose flowchart image
  const flowchartImage =
    major.majorName.toLowerCase().includes('science')
      ? '/assets/images/flowchart_cs.png'
      : '/assets/images/flowchart_ce.png'

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
          <div><span>Completed Courses:</span> <span>{categorizedCourses.completed.length}</span></div>
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
        <select id="status-filter" className={styles.statusDropdown} disabled>
          <option value="completed">Completed</option>
          <option value="in_progress">In Progress</option>
          <option value="pending">Pending</option>
        </select>

        <div className={styles.container}>
          <div className={styles.statusCompleted}>
            <h2 className={styles.statusHeading}>
              <span className={`${styles.statusDot} ${styles.completedDot}`}></span> Completed
            </h2>
            <div className={styles.courseList}>
              {renderCourseList(categorizedCourses.completed)}
            </div>
          </div>

          <div className={styles.statusPending}>
            <h2 className={styles.statusHeading}>
              <span className={`${styles.statusDot} ${styles.pendingDot}`}></span> Pending
            </h2>
            <div className={styles.courseList}>
              {renderCourseList(categorizedCourses.pending)}
            </div>
          </div>

          <div className={styles.statusInProgress}>
            <h2 className={styles.statusHeading}>
              <span className={`${styles.statusDot} ${styles.inProgressDot}`}></span> In Progress
            </h2>
            <div className={styles.courseList}>
              {renderCourseList(categorizedCourses.inProgress)}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.prerequisite}>
        <h1 className={styles.prerequisiteHeading}>
          Your Program's Prerequisite Flowchart <i className='bx bx-sitemap'></i>
        </h1>
        <div className={styles.imgPrerequisite}>
          <img id="picture" src={flowchartImage} alt={`${major.majorName} Flowchart`} />
        </div>
      </div>
    </main>
  )
}