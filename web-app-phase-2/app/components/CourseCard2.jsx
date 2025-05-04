'use client'
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { SectionContext } from '@/app/context/SectionContext';

export default function CourseCard2({ s, c }) {
  const router = useRouter();
  const { setSelectedSection } = useContext(SectionContext);

  function goToGradesHandler(s) {
    setSelectedSection(s);
    router.push('/dashboard/instructor/grades');
  }

  return (
        <div className="course-card hover-underline" onClick={() => goToGradesHandler(s)}>
            <div className="card-seats position-corner-top-left">
                <i className='bx bxs-group'></i>
                <p>{s.currentSeats}/{s.totalSeats}</p>
            </div>
            <div className="card-flag"><p>{c.courseCode}</p></div>
            <div className="card-course-name"><p>{c.courseName}</p></div>
            <div className="card-course-section-location"><p>Section ID: {s.sectionId}</p><p>Class Location: {s.location !== '' ? s.location : 'None'}</p></div>
            <hr/>
            <div className="card-course-sem-schedule"><p><i className='bx bx-calendar'></i>{s.semester}</p><p><i className='bx bx-calendar-week'></i>{s.days !== '' ? s.days : 'None'}</p><p><i className='bx bx-time'></i>{s.time !== '' ? s.time : 'None'}</p></div>
        </div>
  )
}
