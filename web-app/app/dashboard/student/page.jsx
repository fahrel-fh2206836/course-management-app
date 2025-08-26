// app/dashboard/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import CourseCard1 from "@/app/components/CourseCard1";
import {
  getRegistrationsAction,
  getMajorByIdAction,
  getSemestersAction,
} from "@/app/actions/server-actions";
import EmptySection from "@/app/components/EmptySection";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import registrations from "@/app/data/registrations.json";
import sections from "@/app/data/sections.json";
import courses from "@/app/data/courses.json";

export default function StudentDashboard() {
  const { data: session, status } = useSession();
  const user = session?.user;

  // Data
  const [regSections, setRegSections] = useState(null); // null until fetched
  const [major, setMajor] = useState(null);
  const [progress, setProgress] = useState(0);
  const [completedCredits, setCompletedCredits] = useState(0);

  // Loading/Error flags
  const [loadingStats, setLoadingStats] = useState(true);
  const [errorStats, setErrorStats] = useState(false);
  const [loadingSections, setLoadingSections] = useState(true);
  const [errorSections, setErrorSections] = useState(false);

  const progressBarRef = useRef(null);

  useEffect(() => {
    if (status !== "authenticated" || !user?.id) return;

    let cancelled = false;

    (async () => {
      try {
        setLoadingStats(true);
        setLoadingSections(true);
        setErrorStats(false);
        setErrorSections(false);

        const semesters = await getSemestersAction();
        const prevSemester = semesters?.[semesters.length - 2]?.semester;

        // Sections list
        if (prevSemester) {
          try {
            const regSec = await getRegistrationsAction(user.id, prevSemester);
            if (!cancelled) {
              if (Array.isArray(regSec)) {
                setRegSections(regSec);
              } else {
                setRegSections([]);
                setErrorSections(true);
              }
            }
          } catch {
            if (!cancelled) {
              setRegSections([]);
              setErrorSections(true);
            }
          } finally {
            if (!cancelled) setLoadingSections(false);
          }
        } else {
          if (!cancelled) {
            setRegSections([]);
            setErrorSections(true);
            setLoadingSections(false);
          }
        }

        // Stats (major + completedCredits + progress)
        try {
          const m = await getMajorByIdAction(user.Student?.majorId);
          if (!cancelled) setMajor(m ?? null);

          // Completed credits from local data
          const studentRegs = registrations.filter((r) => r.studentId === user.id);
          let credits = 0;
          studentRegs.forEach((r) => {
            const course = courses.find((c) => c.id === r.courseId);
            const section = sections.find((s) => s.sectionId === r.sectionId);
            if (!course || !section) return;
            const grade = r.grade?.toUpperCase();
            const secStatus = section.sectionStatus;
            if (grade && grade !== "F") credits += course.creditHour;
            else if (secStatus === "COMPLETED") credits += course.creditHour;
          });

          if (!cancelled) {
            setCompletedCredits(credits);
            if (progressBarRef.current && m?.totalCreditHour > 0) {
              const percent = Math.round((credits / m.totalCreditHour) * 100);
              setProgress(percent);
              progressBarRef.current.style.width = `${percent}%`;
            } else {
              setProgress(0);
              if (progressBarRef.current) progressBarRef.current.style.width = "0%";
            }
          }
        } catch {
          if (!cancelled) setErrorStats(true);
        } finally {
          if (!cancelled) setLoadingStats(false);
        }
      } catch {
        if (!cancelled) {
          setErrorSections(true);
          setErrorStats(true);
          setLoadingSections(false);
          setLoadingStats(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [status, user?.id, user?.Student?.majorId]);

  if (status === "loading")
    return (
      <main className="main-dashboard">
        <LoadingSpinner />
      </main>
    );

  if (status === "unauthenticated")
    return (
      <main className="main-dashboard">
        <p>You must be signed in</p>
      </main>
    );

  return (
    <main className="main-dashboard">
      <h1>Course Management System</h1>

      <div className="welcome-stats section-style">
        <p>
          <span>Welcome</span>,{" "}
          <span id="name">
            {user?.firstName} {user?.lastName}
          </span>
          , to Qatar University's Course Management System.
        </p>
        <p>Register and manage courses with ease and track your progress!</p>

        <div className="stats-card">
          {loadingStats ? (
            <LoadingSpinner />
          ) : errorStats ? (
            <ErrorMessage message="⚠️ Failed to load your statistics. Please try again." />
          ) : (
            <>
              <div>
                <span>Major:</span>
                <span id="stats-major">{major?.majorName ?? "N/A"}</span>
              </div>
              <div>
                <span>CGPA:</span>
                <span id="stats-CGPA">{user?.Student?.gpa ?? "N/A"}</span>
              </div>
              <div>
                <span>No. of Current Courses:</span>
                <span id="stats-no-courses">{regSections?.length ?? 0}</span>
              </div>
              <div>
                <span>Completed Credit Hours:</span>
                <span id="stats-completed">{completedCredits}</span>
              </div>
              <div>
                <div id="progress-bar">
                  <div ref={progressBarRef}></div>
                </div>
                <span id="bar-percentage">{progress}%</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="welcome-img">
        <img src="../assets/images/welcome.jpg" alt="Welcome" />
      </div>

      <h1 id="ongoing-text">Ongoing Registered Courses</h1>
      <div className="registered-courses section-style">
        <ul className={`course-card-list ${styles.courseCardList}`} id="course-card-list">
          {loadingSections ? (
            <LoadingSpinner />
          ) : errorSections ? (
            <ErrorMessage message="⚠️ Failed to load your registered sections." />
          ) : regSections?.length === 0 ? (
            <EmptySection text="No Registered Section!" />
          ) : (
            regSections.map((rs) => (
              <CourseCard1 key={rs.id} c={rs.section.course} s={rs.section} i={rs.section.instructor} />
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
