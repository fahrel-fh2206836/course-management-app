// app/dashboard/admin/CourseInfo.jsx (example path)
"use client";
import React, { useEffect, useMemo, useState, useContext } from "react";
import { NotifContext } from "@/app/context/NotifContext";
import LoadingSpinner from "./LoadingSpinner";

const BASE_URL = "/api/";

export default function CourseInfo({ selectedCourse }) {
  const { showNotif } = useContext(NotifContext);

  const [course, setCourse] = useState(selectedCourse);

  const [major, setMajor] = useState(null);
  const [prereqs, setPrereqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);

  const [isOngoing, setIsOngoing] = useState(!!selectedCourse?.isOngoing);
  const [isRegistration, setIsRegistration] = useState(
    !!selectedCourse?.isRegistration
  );

  useEffect(() => {
    setCourse(selectedCourse);
    setIsOngoing(!!selectedCourse?.isOngoing);
    setIsRegistration(!!selectedCourse?.isRegistration);
  }, [selectedCourse]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!course?.id) return;
      setLoading(true);
      setError(false);
      try {
        const [majorRes, prereqRes] = await Promise.all([
          fetch(`${BASE_URL}major/${course.majorId}`),
          fetch(`${BASE_URL}course/${course.id}/prerequisites`),
        ]);
        if (!majorRes.ok || !prereqRes.ok) throw new Error("Fetch failed");

        const majorJson = await majorRes.json();
        const prereqJson = await prereqRes.json();

        if (!cancelled) {
          setMajor(majorJson ?? null);
          setPrereqs(
            Array.isArray(prereqJson?.prerequisites)
              ? prereqJson.prerequisites
              : []
          );
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [course?.id, course?.majorId]);

  const prereqList = useMemo(() => {
    if (!prereqs?.length) {
      return (
        <div>
          <p>No Prerequisites</p>
        </div>
      );
    }
    return (
      <>
        {prereqs.map((pc, idx) => (
          <div key={idx}>
            <p>{pc?.prerequisite?.courseName ?? "Unknown course"}</p>
          </div>
        ))}
      </>
    );
  }, [prereqs]);

  function startEdit() {
    setIsOngoing(!!course?.isOngoing);
    setIsRegistration(!!course?.isRegistration);
    setEditMode(true);
  }

  function cancelEdit() {
    setIsOngoing(!!course?.isOngoing);
    setIsRegistration(!!course?.isRegistration);
    setEditMode(false);
  }

  async function saveEdit() {
    if (!course?.id) return;
    setSaving(true);
    try {
      const body = {
        isOngoing: !!isOngoing,
        isRegistration: !!isRegistration,
      };
      const res = await fetch(`${BASE_URL}course/${course.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const err = await res.text().catch(() => "");
        throw new Error(err || "Failed to update course");
      }

      setCourse((c) => ({ ...c, ...body }));
      setEditMode(false);
      showNotif(`✅ ${course.courseName} status has been updated!`, "success");
    } catch (e) {
      showNotif("⚠️ Could not update course.", "fail");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="course-info">
      <div className="header-btn">
        <div className="info-header">
          <i className="bx bxs-info-circle"></i>
          <h2>Course Description</h2>
        </div>

        <div className="btns" style={{ display: "flex", gap: 5 }}>
          {!editMode ? (
            <button
              className="edit-btn course-btn"
              type="button"
              onClick={startEdit}
              title="Edit Course"
            >
              <i className="bx bxs-edit"></i>
            </button>
          ) : (
            <>
              <button
                id="save-course-btn"
                className="save-btn green-bg course-btn"
                type="button"
                onClick={saveEdit}
                disabled={saving}
                title="Save"
              >
                <i className="bx bxs-save"></i>
              </button>
              <button
                id="cancel-course-btn"
                className="cancel-btn red-bg course-btn"
                type="button"
                onClick={cancelEdit}
                disabled={saving}
                title="Cancel"
              >
                <i className="bx bxs-x-circle"></i>
              </button>
            </>
          )}
        </div>
      </div>

      <table className="course-desc-table" id="course-table">
        {loading ? (
          <tbody>
            <tr>
              <LoadingSpinner />
            </tr>
          </tbody>
        ) : error ? (
          <tbody>
            <tr>
              <td colSpan={4}>⚠️ Failed to load course info.</td>
            </tr>
          </tbody>
        ) : !course ? (
          <tbody>
            <tr>
              <td colSpan={4}>Course not found.</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <th>Course ID</th>
              <td>{course.id}</td>
            </tr>
            <tr>
              <th>Course Name</th>
              <td>{course.courseName}</td>
            </tr>
            <tr>
              <th>Course Code</th>
              <td>{course.courseCode}</td>
            </tr>
            <tr>
              <th>Major</th>
              <td colSpan={3}>{major?.majorName ?? "—"}</td>
            </tr>
            <tr>
              <th>Credit Hour</th>
              <td colSpan={3}>{course.creditHour}</td>
            </tr>

            {!editMode ? (
              <>
                <tr>
                  <th>Status - Ongoing</th>
                  <td colSpan={3}>
                    <div
                      className={
                        course.isOngoing
                          ? "green-box green-bg"
                          : "red-box red-bg"
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <th>Status - Registration</th>
                  <td colSpan={3}>
                    <div
                      className={
                        course.isRegistration
                          ? "green-box green-bg"
                          : "red-box red-bg"
                      }
                    />
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <th>Status - Ongoing</th>
                  <td colSpan={3}>
                    <input
                      type="checkbox"
                      id="ongoing-check"
                      checked={!!isOngoing}
                      onChange={(e) => setIsOngoing(e.target.checked)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Status - Registration</th>
                  <td colSpan={3}>
                    <input
                      type="checkbox"
                      id="reg-check"
                      checked={!!isRegistration}
                      onChange={(e) => setIsRegistration(e.target.checked)}
                    />
                  </td>
                </tr>
              </>
            )}

            <tr>
              <th>Prerequisites</th>
              <td colSpan={3}>
                <div className="prerequisite-list">{prereqList}</div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
