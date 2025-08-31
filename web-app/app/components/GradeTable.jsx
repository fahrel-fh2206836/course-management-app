// app/dashboard/instructor/grade/[sectionId]/GradeTable.jsx
"use client";

import React, { useEffect, useMemo, useRef, useState, useContext } from "react";
import { NotifContext } from "@/app/context/NotifContext";
import LoadingSpinner from "./LoadingSpinner";

const BASE = "/api";
const GRADES = ["None", "A", "B", "C", "D", "F"];

function normalizeSearchResult(json) {
  // API can return an array (registrations) OR an object with .registrations
  if (Array.isArray(json)) return { registrations: json, section: null };
  if (json && Array.isArray(json.registrations))
    return { registrations: json.registrations, section: json };
  return { registrations: [], section: json || null };
}

function pointsFor(grade) {
  switch ((grade || "").toUpperCase()) {
    case "A":
      return 4;
    case "B":
      return 3;
    case "C":
      return 2;
    case "D":
      return 1;
    default:
      return 0; // F or empty
  }
}

function computeFinishedCreditHour(regs) {
  let ch = 0;
  for (const r of regs || []) {
    const grade = (r.grade || "").trim().toUpperCase();
    const pass = grade.length > 0 && grade !== "F";
    const completed = r.section?.sectionStatus === "COMPLETED";
    if (pass || completed) {
      ch += Number(r.section?.course?.creditHour ?? r.course?.creditHour ?? 0);
    }
  }
  return ch;
}

function computeGPA(finishedCH, regs) {
  if (!finishedCH) return 0;
  let total = 0;
  for (const r of regs || []) {
    const g = (r.grade || "").toUpperCase();
    if (["A", "B", "C", "D"].includes(g)) {
      const ch = Number(
        r.section?.course?.creditHour ?? r.course?.creditHour ?? 0
      );
      total += ch * pointsFor(g);
    }
  }
  return Number((total / finishedCH).toFixed(2));
}

export default function GradeTable({ sectionId }) {
  const { showNotif } = useContext(NotifContext);

  const [query, setQuery] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState({}); // { [studentId]: grade }

  const abortRef = useRef(null);
  const debounceRef = useRef(null);

  const notStarted = section?.sectionStatus === "OPEN_REGISTRATION";

  async function fetchSectionAndRegs(term = "") {
    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setLoading(true);
    try {
      const url =
        term && term.trim()
          ? `${BASE}/section/${encodeURIComponent(
              sectionId
            )}?search=${encodeURIComponent(term.trim())}`
          : `${BASE}/section/${encodeURIComponent(sectionId)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");
      const json = await res.json();
      const { registrations: regs, section: sec } = normalizeSearchResult(json);

      // If we only got regs (array), keep previous section object
      setSection((prev) => sec || prev);
      setRegistrations(Array.isArray(regs) ? regs : []);
      setPending({});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!sectionId) return;
    fetchSectionAndRegs("");
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, [sectionId]);

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!query.trim()) {
      // restore full section view (no search)
      debounceRef.current = setTimeout(() => fetchSectionAndRegs(""), 200);
      return;
    }

    debounceRef.current = setTimeout(() => fetchSectionAndRegs(query), 250);
    return () => clearTimeout(debounceRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  function onChangeGrade(studentId, value) {
    setPending((prev) => ({ ...prev, [studentId]: value }));
  }

  async function onCancel() {
    setQuery("");
    await fetchSectionAndRegs("");
  }

  async function onSave() {
    // Collect changes vs current rows
    const changes = [];
    for (const r of registrations) {
      // student id can be r.student.user.userId or r.student.userId depending on shape
      const student = r.student?.user || r.student || {};
      const studentId = student.userId || r.studentId;
      if (!studentId) continue;

      const current = r.grade?.length ? r.grade : "None";
      const next = pending[studentId];
      if (next !== undefined && next !== current) {
        changes.push({ studentId, sectionId, newGrade: next });
      }
    }

    if (changes.length === 0) {
      showNotif("⚠️ No grades have been changed!", "fail");
      return;
    }

    try {
      for (const change of changes) {
        const { studentId, sectionId, newGrade } = change;

        // 1) Find the registration id for this student/section
        const regRes = await fetch(
          `${BASE}/registration?studentId=${encodeURIComponent(
            studentId
          )}&sectionId=${encodeURIComponent(sectionId)}`
        );
        const reg = regRes.ok ? await regRes.json() : null;
        if (!reg?.id) continue;

        // 2) Update the grade (empty for "None")
        const body = { grade: newGrade === "None" ? "" : newGrade };
        await fetch(`${BASE}/registration/${reg.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        // 3) Recompute finished credits & GPA for this student
        const regsRes = await fetch(
          `${BASE}/student/${encodeURIComponent(studentId)}/completed-courses`
        );
        const allRegs = regsRes.ok ? await regsRes.json() : [];
        const finishedCH = computeFinishedCreditHour(allRegs);
        const gpa = computeGPA(finishedCH, allRegs);

        // 4) Update student
        await fetch(`${BASE}/student/${encodeURIComponent(studentId)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ finishedCreditHour: finishedCH, gpa }),
        });
      }

      // reload current view (preserve search)
      await fetchSectionAndRegs(query.trim());
      showNotif("✅ Grade saved successfully!", "success");
    } catch {
      showNotif("⚠️ Could not save grades.", "fail");
    }
  }

  return (
    <>
      <h2>Students Table</h2>
      {notStarted ? (
        <div className="searchStud">
          <div className="empty-section">
            <i className="bx bxs-error-circle" />
            <p>Course has not yet started.</p>
          </div>
        </div>
      ) : (
        <div className="searchStud">
          <div className="search-bar-grades bordered-search-bar">
            <div className="search-box">
              <input
                type="text"
                id="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Student by Name"
              />
              <i className="bx bx-search" />
            </div>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Student name</th>
                  <th>Student Grade</th>
                </tr>
              </thead>
              <tbody>
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={3}>No students found</td>
                  </tr>
                ) : (
                  registrations.map((r) => {
                    const student = r.student?.user || r.student || {};
                    const studentId = student.userId || r.studentId;
                    const current = r.grade?.length ? r.grade : "None";
                    const sel = pending[studentId] ?? current;

                    return (
                      <tr key={studentId}>
                        <td>{studentId}</td>
                        <td>
                          {student.firstName} {student.lastName}
                        </td>
                        <td>
                          <select
                            className="grade-dropdown"
                            value={sel}
                            onChange={(e) =>
                              onChangeGrade(studentId, e.target.value)
                            }
                          >
                            {GRADES.map((g) => (
                              <option key={g} value={g}>
                                {g === "None" ? "" : g}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          )}

          <div className="buttons">
            <button className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
            <button className="save-button" onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
