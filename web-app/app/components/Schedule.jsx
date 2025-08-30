import React from 'react'
import appRepo from '../repo/app-repo'
import EmptySection from './EmptySection';

export default async function Schedule({ ongoingSemester }) {
  const ongoingSection = await appRepo.getSections(null, ongoingSemester);

  return (
    <table id="schedule-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course</th>
              <th>Section</th>
              <th>Instructor</th>
              <th>Day</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {ongoingSection.length === 0 ? <EmptySection text={`No Ongoing Section in ${ongoingSemester}`}/> :
              ongoingSection.map((s,index) => ScheduleRow(index, s.course, s, s.instructor.user))
            }
          </tbody>
    </table>
  )
}

function ScheduleRow(key, c, s, i) {
    const days = s.days.split("-");
    return (
        <tr key={key}>
                <td>{c.courseCode}</td>
                <td>{c.courseName}</td>
                <td>{s.sectionId}</td>
                <td>{i ? i.firstName : ''} {i ? i.lastName : ''}</td>
                <td>
                    <div className="week-days">
                        <div className={`day ${days.includes("SUN") ? 'selected' : ''}`}>S</div>
                        <div className={`day ${days.includes("SUN") ? 'selected' : ''}`}>M</div>
                        <div className={`day ${days.includes("SUN") ? 'selected' : ''}`}>T</div>
                        <div className={`day ${days.includes("WED") ? 'selected' : ''}`}>W</div>
                        <div className={`day ${days.includes("THU") ? 'selected' : ''}`}>T</div>
                        <div className={`day ${days.includes("FRI") ? 'selected' : ''}`}>F</div>
                        <div className={`day ${days.includes("SAT") ? 'selected' : ''}`}>S</div>
                    </div>
                </td>
                <td>{s.time}</td>   
                <td>{s.location}</td>
            </tr>
    )
}
