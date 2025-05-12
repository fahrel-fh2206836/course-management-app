'use client'
import React, { useState } from 'react'

export default function StatCard({ title, data, description }) {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className={`stat-card stat-page-card ${isCollapse ? 'open' : ''}`}>
      <div
        className="stat-card-content stat-page-card-content"
        onClick={() => setIsCollapse(!isCollapse)}
        style={{ cursor: 'pointer' }}
      >
        <h2 className="stat-page-title">
          {title} <span className="stat-card-toggle">{isCollapse ? '▲' : '▼'}</span>
        </h2>

        <p className="stat-card-description">{description}</p>

        {isCollapse && (
          <ul className="stat-page-list">
            {/* {data.map((item, idx) => ( */}
              <li /*key={idx}*/ className="stat-page-list-item">
                <span className="stat-page-label">{/*item.label*/}Computer Science</span>
                <span className="stat-page-value">{/*item.value*/}20</span>
              </li>
            {/* ))} */}
          </ul>
        )}
      </div>
    </div>
  );
}