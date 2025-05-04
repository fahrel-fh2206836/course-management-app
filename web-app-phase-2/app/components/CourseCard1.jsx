import React from 'react'

export default function CourseCard1({c, s, i}) {
  return (
    <div className="course-card">
        <div className="card-flag"><p>{c.courseCode}</p></div>
        <div className="card-course-name"><p>{c.courseName}</p></div>
        <div className="card-course-instructor"><p>Instructor: {i.user.firstName} {i.user.lastName}</p></div>
        <div className="card-course-section-location"><p>Section ID: {s.sectionId}</p><p>Class Location: {s.location !== '' ? s.location : 'None'}</p></div>
        <hr/>
        <div className="card-course-sem-schedule"><p><i className='bx bx-calendar'></i>{s.semester}</p><p><i className='bx bx-calendar-week'></i>{s.days !== '' ? s.days : 'None'}</p><p><i className='bx bx-time'></i>{s.time !== '' ? s.time : 'None'}</p></div>
     </div>
  )
}
