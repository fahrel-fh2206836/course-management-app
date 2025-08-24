import React from 'react'

export default function EmptySection({ text }) {
  return (
    <div className="empty-section">
        <i className='bx bxs-error-circle'></i>
        <p>{text}</p>
    </div>
  )
}
