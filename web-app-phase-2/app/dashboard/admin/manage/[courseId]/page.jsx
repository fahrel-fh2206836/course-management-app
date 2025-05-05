import React, { useContext } from 'react'

export default function page({ params }) {
  return (
    <div>{params.courseId}</div>
  )
}
