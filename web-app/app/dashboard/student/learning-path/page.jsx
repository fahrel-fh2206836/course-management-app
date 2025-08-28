// app/dashboard/learning-path/page.jsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";

import students from "@/app/data/students.json";
import users from "@/app/data/users.json";
import majors from "@/app/data/majors.json";
import registrations from "@/app/data/registrations.json";
import sections from "@/app/data/sections.json";
import courses from "@/app/data/courses.json";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function LearningPathPage() {
  // 1) Always call hooks in a fixed order, no returns before this block:
  const { data: session, status } = useSession();
  const user = session?.user;
  const userId = user?.userId ?? user?.id;

  const [statusFilter, setStatusFilter] = useState("completed");
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [completedCH, setCompletedCH] = useState(0);

  // Resolve student/user/major from JSON (safe even if userId is undefined)
  const student = useMemo(
    () => students.find((s) => s.userId === userId),
    [userId]
  );
  const dbUser = useMemo(
    () => users.find((u) => u.userId === userId),
    [userId]
  );
  const major = useMemo(
    () => (student ? majors.find((m) => m.majorId === student.majorId) : null),
    [student]
  );

  // Categorize courses (safe if no regs)
  const studentRegs = useMemo(
    () => (student ? registrations.filter((r) => r.studentId === student.userId) : []),
    [student]
  );

  const categorized = useMemo(() => {
    const acc = { completed: [], inProgress: [], pending: [] };
    for (const reg of studentRegs) {
      const course = courses.find((c) => c.id === reg.courseId);
      const section = sections.find((s) => s.sectionId === reg.sectionId);
      if (!course || !section) continue;

      const info = {
        courseCode: course.courseCode || "N/A",
        courseName: course.courseName || "Unnamed Course",
        days: section.days || "No Days",
        time: section.time || "No Time",
        grade: reg.grade || "",
        status: section.sectionStatus,
      };

      if (info.grade && info.grade.toUpperCase() !== "F") acc.completed.push(info);
      else if (info.status === "ONGOING") acc.inProgress.push(info);
      else acc.pending.push(info);
    }
    return acc;
  }, [studentRegs]);

  // Progress calc
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
    if (major?.majorCode === "ELEC") return "/assets/images/Screenshot 2025-05-07 200319.jpg";
    if (major?.majorCode === "MATH") return "/assets/images/math-ug-curriculum-flowchart.png";
    return "/assets/images/default_flowchart.png";
  }, [major?.majorName, major?.majorCode]);

  const renderCourseList = (list) =>
    list.map((course, idx) => (
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

  const currentList =
    statusFilter === "completed"
      ? categorized.completed
      : statusFilter === "in_progress"
        ? categorized.inProgress
        : categorized.pending;

  // 2) Only branch inside the render, AFTER all hooks have been called:
  return (
    <>
      {status === "loading" ? (
        <LoadingSpinner center />
      ) : status === "unauthenticated" ? (
        <p>You must be signed in</p>
      ) : !student || !dbUser || !major ? (
        <p>Data missing for this student.</p>
      ) : (
        <main className={styles.mainLearningPath}>
          <h1 className={styles.pageHeader}>Track your Progress</h1>
          <div className={`section-style achievements ${styles.statCard}`}>
            <p>
              Hello, <span id="name">{user?.firstName} {user?.lastName}</span>. Here’s a summary of your{" "}
              <span>Academic Performance</span> so far:
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
                <span id="stats-CGPA">{user?.Student?.gpa ?? "N/A"}</span>
              </div>
              <div>
                <span>Completed Courses:</span>
                <span id="stats-completed-courses">{categorized.completed.length}</span>
              </div>
              <div>
                <span>Completed Credit Hours:</span>
                <span id="stats-completed-ch">
                  {completedCH}/{major.totalCreditHour}
                </span>
              </div>
              <div className={styles.progressRow}>
                <div id="progress-bar" className={styles.progressBar}>
                  <div ref={progressBarRef} className={styles.progressInner} />
                </div>
                <span id="bar-percentage">{progress}%</span>
              </div>
            </div>
          </div>

          <div className="section-style tracker">
            <h1>
              Track your Learning Path <i className={`bx bx-trending-up ${styles.iconDefLearningPath}`} />
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
                  {statusFilter === "completed" ? "Completed" : "Completed (all)"}
                </h2>
                <div className={styles.courseList}>
                  {statusFilter === "completed" ? renderCourseList(currentList) : renderCourseList(categorized.completed)}
                </div>
              </div>

              <div className="status-pending">
                <h2>
                  <span className="status-dot pending-dot" />
                  {statusFilter === "pending" ? "Pending" : "Pending (all)"}
                </h2>
                <div className={styles.courseList}>
                  {statusFilter === "pending" ? renderCourseList(currentList) : renderCourseList(categorized.pending)}
                </div>
              </div>

              <div className="status-in_progress">
                <h2>
                  <span className="status-dot in_progress-dot" />
                  {statusFilter === "in_progress" ? "In progress" : "In progress (all)"}
                </h2>
                <div className={styles.courseList}>
                  {statusFilter === "in_progress" ? renderCourseList(currentList) : renderCourseList(categorized.inProgress)}
                </div>
              </div>
            </div>
          </div>

          <div className="section-style prerequisite">
            <h1>
              Your Program&apos;s Prerequisite Flowchart <i className="bx bx-sitemap" />
            </h1>
            <div className="img-prerequsite">
              <img
                src={flowchartImage}
                alt="Program prerequisite flowchart"
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
