"use client";
import React, { useContext, useEffect, useState } from "react";
import { NotifContext } from "../context/NotifContext";
import { addCourseAction, updateMajorAction } from "../actions/server-actions";

export default function AddCourse({
  majors,
  csCourse,
  ceCourse,
  eeCourse,
  mathCourse,
}) {
  const [selectedMajorId, setSelectedMajorId] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [prerequisitesList, setPrerequisitesList] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);
  const { showNotif } = useContext(NotifContext);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const major = majors.find((m) => m.majorId === selectedMajorId);
    setSelectedMajor(major);

    if (!major) {
      setPrerequisitesList([]);
    } else if (major.majorCode === "CMPS") {
      setPrerequisitesList(csCourse);
    } else if (major.majorCode === "CMPE") {
      setPrerequisitesList(ceCourse);
    } else if (major.majorCode === "ELEC") {
      setPrerequisitesList(eeCourse);
    } else {
      setPrerequisitesList(mathCourse);
    }
  }, [selectedMajorId]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const course = Object.fromEntries(formData);

    course.creditHour = parseInt(course.creditHour);
    if (course.creditHour <= 0) {
      showNotif("⚠️ Course CH are only positive integers.", "fail");
      return;
    }

    //Check if the course already exist.
    const courses = [...csCourse, ...ceCourse, ...eeCourse, ...mathCourse];
    if (
      courses
        .map((c) => c.courseCode.toLowerCase().replace(/\s+/g, ""))
        .includes(course.courseCode.toLowerCase().replace(/\s+/g, ""))
    ) {
      showNotif("⚠️ Course already exist.", "fail");
      return;
    }

    course.courseCode = selectedMajor.majorCode + course.courseCode;
    course.prerequisitesCoursesId = formData.getAll("prerequisitesCoursesId");

    console.log(course);
    addCourseAction(course);
    updateMajorAction(selectedMajorId, {
      totalCreditHour: selectedMajor.totalCreditHour + course.creditHour,
    });

    e.currentTarget.reset();
  }

  async function handleReset() {
    setPrerequisitesList([]);
    setSelectedMajor(null);
  }

  if (!hasMounted) return null;

  return (
    <form
      action=""
      id="add-courses-form"
      className="add-page-form"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className="form-group">
        <label className="add-page-label" htmlFor="major">
          Select Major
        </label>
        <select
          id="major"
          name="majorId"
          defaultValue={""}
          onChange={(e) => setSelectedMajorId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Major
          </option>
          {majors.map((m) => (
            <option key={m.majorId} value={m.majorId}>
              {m.majorName} ({m.majorCode})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="add-page-label" htmlFor="course-code">
          Course Code No.
        </label>
        <input
          className="add-page-input"
          type="number"
          id="course-code"
          name="courseCode"
          placeholder="e.g. 151"
          required
        />
      </div>
      <div className="form-group">
        <label className="add-page-label" htmlFor="course-name">
          Course Name
        </label>
        <input
          className="add-page-input"
          type="text"
          id="course-name"
          name="courseName"
          placeholder="e.g. Programming Concepts"
          required
        />
      </div>

      <div className="form-group">
        <label className="add-page-label" htmlFor="credit-hour">
          Credit Hour
        </label>
        <input
          className="add-page-input"
          type="number"
          id="credit-hour"
          name="creditHour"
          placeholder="Enter Credit Hour"
          required
        />
      </div>

      <div className="form-group">
        <label className="add-page-label" htmlFor="prerequisites">
          Select Prerequisites Courses
          <p>
            Note: Hold Ctrl Key for Windows and CMD key for Mac to select
            multiple options
          </p>
        </label>
        <select
          id="prerequisites"
          name="prerequisitesCoursesId"
          className="prerequisites-dropdown"
          defaultValue={[""]}
          multiple
        >
          <optgroup
            label={`${selectedMajor?.majorName || "(Select a Major)"} Courses`}
          >
            {prerequisitesList.map((c) => (
              <option key={c.id} value={c.id}>
                {c.courseName}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="checkbox-group">
        <p>Set Course Status and Curriculum</p>
        <input
          className="add-page-input"
          type="hidden"
          name="isOngoing"
          value="off"
        />
        <label className="add-page-label" id="ongoing">
          <input
            className="add-page-input"
            type="checkbox"
            id="ongoing"
            name="isOngoing"
          />{" "}
          Ongoing Course
        </label>
        <input
          className="add-page-input"
          type="hidden"
          name="isRegistration"
          value="off"
        />
        <label className="add-page-label" id="registration">
          <input
            className="add-page-input"
            type="checkbox"
            id="registration"
            name="isRegistration"
          />{" "}
          Open for Registration
        </label>
      </div>

      <div className="button-group">
        <button type="submit">Add Course</button>
        <button type="reset">Clear All</button>
      </div>
    </form>
  );
}
