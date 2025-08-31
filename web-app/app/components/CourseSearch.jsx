"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

export default function CoursesSearch({ majors, initialCourses }) {
  const router = useRouter();

  // UI state
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedMajorCode, setSelectedMajorCode] = useState("All");

  // Data state
  const [courses, setCourses] = useState(
    Array.isArray(initialCourses) ? initialCourses : []
  );
  const [loading, setLoading] = useState(false);

  const dropdownBtnRef = useRef(null);
  const dropdownListRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!dropdownBtnRef.current || !dropdownListRef.current) return;
      if (
        dropdownBtnRef.current.contains(e.target) ||
        dropdownListRef.current.contains(e.target)
      ) {
        return;
      }
      setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const toggleDropdown = () => setOpen((v) => !v);

  const placeholder = useMemo(
    () =>
      selectedMajorCode !== "All"
        ? `Search for ${selectedMajorCode} Courses`
        : "Search for Courses",
    [selectedMajorCode]
  );

  const fetchCourses = useCallback(async (params = {}) => {
    setLoading(true);
    try {
      let url = `/api/course`;
      const qs = new URLSearchParams();

      if (params.name && params.name.trim().length) {
        qs.set("name", params.name.trim().toLowerCase());
      }

      if (params.majorCode && params.majorCode !== "All") {
        const mRes = await fetch(`/api/major?code=${params.majorCode}`);
        const m = mRes.ok ? await mRes.json() : null;
        if (m?.majorId) qs.set("majorId", m.majorId);
      }

      if ([...qs].length) url += `?${qs.toString()}`;
      const res = await fetch(url);
      const data = res.ok ? await res.json() : [];
      setCourses(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCoursesByMajorOnly = useCallback(async (code) => {
    setLoading(true);
    try {
      if (code === "All") {
        const res = await fetch(`/api/course`);
        const data = res.ok ? await res.json() : [];
        setCourses(Array.isArray(data) ? data : []);
        return;
      }
      const mRes = await fetch(`/api/major?code=${code}`);
      const m = mRes.ok ? await mRes.json() : null;
      const cRes = await fetch(`/api/course?majorId=${m?.majorId ?? ""}`);
      const data = cRes.ok ? await cRes.json() : [];
      setCourses(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  }, []);

  async function onSearchInput(e) {
    const text = e.target.value || "";
    setQuery(text);

    const trimmed = text.toLowerCase().trim();
    if (trimmed === "") {
      await fetchCoursesByMajorOnly(selectedMajorCode);
      return;
    }
    await fetchCourses({ name: trimmed, majorCode: selectedMajorCode });
  }

  async function selectMajor(code) {
    setSelectedMajorCode(code);
    setQuery("");
    setOpen(false);
    await fetchCoursesByMajorOnly(code);
  }

  function goToRegistration(courseId) {
    router.push(`/dashboard/student/registration/${courseId}`);
  }

  return (
    <>
      <div className="search-bar">
        <div className="search-box">
          <i className="bx bx-search" />
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={onSearchInput}
            id="search-input"
          />
        </div>

        <div className="dropdown">
          <div
            id="dropdown-btn"
            className="dropdown-text"
            onClick={toggleDropdown}
            ref={dropdownBtnRef}
          >
            <span id="dropdown-span">{selectedMajorCode}</span>
            <i
              id="drop-icon"
              className="bx bx-chevron-down"
              style={{
                rotate: open ? "-180deg" : "0deg",
                transition: "rotate .2s ease",
              }}
            />
          </div>

          <ul
            id="list"
            ref={dropdownListRef}
            className={`dropdown-list ${open ? "show-list" : ""}`}
          >
            <li
              className="dropdown-list-item"
              onClick={() => selectMajor("All")}
            >
              All
            </li>
            {majors?.map((m) => (
              <li
                key={m.majorId}
                className="dropdown-list-item"
                onClick={() => selectMajor(m.majorCode)}
              >
                {m.majorCode}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CoursesGrid
        loading={loading}
        courses={courses}
        onClickCard={(id) => goToRegistration(id)}
      />
    </>
  );
}

function CoursesGrid({ loading, courses, onClickCard }) {
  return (
    <div className="display-courses" id="display-courses">
      {loading ? (
        <LoadingSpinner />
      ) : courses?.length ? (
        courses.map((course) => (
          <div
            key={course.id}
            className="course-card hover-underline"
            onClick={() => onClickCard(course.id)}
          >
            <div className="card-flag">
              <p>{course.courseCode}</p>
            </div>
            <div className="card-course-name">
              <p>{course.courseName}</p>
            </div>
            <hr />
            <div className="sub-card-styling">
              <div className="course-status">
                <span>Ongoing Status</span>
                {course.isOngoing ? (
                  <i className="bx bxs-check-circle green" />
                ) : (
                  <i className="bx bxs-x-circle red" />
                )}
              </div>
              <div className="course-status">
                <span>Registration Status</span>
                {course.isRegistration ? (
                  <i className="bx bxs-check-circle green" />
                ) : (
                  <i className="bx bxs-x-circle red" />
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ padding: "1rem" }}>No courses found.</div>
      )}
    </div>
  );
}
