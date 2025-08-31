"use client";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { NotifContext } from "@/app/context/NotifContext";
import EmptySection from "./EmptySection";

const BASE_URL = "/api/";

export default function CourseSection({ selectedCourse, courseSections }) {
  const { showNotif } = useContext(NotifContext);

  // Data
  const [sections, setSections] = useState(
    Array.isArray(courseSections) ? courseSections : null
  );
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(!Array.isArray(courseSections));
  const [error, setError] = useState(false);

  // Filters
  const [semFilter, setSemFilter] = useState("All");
  const [approvalFilter, setApprovalFilter] = useState("None");
  const [sectionStatusFilter, setSectionStatusFilter] = useState("None");

  // Editing state: allow multiple cards to be edited at once
  const [editing, setEditing] = useState(new Set());
  const [draft, setDraft] = useState({});

  const courseId = selectedCourse?.id;

  // Helpers
  const formatStatuses = useCallback((s) => {
    const approvalStatus = s.approvalStatus
      ? s.approvalStatus[0] + s.approvalStatus.slice(1).toLowerCase()
      : "Pending";
    const sectionStatus =
      s.sectionStatus === "OPEN_REGISTRATION"
        ? "Open for Registration"
        : s.sectionStatus
        ? s.sectionStatus[0] + s.sectionStatus.slice(1).toLowerCase()
        : "—";
    return { approvalStatus, sectionStatus };
  }, []);

  // Fetch semesters for dropdown
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}semester`);
        const data = await res.json();
        if (!cancelled)
          setSemesters(Array.isArray(data) ? data.map((s) => s.semester) : []);
      } catch {
        if (!cancelled) setSemesters([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch sections (initial + when courseId changes)
  const fetchSections = useCallback(
    async (params = {}) => {
      if (!courseId) return;
      setLoading(true);
      setError(false);
      try {
        const qs = new URLSearchParams();
        qs.set("courseId", courseId);
        if (params.semester && params.semester !== "All")
          qs.set("semester", params.semester);
        if (params.approval && params.approval !== "None")
          qs.set("approval", params.approval);
        if (params.sectionStatus && params.sectionStatus !== "None")
          qs.set("section-status", params.sectionStatus);

        const url = `${BASE_URL}section?${qs.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to load sections");
        const list = await res.json();
        setSections(Array.isArray(list) ? list : []);
      } catch (e) {
        setSections([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [courseId]
  );

  useEffect(() => {
    if (!Array.isArray(courseSections)) {
      fetchSections();
    }
  }, [courseId, courseSections, fetchSections]);

  // Filter change handler
  async function handleFilterChange(nextState) {
    const next = {
      semester: nextState.semester ?? semFilter,
      approval: nextState.approval ?? approvalFilter,
      sectionStatus: nextState.sectionStatus ?? sectionStatusFilter,
    };
    await fetchSections(next);
  }

  // Editing controls
  function startEdit(section) {
    setEditing((prev) => new Set(prev).add(section.sectionId));
    setDraft((prev) => ({
      ...prev,
      [section.sectionId]: {
        approvalStatus: section.approvalStatus,
        sectionStatus: section.sectionStatus,
      },
    }));
  }

  function cancelEdit(section) {
    setEditing((prev) => {
      const s = new Set(prev);
      s.delete(section.sectionId);
      return s;
    });
    setDraft((prev) => {
      const next = { ...prev };
      delete next[section.sectionId];
      return next;
    });
  }

  async function saveEdit(section) {
    const d = draft[section.sectionId] || {};
    let { approvalStatus, sectionStatus } = d;

    // If moving to ONGOING/COMPLETED requires APPROVED
    if (
      (sectionStatus === "ONGOING" || sectionStatus === "COMPLETED") &&
      approvalStatus !== "APPROVED"
    ) {
      showNotif(
        `⚠️ Status cannot be ${sectionStatus}. (NOT APPROVED STATUS YET)`,
        "fail"
      );
      return;
    }

    const payload = { approvalStatus, sectionStatus };
    // If CANCELLED → currentSeats = 0 and delete registrations
    if (approvalStatus === "CANCELLED") {
      payload.currentSeats = 0;
      try {
        await fetch(`/api/registration?sectionId=${section.sectionId}`, {
          method: "DELETE",
        });
      } catch {
        // even if this fails, we still try to update the section to keep UI consistent
      }
    }

    try {
      const res = await fetch(`${BASE_URL}section/${section.sectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...section, ...payload }),
      });
      if (!res.ok) throw new Error("Failed to update section");

      // Close editor and refresh list using current filters
      cancelEdit(section);
      await handleFilterChange({});
      showNotif("✅ Section updated.", "success");
    } catch {
      showNotif("⚠️ Could not update section.", "fail");
    }
  }

  // Renderers
  function Seats({ s }) {
    return (
      <div className="card-seats position-slight-top-left">
        <i className="bx bxs-group" />
        <p>
          {s.currentSeats}/{s.totalSeats}
        </p>
      </div>
    );
  }

  function StatusReadOnly({ s }) {
    const { approvalStatus, sectionStatus } = formatStatuses(s);
    return (
      <>
        <div className="statuses">
          <p>Approval Status</p>
          <div className="status-value approval-type">
            {s.approvalStatus === "APPROVED" ? (
              <i className="bx bxs-check-circle" />
            ) : s.approvalStatus === "CANCELLED" ? (
              <i className="bx bxs-x-circle" />
            ) : (
              <i className="bx bx-time-five" />
            )}
            <p>{approvalStatus}</p>
          </div>
        </div>
        <div className="statuses">
          <p>Section Status</p>
          <div
            className={
              "status-value section-type " +
              (s.sectionStatus === "COMPLETED"
                ? "completed-card"
                : s.sectionStatus === "ONGOING"
                ? "ongoing-card"
                : "open-for-reg-card")
            }
          >
            <p>{sectionStatus}</p>
          </div>
        </div>
      </>
    );
  }

  function StatusEditable({ s }) {
    const d = draft[s.sectionId] || {
      approvalStatus: s.approvalStatus,
      sectionStatus: s.sectionStatus,
    };

    const approvalReadonly =
      s.sectionStatus === "ONGOING" || s.sectionStatus === "COMPLETED";

    return (
      <>
        <div className="statuses">
          <p>Approval Status</p>
          <div>
            {approvalReadonly ? (
              <div className="status-value approval-type">
                {s.approvalStatus === "APPROVED" ? (
                  <i className="bx bxs-check-circle" />
                ) : s.approvalStatus === "CANCELLED" ? (
                  <i className="bx bxs-x-circle" />
                ) : (
                  <i className="bx bx-time-five" />
                )}
                <p>{formatStatuses(s).approvalStatus}</p>
              </div>
            ) : (
              <select
                className="edit-section-approval"
                name="edit-section-approval"
                value={d.approvalStatus}
                onChange={(e) =>
                  setDraft((prev) => ({
                    ...prev,
                    [s.sectionId]: { ...d, approvalStatus: e.target.value },
                  }))
                }
              >
                <option value="PENDING">⏳ Pending</option>
                <option value="APPROVED">✅ Approved</option>
                <option value="CANCELLED">❌ Cancelled</option>
              </select>
            )}
          </div>
        </div>

        <div className="statuses">
          <p>Section Status</p>
          <div>
            <select
              className="edit-section-status"
              name="edit-section-status"
              value={d.sectionStatus}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  [s.sectionId]: { ...d, sectionStatus: e.target.value },
                }))
              }
            >
              <option value="COMPLETED">Completed</option>
              <option value="ONGOING">Ongoing</option>
              <option value="OPEN_REGISTRATION">Open for Registration</option>
            </select>
          </div>
        </div>
      </>
    );
  }

  function SectionCard({ s }) {
    const isEditing = editing.has(s.sectionId);

    return (
      <div className="course-card">
        <div className="card-flag">
          <p>{selectedCourse.courseCode}</p>
        </div>

        <Seats s={s} />

        <div className="card-course-name">
          <p>{selectedCourse.courseName}</p>
        </div>

        <div className="card-course-instructor">
          <p>
            Instructor: {s?.instructor?.user?.firstName}{" "}
            {s?.instructor?.user?.lastName}
          </p>
        </div>

        <div className="card-course-section-location">
          <p>Section ID: {s.sectionId}</p>
          <p>
            Class Location:{" "}
            {s.location && s.location.length ? s.location : "None"}
          </p>
        </div>

        <hr />

        <div className="card-course-sem-schedule">
          <p>
            <i className="bx bx-calendar" />
            {s.semester}
          </p>
          <p>
            <i className="bx bx-calendar-week" />
            {s.days && s.days.length ? s.days : "None"}
          </p>
          <p>
            <i className="bx bx-time" />
            {s.time && s.time.length ? s.time : "None"}
          </p>
        </div>

        <hr />

        <div
          id={`card-course-statuses-${s.sectionId}`}
          className="card-course-statuses"
        >
          {isEditing ? <StatusEditable s={s} /> : <StatusReadOnly s={s} />}
        </div>

        <div
          id={`section-btns-${s.sectionId}`}
          className="section-btns"
          style={{ display: "flex", gap: 5, flexDirection: "column" }}
        >
          {!isEditing ? (
            <button
              id="edit-section-btn"
              className="edit-btn section-btn"
              onClick={() => startEdit(s)}
              type="button"
              title="Edit section"
            >
              <i className="bx bxs-edit"></i>
            </button>
          ) : (
            <>
              <button
                id="save-section-btn"
                className="save-btn green-bg section-btn"
                onClick={() => saveEdit(s)}
                type="button"
                title="Save"
              >
                <i className="bx bxs-save"></i>
              </button>
              <button
                id="cancel-section-btn"
                className="cancel-btn red-bg section-btn"
                onClick={() => cancelEdit(s)}
                type="button"
                title="Cancel"
              >
                <i className="bx bxs-x-circle"></i>
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  const body = (() => {
    if (loading) return <div className="empty-section">…</div>;
    if (error) return <EmptySection text="Failed to load sections." />;
    if (!sections?.length)
      return <EmptySection text="This course has no sections." />;
    return sections.map((s) => (
      <SectionCard
        key={`${s.sectionId}-${editing.has(s.sectionId) ? "edit" : "view"}`}
        s={s}
      />
    ));
  })();

  return (
    <div className="course-section">
      <div className="section-header">
        <h1>{selectedCourse.courseCode} Sections</h1>
      </div>

      <div className="section-filters">
        <div className="semester-filter">
          <label htmlFor="semester-filter">Select Semester</label>
          <select
            id="semester-filter"
            name="semester"
            value={semFilter}
            onChange={(e) => {
              const v = e.target.value;
              setSemFilter(v);
              handleFilterChange({ semester: v });
            }}
          >
            <option value="All">All Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        <div className="approval-filter">
          <label htmlFor="approval-filter">Select Approval Status</label>
          <select
            id="approval-filter"
            name="approval"
            value={approvalFilter}
            onChange={(e) => {
              const v = e.target.value;
              setApprovalFilter(v);
              handleFilterChange({ approval: v });
            }}
          >
            <option value="None">None</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        <div className="section-status-filter">
          <label htmlFor="section-status-filter">Select Section Status</label>
          <select
            id="section-status-filter"
            name="section-status"
            value={sectionStatusFilter}
            onChange={(e) => {
              const v = e.target.value;
              setSectionStatusFilter(v);
              handleFilterChange({ sectionStatus: v });
            }}
          >
            <option value="None">None</option>
            <option value="COMPLETED">Completed</option>
            <option value="ONGOING">Ongoing</option>
            <option value="OPEN_REGISTRATION">Open for Registration</option>
          </select>
        </div>
      </div>

      <div className="section-list">{body}</div>
    </div>
  );
}
