// app/dashboard/learning-path/LearningPathClient.jsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import EmptySection from "./EmptySection";

export default function LearningPathComponent({ data, styles }) {
  const { user, student, major, categorized, status } = data;

  const [statusFilter, setStatusFilter] = useState("completed");
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [completedCH, setCompletedCH] = useState(0);

  useEffect(() => {
    const ch = Number(student?.finishedCreditHour ?? 0);
    const total = Number(major?.totalCreditHour ?? 0);
    setCompletedCH(ch);
    const pct = total > 0 ? Math.round((ch / total) * 100) : 0;
    setProgress(pct);
    if (progressBarRef.current) progressBarRef.current.style.width = `${pct}%`;
  }, [student?.finishedCreditHour, major?.totalCreditHour]);

  const flowchartImage = useMemo(() => {
    const name = (major?.majorName || "").toLowerCase();
    if (name.includes("science")) return "/assets/images/flowchart_cs.png";
    if (name.includes("engineering") && major?.majorCode === "CMPE")
      return "/assets/images/flowchart_ce.png";
    if (major?.majorCode === "ELEC")
      return "/assets/images/Screenshot 2025-05-07 200319.jpg";
    if (major?.majorCode === "MATH")
      return "/assets/images/math-ug-curriculum-flowchart.png";
    return "/assets/images/default_flowchart.png";
  }, [major?.majorName, major?.majorCode]);

  function renderCourseList(list) {
    if (list.length === 0) return <EmptySection text={"No Courses"} />;
    return list.map((course, idx) => (
      <div key={idx} className={styles.courseCard}>
        <div className={styles.courseHeader}>
          <span className={styles.courseCode}>{course.courseCode}</span>
          {course.grade && (
            <span className={styles.courseGrade}>
              <span>{course.grade}</span>
            </span>
          )}
        </div>
        <div className={styles.courseBody}>
          <p className={styles.courseName}>{course.courseName}</p>
        </div>
      </div>
    ));
  }

  const currentList =
    statusFilter === "completed"
      ? categorized.completed
      : statusFilter === "in_progress"
      ? categorized.inProgress
      : categorized.pending;

  if (status === "unauthenticated") return <p>You must be signed in</p>;
  if (!student || !user || !major) return <p>Data missing for this student.</p>;

  return (
    <main className={styles.mainLearningPath}>
      <h1 className={styles.pageHeader}>Track your Progress</h1>

      <div className={`section-style achievements ${styles.statCard}`}>
        <p>
          Hello,{" "}
          <span id="name">
            {user?.firstName} {user?.lastName}
          </span>
          . Here’s a summary of your <span>Academic Performance</span> so far:
        </p>

        <img
          src="/assets/images/track_achievements_wide.png"
          alt="Track achievements"
        />

        <div className="stats-card">
          <div>
            <span>Major:</span>
            <span id="stats-major">{major.majorName}</span>
          </div>
          <div>
            <span>CGPA:</span>
            <span id="stats-CGPA">{student?.gpa ?? "N/A"}</span>
          </div>
          <div>
            <span>Completed Courses:</span>
            <span id="stats-completed-courses">
              {categorized.completed.length}
            </span>
          </div>
          <div>
            <span>Completed Credit Hours:</span>
            <span id="stats-completed-ch">
              {completedCH}/{major.totalCreditHour}
            </span>
          </div>
          <div>
            <div id="progress-bar">
              <div ref={progressBarRef} />
            </div>
            <span id="bar-percentage">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="section-style tracker">
        <h1>
          Track your Learning Path{" "}
          <i className={`bx bx-trending-up ${styles.iconDefLearningPath}`} />
        </h1>

        <label htmlFor="status-filter" className="status-label">
          Select Status:
        </label>
        <select
          id="status-filter"
          className="status-dropdown"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="completed">Completed</option>
          <option value="in_progress">In progress</option>
          <option value="pending">Pending</option>
        </select>

        <div className={styles.container} data-active={statusFilter}>
          <div className="status-completed">
            <h2>
              <span className="status-dot completed-dot" />
              Completed
            </h2>
            <div className={styles.courseList}>
              {statusFilter === "completed"
                ? renderCourseList(currentList)
                : renderCourseList(categorized.completed)}
            </div>
          </div>

          <div className="status-pending">
            <h2>
              <span className="status-dot pending-dot" />
              Pending
            </h2>
            <div className={styles.courseList}>
              {statusFilter === "pending"
                ? renderCourseList(currentList)
                : renderCourseList(categorized.pending)}
            </div>
          </div>

          <div className="status-in_progress">
            <h2>
              <span className="status-dot in_progress-dot" />
              In progress
            </h2>
            <div className={styles.courseList}>
              {statusFilter === "in_progress"
                ? renderCourseList(currentList)
                : renderCourseList(categorized.inProgress)}
            </div>
          </div>
        </div>
      </div>

      <div className="section-style prerequisite">
        <h1>
          Your Program&apos;s Prerequisite Flowchart{" "}
          <i className="bx bx-sitemap" />
        </h1>
        <div className="img-prerequsite">
          <img src={flowchartImage} alt="Program prerequisite flowchart" />
        </div>
      </div>
    </main>
  );
}
