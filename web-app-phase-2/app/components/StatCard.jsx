import React from 'react'

export default function StatCard({ title, data }) {
  return (
    <Card className="stat-page-card">
      <CardContent className="stat-page-card-content">
        <h2 className="stat-page-title">{title}</h2>
        <ul className="stat-page-list">
          {/* {data.map((item, idx) => (
            <li key={idx} className="stat-page-list-item">
              <span className="stat-page-label">{item.label}</span>
              <span className="stat-page-value">{item.value}</span>
            </li>
          ))} */}
        </ul>
      </CardContent>
    </Card>
  );
}

export function Card({ children, className = '' }) {
  return <div className={`stat-card ${className}`}>{children}</div>;
}

export function CardContent({ children, className = '' }) {
  return <div className={`stat-card-content ${className}`}>{children}</div>;
}