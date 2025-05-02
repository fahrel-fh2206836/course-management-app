import React from 'react'

export default function CourseCard1({c, s, i}) {
  return (
    <div class="course-card">
        <div class="card-flag"><p>${c.courseCode}</p></div>
        <div class="card-course-name"><p>${c.courseName}</p></div>
        <div class="card-course-instructor"><p>Instructor: ${i.firstName} ${i.lastName}</p></div>
        <div class="card-course-section-location"><p>Section ID: ${s.sectionId}</p><p>Class Location: ${s.location !== '' ? s.location : 'None'}</p></div>
        <hr/>
        <div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${s.semester}</p><p><i class='bx bx-calendar-week'></i>${s.schedule.days !== '' ? s.schedule.days : 'None'}</p><p><i class='bx bx-time'></i>${s.schedule.time !== '' ? s.schedule.time : 'None'}</p></div>
     </div>
  )
}
