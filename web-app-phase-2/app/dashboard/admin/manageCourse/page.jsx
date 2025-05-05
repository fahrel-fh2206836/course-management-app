'use client'
import { CourseContext } from '@/app/context/CourseContext'
import React, { useContext } from 'react'

export default function page() {
  const { selectedCourse } = useContext(CourseContext);
  return (
    <div>{selectedCourse.courseName}</div>
  )
}
