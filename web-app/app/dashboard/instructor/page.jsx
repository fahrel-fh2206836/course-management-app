// app/dashboard/instructor/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  getSectionsAction,
  getInstructorTotalStudentSemAction,
  getSemestersAction,
} from "@/app/actions/server-actions";
import CourseCard2 from "@/app/components/CourseCard2";
import EmptySection from "@/app/components/EmptySection";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import styles from "./page.module.css";
import ErrorMessage from "@/app/components/ErrorMessage";

export default function InstructorDashboard() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const userId = user?.userId ?? user?.id;

  // Data
  const [ongoingSecs, setOngoingSecs] = useState(null);       // array | null
  const [nonOngoingSecs, setNonOngoingSecs] = useState(null); // array | null
  const [currStudents, setCurrStudents] = useState(0);

  // Loading flags
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingOngoing, setLoadingOngoing] = useState(true);
  const [loadingNonOngoing, setLoadingNonOngoing] = useState(true);

  // Error flags
  const [errorStats, setErrorStats] = useState(false);
  const [errorOngoing, setErrorOngoing] = useState(false);
  const [errorNonOngoing, setErrorNonOngoing] = useState(false);

  useEffect(() => {
    if (status !== "authenticated" || !userId) return;

    let cancelled = false;

    (async () => {
      try {
        // Reset states
        setLoadingStats(true);
        setLoadingOngoing(true);
        setLoadingNonOngoing(true);
        setErrorStats(false);
        setErrorOngoing(false);
        setErrorNonOngoing(false);

        const semesters = await getSemestersAction();
        const targetSem = semesters?.[semesters.length - 2]?.semester;
        if (!targetSem) {
          if (!cancelled) {
            setErrorStats(true);
            setErrorOngoing(true);
            setErrorNonOngoing(true);
            setLoadingStats(false);
            setLoadingOngoing(false);
            setLoadingNonOngoing(false);
          }
          return;
        }

        // Fetch in parallel
        const [activeSecs, nonActiveSecs, totalCurrStudent] = await Promise.allSettled([
          getSectionsAction(userId, targetSem, false),
          getSectionsAction(userId, targetSem, true),
          getInstructorTotalStudentSemAction(userId, targetSem),
        ]);

        // Ongoing
        if (!cancelled) {
          if (activeSecs.status === "fulfilled" && Array.isArray(activeSecs.value)) {
            setOngoingSecs(activeSecs.value);
            setErrorOngoing(false);
          } else {
            setOngoingSecs([]);
            setErrorOngoing(true);
          }
          setLoadingOngoing(false);
        }

        // Non-ongoing
        if (!cancelled) {
          if (nonActiveSecs.status === "fulfilled" && Array.isArray(nonActiveSecs.value)) {
            setNonOngoingSecs(nonActiveSecs.value);
            setErrorNonOngoing(false);
          } else {
            setNonOngoingSecs([]);
            setErrorNonOngoing(true);
          }
          setLoadingNonOngoing(false);
        }

        // Stats (depends on all three)
        if (!cancelled) {
          if (
            activeSecs.status === "fulfilled" &&
            nonActiveSecs.status === "fulfilled" &&
            totalCurrStudent.status === "fulfilled" &&
            totalCurrStudent.value !== null &&
            totalCurrStudent.value !== undefined
          ) {
            setCurrStudents(totalCurrStudent.value?._sum?.currentSeats ?? 0);
            setErrorStats(false);
          } else {
            setErrorStats(true);
          }
          setLoadingStats(false);
        }
      } catch (e) {
        if (!cancelled) {
          setErrorStats(true);
          setErrorOngoing(true);
          setErrorNonOngoing(true);
          setLoadingStats(false);
          setLoadingOngoing(false);
          setLoadingNonOngoing(false);
          console.error("Instructor dashboard fetch error:", e);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [status, userId]);

  if (status === "loading") {
    return (
      <main className="main-dashboard">
        <LoadingSpinner />
      </main>
    );
  }

  if (status === "unauthenticated") {
    return (
      <main className="main-dashboard">
        <p>You must be signed in.</p>
      </main>
    );
  }

  const totalClasses =
    (ongoingSecs?.length ?? 0) + (nonOngoingSecs?.length ?? 0);

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
        <p>
          Your personalized dashboard is here to help you manage your courses
          and streamline your teaching experience
        </p>

        <div className="stats-card">
          {loadingStats ? (
            <LoadingSpinner />
          ) : errorStats ? (
            <ErrorMessage message="⚠️ Failed to load statistics. Please try again." />
          ) : (
            <>
              <div>
                <span>Active Classes:</span>
                <span id="Activeclass">{ongoingSecs.length}</span>
              </div>
              <div>
                <span>Number of Active Students:</span>
                <span id="totalStud">{currStudents}</span>
              </div>
              <div>
                <span>Total Classes:</span>
                <span id="Noclasses">{totalClasses}</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="welcome-img">
        <img src="../assets/images/welcome2.jpg" alt="" />
      </div>

      <h1 id="ongoing-text">Teaching Sections</h1>
      <div className="registered-courses section-style">
        <ul className="course-card-list">
          <h3>Ongoing Courses</h3>
          <div className={styles.cardGroup}>
            {loadingOngoing ? (
              <LoadingSpinner />
            ) : errorOngoing ? (
              <ErrorMessage message="⚠️ Failed to load ongoing courses." />
            ) : ongoingSecs.length === 0 ? (
              <EmptySection text="No Ongoing Courses" />
            ) : (
              ongoingSecs.map((s) => (
                <CourseCard2 key={s.sectionId} s={s} c={s.course} />
              ))
            )}
          </div>

          <div className={styles.pFcourses}>
            <h3>Previous/Future Courses</h3>
          </div>
          <div className={styles.pFcardGroup}>
            {loadingNonOngoing ? (
              <LoadingSpinner />
            ) : errorNonOngoing ? (
              <ErrorMessage message="⚠️ Failed to load previous/future courses." />
            ) : nonOngoingSecs.length === 0 ? (
              <EmptySection text="No Non-Active Courses" />
            ) : (
              nonOngoingSecs.map((s) => (
                <CourseCard2 key={s.sectionId} s={s} c={s.course} />
              ))
            )}
          </div>
        </ul>
      </div>
    </main>
  );
}
