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
import ClientRedirect from "@/app/components/ClientRedirect";

export default function InstructorDashboard() {
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
  const userId = user?.userId ?? user?.id;

  // Data
  const [ongoingSecs, setOngoingSecs] = useState(null);
  const [nonOngoingSecs, setNonOngoingSecs] = useState(null);
  const [currStudents, setCurrStudents] = useState(0);

  // Non-ongoing semester filter state
  const [nonOngoingSemesters, setNonOngoingSemesters] = useState([]);
  const [selectedNonOngoingSem, setSelectedNonOngoingSem] = useState("All");
  const [ongoingSemester, setOngoingSemester] = useState("");

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
        // Your original code used the second-to-last as target
        const picked = semesters?.[semesters.length - 2]?.semester;
        setOngoingSemester(picked);

        if (!picked) {
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

        // Build the non-ongoing semester options (exclude target)
        try {
          const options = await getSemestersAction([picked]); // your action supports exclusion
          if (!cancelled) {
            setNonOngoingSemesters(
              Array.isArray(options) ? options.map((s) => s.semester) : []
            );
          }
        } catch {
          if (!cancelled) setNonOngoingSemesters([]);
        }

        // Fetch in parallel for the picked semester
        const [activeSecs, nonActiveSecs, totalCurrStudent] =
          await Promise.allSettled([
            getSectionsAction(userId, picked, false), // ongoing for picked sem
            getSectionsAction(userId, picked, true), // non-ongoing for picked sem
            getInstructorTotalStudentSemAction(userId, picked),
          ]);

        // Ongoing
        if (!cancelled) {
          if (
            activeSecs.status === "fulfilled" &&
            Array.isArray(activeSecs.value)
          ) {
            setOngoingSecs(activeSecs.value);
            setErrorOngoing(false);
          } else {
            setOngoingSecs([]);
            setErrorOngoing(true);
          }
          setLoadingOngoing(false);
        }

        // Non-ongoing (initially for picked sem)
        if (!cancelled) {
          if (
            nonActiveSecs.status === "fulfilled" &&
            Array.isArray(nonActiveSecs.value)
          ) {
            setNonOngoingSecs(nonActiveSecs.value);
            setErrorNonOngoing(false);
          } else {
            setNonOngoingSecs([]);
            setErrorNonOngoing(true);
          }
          setLoadingNonOngoing(false);
        }

        // Stats
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

  async function handleNonOngoingSemesterChange(e) {
    const value = e.target.value;
    setSelectedNonOngoingSem(value);

    setLoadingNonOngoing(true);
    setErrorNonOngoing(false);

    try {
      let list = [];
      const semArg = value === "All" ? ongoingSemester : value;
      if (value === "All") list = await getSectionsAction(userId, semArg, true);
      else list = await getSectionsAction(userId, semArg);

      setNonOngoingSecs(Array.isArray(list) ? list : []);
      if (!Array.isArray(list)) setErrorNonOngoing(true);
    } catch (err) {
      setNonOngoingSecs([]);
      setErrorNonOngoing(true);
    } finally {
      setLoadingNonOngoing(false);
    }
  }

  if (status === "loading") {
    return <LoadingSpinner center />;
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
                <span id="Activeclass">{ongoingSecs?.length ?? 0}</span>
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
            ) : (ongoingSecs?.length ?? 0) === 0 ? (
              <EmptySection text="No Ongoing Courses" />
            ) : (
              ongoingSecs.map((s) => (
                <CourseCard2 key={s.sectionId} s={s} c={s.course} />
              ))
            )}
          </div>

          <div className={styles.pFcourses}>
            <h3>Previous/Future Courses</h3>
            <div>
              <div className="semester-filter">
                <select
                  id="semester-filter"
                  name="semester"
                  value={selectedNonOngoingSem}
                  onChange={handleNonOngoingSemesterChange}
                >
                  <option value="All">All Semesters</option>
                  {nonOngoingSemesters.map((sem) => (
                    <option key={sem} value={sem}>
                      {sem}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.pFcardGroup}>
            {loadingNonOngoing ? (
              <LoadingSpinner />
            ) : errorNonOngoing ? (
              <ErrorMessage message="⚠️ Failed to load previous/future courses." />
            ) : (nonOngoingSecs?.length ?? 0) === 0 ? (
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
