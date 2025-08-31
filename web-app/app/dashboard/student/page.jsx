// app/dashboard/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import CourseCard1 from "@/app/components/CourseCard1";
import EmptySection from "@/app/components/EmptySection";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import ClientRedirect from "@/app/components/ClientRedirect";
import {
  getSemestersAction,
  getMajorByIdAction,
  getRegistrationsByStudentIdandSemAction,
  getCompletedCreditsAction,
} from "@/app/actions/server-actions";

export default function StudentDashboard() {
  const { data: session, status } = useSession();
  if (!session) {
    return (
      <main className="main-dashboard">
        <p>Session expired. Redirecting in 5 seconds...</p>
        <ClientRedirect to="/" delay={5000} />
      </main>
    );
  }
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

  useEffect(() => {
    if (status !== "authenticated" || !user?.id) return;

    let cancelled = false;

    (async () => {
      try {
        setLoadingStats(true);
        setLoadingSections(true);
        setErrorStats(false);
        setErrorSections(false);

        // 1) Get semesters and pick the previous one (2nd last).
        const semesters = await getSemestersAction();
        const len = Array.isArray(semesters) ? semesters.length : 0;
        const prevSemester =
          len >= 2
            ? semesters[len - 2]?.semester
            : len === 1
            ? semesters[0]?.semester
            : null;

        // 2) Sections list for that semester
        if (prevSemester) {
          try {
            const regSec = await getRegistrationsByStudentIdandSemAction(
              user.id,
              prevSemester
            );
            if (!cancelled) {
              setRegSections(Array.isArray(regSec) ? regSec : []);
              if (!Array.isArray(regSec)) setErrorSections(true);
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

        // 3) Stats: major + completedCredits (from repo) + progress
        try {
          const m = await getMajorByIdAction(user?.Student?.majorId);
          const credits = await getCompletedCreditsAction(user.id);

          if (!cancelled) {
            setMajor(m ?? null);
            setCompletedCredits(credits);

            const total = Number(m?.totalCreditHour ?? 0);
            const percent = total > 0 ? Math.round((credits / total) * 100) : 0;
            setProgress(percent);
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

  if (status === "loading") {
    return <LoadingSpinner center />;
  }

  if (status === "unauthenticated") {
    return (
      <main className="main-dashboard">
        <p>You must be signed in</p>
      </main>
    );
  }

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
                <div
                  id="progress-bar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                >
                  <div style={{ width: `${progress}%` }} />
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
        <ul
          className={`course-card-list ${styles.courseCardList}`}
          id="course-card-list"
        >
          {loadingSections ? (
            <LoadingSpinner />
          ) : errorSections ? (
            <ErrorMessage message="⚠️ Failed to load your registered sections." />
          ) : regSections?.length === 0 ? (
            <EmptySection text="No Registered Section!" />
          ) : (
            regSections.map((rs) => (
              <CourseCard1
                key={rs.id}
                c={rs.section.course}
                s={rs.section}
                i={rs.section.instructor}
              />
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
