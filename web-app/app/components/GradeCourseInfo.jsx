"use client";

import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const BASE = "/api";

export default function GradeCourseInfo({ sectionId }) {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(
        `${BASE}/section/${encodeURIComponent(sectionId)}`
      );
      const data = res.ok ? await res.json() : null;
      setSection(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!sectionId) return;
    load();
  }, [sectionId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!section) {
    return <ErrorMessage message={"Section Not Found"} />;
  }

  const courseName = section.course?.courseName || "—";
  const secId = section.sectionId || "—";
  const currentSeats =
    section.currentSeats ??
    (Array.isArray(section.registrations) ? section.registrations.length : 0);
  const semester = section.semester || "—";

  return (
    <>
      <h2>Class Description</h2>
      <div className="stats-card">
        <div>
          <span>Course:</span>
          <span>{courseName}</span>
        </div>
        <div>
          <span>Section ID:</span>
          <span>{secId}</span>
        </div>
        <div>
          <span>No. of Current students:</span>
          <span>{currentSeats}</span>
        </div>
        <div>
          <span>Semester:</span>
          <span>{semester}</span>
        </div>
      </div>
    </>
  );
}
