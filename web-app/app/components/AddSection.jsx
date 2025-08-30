"use client";
import React, { useContext, useEffect, useState } from "react";
import { NotifContext } from "../context/NotifContext";

export default function AddSection({ regCourses, instructors }) {
  const [hasMounted, setHasMounted] = useState(false);
  const { showNotif } = useContext(NotifContext);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Keep Object.fromEntries, then fix multi-value + derived fields
    const section = Object.fromEntries(fd.entries());

    // seats
    section.totalSeats = parseInt(section.totalSeats, 10) || 0;
    if (section.totalSeats <= 0) {
      showNotif("❌ Total seats must be a positive number.", "fail");
      return;
    }

    // days: MUST use getAll for checkbox groups
    section.days = fd.getAll("days").join("-"); // e.g., "SUN-TUE-THU"

    // time: sanitize + validate
    const start = (section.startTime || "").trim(); // "HH:MM" or ""
    const end = (section.endTime || "").trim();

    if ((start && !end) || (!start && end)) {
      showNotif("⚠️ Please select both start and end times.", "fail");
      return;
    }

    if (start && end) {
      // "HH:MM" strings compare lexically correctly for 24h times
      if (start >= end) {
        showNotif("⚠️ End time must be after start time.", "fail");
        return;
      }
      section.time = `${start}-${end}`; // "10:36-11:31"
    } else {
      section.time = ""; // optional: omit if you prefer
    }

    delete section.startTime;
    delete section.endTime;

    console.log(section);

    try {
      const res = await fetch("/api/section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(section),
      });
      if (!res.ok)
        throw new Error(await res.text().catch(() => "Failed to add section"));

      form.reset();
      showNotif("✅ Section is added to the system.", "success");
    } catch (err) {
      showNotif("⚠️ Could not add section.", "fail");
    }
  }

  return (
    <form
      action=""
      id="add-section-form"
      className="add-page-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="section-course" className="add-page-label">
          Select Course
        </label>
        <select id="section-course" name="courseId" defaultValue={""} required>
          <option label="Select Course" value="" selected disabled></option>
          {regCourses?.map((c) => (
            <option key={c.id} value={c.id}>
              {c.courseCode} — {c.courseName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="section-instructor" className="add-page-label">
          Select Instructor
        </label>
        <select
          id="section-instructor"
          name="instructorId"
          defaultValue={""}
          required
        >
          <option label="Select Instructor" value="" selected disabled></option>
          {instructors?.map((i) => (
            <option key={i.userId} value={i.userId}>
              {i.firstName} {i.lastName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="section-seats" className="add-page-label">
          Total Seats
        </label>
        <input
          type="number"
          id="section-seats"
          name="totalSeats"
          placeholder="Enter Total Seats"
          className="add-page-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="section-location" className="add-page-label">
          Location
        </label>
        <input
          type="text"
          id="section-location"
          name="location"
          placeholder="Enter Location (Optional)"
          className="add-page-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="section-start-time" className="add-page-label">
          Starting Time (Optional)
        </label>
        <input
          type="time"
          id="section-start-time"
          name="startTime"
          min="08:00"
          max="19:00"
          className="add-page-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="section-ending-time" className="add-page-label">
          Ending Time (Optional)
        </label>
        <input
          type="time"
          id="section-ending-time"
          name="endTime"
          min="08:49"
          max="20:00"
          className="add-page-input"
        />
      </div>

      <div className="form-group">
        <label className="add-page-label">Select Days (Optional)</label>
        <div className="day-select">
          <input
            type="checkbox"
            id="sun"
            name="days"
            value="SUN"
            className="day-checkbox"
          />
          <label htmlFor="sun" className="day-label">
            SUN
          </label>

          <input
            type="checkbox"
            id="mon"
            name="days"
            value="MON"
            className="day-checkbox"
          />
          <label htmlFor="mon" className="day-label">
            MON
          </label>

          <input
            type="checkbox"
            id="tue"
            name="days"
            value="TUE"
            className="day-checkbox"
          />
          <label htmlFor="tue" className="day-label">
            TUE
          </label>

          <input
            type="checkbox"
            id="wed"
            name="days"
            value="WED"
            className="day-checkbox"
          />
          <label htmlFor="wed" className="day-label">
            WED
          </label>

          <input
            type="checkbox"
            id="thu"
            name="days"
            value="THU"
            className="day-checkbox"
          />
          <label htmlFor="thu" className="day-label">
            THU
          </label>

          <input
            type="checkbox"
            id="fri"
            name="days"
            value="FRI"
            className="day-checkbox"
          />
          <label htmlFor="fri" className="day-label">
            FRI
          </label>

          <input
            type="checkbox"
            id="sat"
            name="days"
            value="SAT"
            className="day-checkbox"
          />
          <label htmlFor="sat" className="day-label">
            SAT
          </label>
        </div>
      </div>

      <div className="button-group">
        <button type="submit">Add Section</button>
        <button type="reset">Clear All</button>
      </div>
    </form>
  );
}
