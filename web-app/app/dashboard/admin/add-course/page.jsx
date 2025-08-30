import AddCourse from '@/app/components/AddCourse'
import appRepo from '@/app/repo/app-repo'
import React from 'react'

export default async function AddCoursePage() {
  const majors = await appRepo.getMajors();
  const cmpsCourse = await appRepo.getCourseByMajorId("0fa71028-dcb7-4cec-a20a-df8b6f2ddbc3");
  const cmpeCourse = await appRepo.getCourseByMajorId("ae1662c5-9ad8-41a6-901c-eeed670b9a0b");
  const elecCourse = await appRepo.getCourseByMajorId("20d6f7a0-73cd-4173-88c4-2927d145dfe6");
  const mathCourse = await appRepo.getCourseByMajorId("bc95010b-8cc1-450e-a690-0accff9f1cf4");
  return (
    <main className='add-page-main'>
        <div className="form-container">
            <h2>Add New Course</h2>
            <AddCourse majors={majors} csCourse={cmpsCourse} ceCourse={cmpeCourse} eeCourse={elecCourse} mathCourse={mathCourse}/>
            </div>
    </main>
  )
}
