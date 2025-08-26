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

export default function InstructorDashboard() {
  const { data: session, status } = useSession();
  const user = session?.user; // comes from your NextAuth callbacks
  const userId = user?.userId ?? user?.id; // support either field

  const [ongoingSecs, setOngoingSecs] = useState(null);
  const [nonOngoingSecs, setNonOngoingSecs] = useState(null);
  const [currStudents, setCurrStudents] = useState(0);

  useEffect(() => {
    if (status !== "authenticated" || !userId) return;

    const run = async () => {
      const semesters = await getSemestersAction();
      const targetSem = semesters[semesters.length - 2]?.semester;
      if (!targetSem) return;

      const [activeSecs, nonActiveSecs, totalCurrStudent] = await Promise.all([
        getSectionsAction(userId, targetSem, false),
        getSectionsAction(userId, targetSem, true),
        getInstructorTotalStudentSemAction(userId, targetSem),
      ]);

      setOngoingSecs(activeSecs);
      setNonOngoingSecs(nonActiveSecs);
      setCurrStudents(totalCurrStudent?._sum?.currentSeats ?? 0);
    };

    run();
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
          <div>
            <span>Active Classes:</span>
            <span id="Activeclass">{ongoingSecs?.length ?? "0"}</span>
          </div>
          <div>
            <span>Number of Active Students:</span>
            <span id="totalStud">{currStudents}</span>
          </div>
          <div>
            <span>Total Classes:</span>
            <span id="Noclasses">
              {ongoingSecs && nonOngoingSecs ? totalClasses : "N/A"}
            </span>
          </div>
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
            {ongoingSecs === null ? (
              <LoadingSpinner />
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
            {nonOngoingSecs === null ? (
              <LoadingSpinner />
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
