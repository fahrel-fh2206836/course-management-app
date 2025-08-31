"use client";

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { NotifContext } from "@/app/context/NotifContext";

export default function RegistrationComponent({
  user,
  course,
  majorName,
  prereqs,
  semesters,
  initialSections,
  initiallyRegistered,
  openRegistrationSemester,
}) {
  const { showNotif } = useContext(NotifContext);

  const studentId = user?.userId ?? user?.id ?? null;
  const [sections, setSections] = useState(
    Array.isArray(initialSections) ? initialSections : []
  );
  const [registered, setRegistered] = useState(
    Array.isArray(initiallyRegistered) ? initiallyRegistered : []
  );
  const [semFilter, setSemFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const [prereqStatus, setPrereqStatus] = useState({});

  const courseCH = course?.creditHour ?? 0;

  const currentCH = useMemo(() => {
    const hrs = registered.map((r) => r?.section?.course?.creditHour ?? 0);
    return hrs.reduce((a, b) => a + b, 0);
  }, [registered]);

  const fetchSections = useCallback(
    async (semester = "All") => {
      if (!course?.id) return;
      setLoading(true);
      try {
        const qs = new URLSearchParams();
        qs.set("courseId", course.id);
        qs.set("approval", "CANCELLED");
        qs.set("notApproval", "true");
        if (semester !== "All") qs.set("semester", semester);
        const res = await fetch(`/api/section?${qs.toString()}`);
        const data = res.ok ? await res.json() : [];
        setSections(Array.isArray(data) ? data : []);
      } finally {
        setLoading(false);
      }
    },
    [course?.id]
  );

  async function onChangeSemester(e) {
    const v = e.target.value;
    setSemFilter(v);
    await fetchSections(v);
  }

  // --- Helpers ---
  async function courseDone(courseId) {
    if (!studentId || !courseId) return false;
    const res = await fetch(
      `/api/student/${studentId}/completed-courses?courseId=${courseId}&check-completed=true`
    );
    return res.ok ? res.json() : false;
  }

  const getPrereqCourseId = useCallback(
    (pc) => pc?.prerequisite?.id ?? pc?.id ?? pc?.prerequisiteId ?? null,
    []
  );

  function toMinutes(t) {
    const [h, m] = (t || "0:00").split(":").map((n) => parseInt(n, 10) || 0);
    return h * 60 + m;
  }

  function hasTimeConflict(newSection) {
    if (!newSection?.days || !newSection?.time) return false;
    const newDays = newSection.days.split("-");
    const [newStart, newEnd] = newSection.time.split("-").map(toMinutes);

    for (const r of registered) {
      const curr = r.section;
      if (!curr?.days || !curr?.time) continue;
      const regDays = curr.days.split("-");
      const [regStart, regEnd] = curr.time.split("-").map(toMinutes);

      const overlappingDays = newDays.some((d) => regDays.includes(d));
      if (overlappingDays) {
        const overlap = newEnd >= regStart && newStart <= regEnd;
        if (overlap) return true;
      }
    }
    return false;
  }

  async function refreshRegisteredAndSections() {
    const [regRes, secRes] = await Promise.all([
      fetch(
        `/api/registration?studentId=${studentId}&section-status=OPEN_REGISTRATION`
      ),
      (async () => {
        const qs = new URLSearchParams();
        qs.set("courseId", course.id);
        qs.set("approval", "CANCELLED");
        qs.set("notApproval", "true");
        if (semFilter !== "All") qs.set("semester", semFilter);
        return fetch(`/api/section?${qs.toString()}`);
      })(),
    ]);

    const regJson = regRes.ok ? await regRes.json() : [];
    const secJson = secRes.ok ? await secRes.json() : [];

    setRegistered(Array.isArray(regJson) ? regJson : []);
    setSections(Array.isArray(secJson) ? secJson : []);
  }

  useEffect(() => {
    let cancelled = false;

    async function loadPrereqStatuses() {
      if (!studentId || !Array.isArray(prereqs) || prereqs.length === 0) {
        setPrereqStatus({});
        return;
      }
      const entries = await Promise.all(
        prereqs.map(async (pc) => {
          const id = getPrereqCourseId(pc);
          if (!id) return [null, false];
          try {
            const done = await courseDone(id);
            return [id, !!done];
          } catch {
            return [id, false];
          }
        })
      );
      if (cancelled) return;
      const map = {};
      for (const [id, done] of entries) {
        if (id) map[id] = done;
      }
      setPrereqStatus(map);
    }

    loadPrereqStatuses();
    return () => {
      cancelled = true;
    };
  }, [studentId, prereqs, getPrereqCourseId]);

  // --- Actions ---
  async function handleRegister(sectionId) {
    try {
      const secRes = await fetch(`/api/section/${sectionId}`);
      if (!secRes.ok) throw new Error();
      const selectedSection = await secRes.json();

      // 1) Max CH 18
      const newTotalCH = currentCH + (selectedSection?.course?.creditHour ?? 0);
      if (newTotalCH > 18) {
        showNotif("⚠️ You will be over the max limit of 18 CH!", "fail");
        return;
      }

      // 2) Program check
      if (user?.Student?.majorId !== selectedSection?.course?.majorId) {
        showNotif("⚠️ Course is not in your program of study!", "fail");
        return;
      }

      // 3) Already passed?
      if (await courseDone(selectedSection.courseId)) {
        showNotif("⚠️ You have passed this course already!", "fail");
        return;
      }

      // 4) Already registered same course?
      const dup = registered.find(
        (r) => r.courseId === selectedSection.courseId
      );
      if (dup) {
        showNotif(
          "⚠️ You have already registered this section or another one of the same course!",
          "fail"
        );
        return;
      }

      // 5) Seats full?
      if (selectedSection.currentSeats >= selectedSection.totalSeats) {
        showNotif("⚠️ Section is Full!", "fail");
        return;
      }

      // 6) Prereqs (use cache first, fallback to API if missing)
      if (Array.isArray(prereqs) && prereqs.length) {
        const unmet = await Promise.all(
          prereqs.map(async (pc) => {
            const id = getPrereqCourseId(pc);
            if (!id) return false;
            if (id in prereqStatus) return !prereqStatus[id];
            const done = await courseDone(id);
            return !done;
          })
        );
        if (unmet.some(Boolean)) {
          showNotif("⚠️ You have not completed all prerequisites!", "fail");
          return;
        }
      }

      // 7) Time conflict
      if (hasTimeConflict(selectedSection)) {
        showNotif("⚠️ Time Conflict detected!", "fail");
        return;
      }

      // Create registration
      const newReg = {
        studentId,
        courseId: selectedSection.courseId,
        sectionId,
        grade: "",
      };
      const makeRes = await fetch(`/api/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReg),
      });
      if (!makeRes.ok) throw new Error();

      // Update section seats
      const updated = {
        ...selectedSection,
        currentSeats: (selectedSection.currentSeats ?? 0) + 1,
      };
      await fetch(`/api/section/${sectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      await refreshRegisteredAndSections();
      showNotif("✅ You have successfully registered!", "success");
    } catch {
      showNotif("⚠️ Registration failed. Try again.", "fail");
    }
  }

  async function handleUnregister(sectionId) {
    try {
      const secRes = await fetch(`/api/section/${sectionId}`);
      if (!secRes.ok) throw new Error();
      const section = await secRes.json();

      // decrement seats
      const updated = {
        ...section,
        currentSeats: Math.max(0, (section.currentSeats ?? 0) - 1),
      };
      await fetch(`/api/section/${sectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      // delete reg
      await fetch(
        `/api/registration?sectionId=${sectionId}&studentId=${studentId}`,
        {
          method: "DELETE",
        }
      );

      await refreshRegisteredAndSections();
      showNotif("✅ You have successfully dropped the section!", "success");
    } catch {
      showNotif("⚠️ Could not drop the section.", "fail");
    }
  }

  return (
    <>
      <div className="course-info course-info-grid">
        <div className="info-header">
          <i className="bx bxs-info-circle" />
          <h2>Course Description</h2>
        </div>
        <table id="course-table" className="course-desc-table">
          <tbody>
            <tr>
              <th>Course ID</th>
              <td>{course?.id}</td>
            </tr>
            <tr>
              <th>Course Name</th>
              <td>{course?.courseName}</td>
            </tr>
            <tr>
              <th>Course Code</th>
              <td>{course?.courseCode}</td>
            </tr>
            <tr>
              <th>Major</th>
              <td colSpan={3}>{majorName}</td>
            </tr>
            <tr>
              <th>Credit Hour</th>
              <td colSpan={3}>{courseCH}</td>
            </tr>
            <tr>
              <th>Status - Ongoing</th>
              <td colSpan={3}>
                <div
                  className={
                    course?.isOngoing ? "green-box green-bg" : "red-box red-bg"
                  }
                />
              </td>
            </tr>
            <tr>
              <th>Status - Registration</th>
              <td colSpan={3}>
                <div
                  className={
                    course?.isRegistration
                      ? "green-box green-bg"
                      : "red-box red-bg"
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Prerequisite Courses:</h3>
        <div id="pre-courses">
          {!prereqs || prereqs.length === 0 ? (
            <div>There are no prerequisites for this course</div>
          ) : (
            <div className="display-precourses">
              {prereqs.map((pc) => {
                const c = pc?.prerequisite ?? pc;
                const id = getPrereqCourseId(pc);
                const done = id ? prereqStatus[id] : false;

                return (
                  <div className="course-card" key={c.id}>
                    <div className="card-flag">
                      <p>{c.courseCode}</p>
                    </div>
                    <div className="card-course-name">
                      <p>{c.courseName}</p>
                    </div>
                    <hr />
                    <div className="sub-card-styling">
                      <div className="course-status">
                        <span>Completed</span>
                        {done ? (
                          <i className="bx bxs-check-circle green" />
                        ) : (
                          <i className="bx bxs-x-circle red" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="course-section course-section-grid">
        <div className="section-header">
          <h1>{course?.courseCode} Sections</h1>
        </div>

        <div className="section-filters">
          <div className="semester-filter">
            <label htmlFor="semester-filter">Select Semester</label>
            <select
              id="semester-filter"
              name="semester"
              value={semFilter}
              onChange={onChangeSemester}
            >
              <option value="All">All Semester</option>
              {semesters?.map((s) => (
                <option key={s.semester} value={s.semester}>
                  {s.semester}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p id="note">
          Note: {openRegistrationSemester} Sections are open for registration
        </p>

        <div className="section-list">
          {loading ? (
            <div className="empty-section">
              <i className="bx bx-loader-alt bx-spin" />
              <p>Loading sections…</p>
            </div>
          ) : sections.length === 0 ? (
            <div className="empty-section">
              <i className="bx bxs-error-circle" />
              <p>This course has no sections.</p>
            </div>
          ) : (
            sections.map((s) => {
              const u = s?.instructor?.user;
              return (
                <div className="course-card" key={s.sectionId}>
                  <div className="card-flag">
                    <p>{course?.courseCode}</p>
                  </div>
                  <div className="card-seats position-corner-top-left">
                    <i className="bx bxs-group" />
                    <p>
                      {s.currentSeats}/{s.totalSeats}
                    </p>
                  </div>
                  <div className="card-course-name">
                    <p>{course?.courseName}</p>
                  </div>
                  <div className="card-course-instructor">
                    <p>
                      Instructor: {u?.firstName} {u?.lastName}
                    </p>
                  </div>
                  <div className="card-course-section-location">
                    <p>Section ID: {s.sectionId}</p>
                    <p>
                      Class Location: {s.location?.length ? s.location : "None"}
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
                      {s.days?.length ? s.days : "None"}
                    </p>
                    <p>
                      <i className="bx bx-time" />
                      {s.time?.length ? s.time : "None"}
                    </p>
                  </div>
                  <hr />
                  {s.sectionStatus === "OPEN_REGISTRATION" ? (
                    <button
                      className="reg-btn active-reg-btn"
                      onClick={() => handleRegister(s.sectionId)}
                    >
                      Register
                    </button>
                  ) : (
                    <button className="reg-btn grey" disabled>
                      Register
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="registered-courses registered-courses-grid">
        <h3>
          Registered Courses | Max: 18 CH |{" "}
          <span id="curr-ch"> Your CH: {currentCH}</span>
        </h3>

        <div id="display-registered" className="displayed-registered">
          {registered.length === 0 ? (
            <div className="empty-section">
              <i className="bx bxs-error-circle" />
              <p>You have not registered for any courses.</p>
            </div>
          ) : (
            registered.map((r) => {
              const s = r.section;
              const i = s?.instructor?.user;
              const c = s?.course;
              return (
                <div className="course-card" key={s.sectionId}>
                  <div className="card-flag">
                    <p>{c?.courseCode}</p>
                  </div>
                  <div className="card-seats position-slight-top-left">
                    <i className="bx bxs-group" />
                    <p>
                      {s.currentSeats}/{s.totalSeats}
                    </p>
                  </div>
                  <div
                    className="delete-button position-corner-top-left red-bg"
                    onClick={() => handleUnregister(s.sectionId)}
                    role="button"
                    aria-label="Unregister"
                  >
                    <i className="bx bxs-trash-alt" />
                  </div>
                  <div className="card-course-name">
                    <p>{c?.courseName}</p>
                  </div>
                  <div className="card-course-instructor">
                    <p>
                      Instructor: {i?.firstName} {i?.lastName}
                    </p>
                  </div>
                  <div className="card-course-section-location">
                    <p>Section ID: {s.sectionId}</p>
                  </div>
                  <div className="card-course-section-location">
                    <p>
                      Class Location: {s.location?.length ? s.location : "None"}
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
                      {s.days?.length ? s.days : "None"}
                    </p>
                    <p>
                      <i className="bx bx-time" />
                      {s.time?.length ? s.time : "None"}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
