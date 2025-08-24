localStorage.currentPage = "learningPath";

const nameElem = document.querySelector("#name");
const majorElem = document.querySelector("#stats-major");
const cgpaElem = document.querySelector("#stats-CGPA");
const chElem = document.querySelector("#stats-completed-ch");
const barElem = document.querySelector("#progress-bar").querySelector("div");
const percentElem = document.querySelector("#bar-percentage");
const completedCoursesElem = document.querySelector("#stats-completed-courses");

const completedList = document.querySelector(".status-completed .course-list");
const pendingList = document.querySelector(".status-pending .course-list");
const inProgressList = document.querySelector(
  ".status-in_progress .course-list"
);

let completedCoursesCount = 0;

async function loadLearningPath() {
  const loggedInUser = JSON.parse(localStorage.loggedInUser);
  const studentId = loggedInUser.userId;

  const res = await fetch(`/api/student/${studentId}`);
  const data = await res.json();

  const { student, major, courses, registrations } = data;

  nameElem.textContent = `${student.firstName} ${student.lastName}`;
  majorElem.textContent = major.majorName;
  cgpaElem.textContent = student.gpa.toFixed(2);
  chElem.textContent = `${student.finishedCreditHour}/${major.totalCreditHour}`;

  const progress = (student.finishedCreditHour / major.totalCreditHour) * 100;
  barElem.style.width = `${progress}%`;
  percentElem.textContent = `${progress.toFixed(1)}%`;

  const image = document.querySelector(".img-prerequiste");

  const flowchartMap = {
    "Computer Science": "flowchart_cs.png",
    "Computer Engineering": "flowchart_ce.png",
    "Electrical Engineering": "Screenshot 2025-05-07 200319.jpg",
    Mathematics: "math-ug-curriculum-flowchart.png",
  };

  const flowchartFile =
    flowchartMap[major.majorName] || "default_flowchart.png";
  image.innerHTML = `<img src="../assets/images/${flowchartFile}" alt="">`;

  completedList.innerHTML = "";
  pendingList.innerHTML = "";
  inProgressList.innerHTML = "";

  const courseStatusMap = new Map();

  // Handling another attempt in a course.
  registrations.forEach((reg) => {
    const crs = reg.section.course;
    if (!crs) return;

    const existing = courseStatusMap.get(crs.id);

    // Grade priority: Completed > In Progress > Failed
    const grade = reg.grade;
    const status =
      grade && grade !== "F" && grade !== "f"
        ? "completed"
        : grade === "" && reg.section.sectionStatus === "ONGOING"
        ? "inProgress"
        : "pending";

    // If no entry yet or current status is better than existing, update
    if (
      !existing ||
      (existing.status === "pending" &&
        (status === "completed" || status === "inProgress"))
    ) {
      courseStatusMap.set(crs.id, { status, course: crs, grade });
    }
  });

  for (const { status, course, grade } of courseStatusMap.values()) {
    const courseHTML = `
    <div class="scrolling">
      <div class="course-card">
        <div class="course-header">
          <span class="course-code">${course.courseCode}</span>
          <span class="course-title">${course.courseName}</span>
          <span class="course-ch">${course.creditHour} CH</span>
        </div>
        ${
          status === "completed"
            ? `<div class="course-grade"><span>Grade: ${grade}</span></div>`
            : ""
        }
      </div>
    </div>`;

    if (status === "completed") {
      completedCoursesCount++;
      completedList.innerHTML += courseHTML;
    } else if (status === "inProgress") {
      inProgressList.innerHTML += courseHTML;
    } else {
      pendingList.innerHTML += courseHTML;
    }
  }

  const allCourseIds = courses.map((c) => c.id);
  const takenCourseIds = [...courseStatusMap.keys()];

  allCourseIds
    .filter((id) => !takenCourseIds.includes(id))
    .forEach((id) => {
      const crs = courses.find((c) => c.id === id);
      if (crs) {
        pendingList.innerHTML += `
        <div class="scrolling">
          <div class="course-card">
            <div class="course-header">
              <span class="course-code">${crs.courseCode}</span>
              <span class="course-title">${crs.courseName}</span>
              <span class="course-ch">${crs.creditHour} CH</span>
            </div>
          </div>
        </div>`;
      }
    });

  completedCoursesElem.textContent = completedCoursesCount;
}

// Filter UI by status
function filterCourses() {
  const selectedStatus = document.querySelector("#status-filter").value;
  const statuses = ["completed", "pending", "in_progress"];
  const isMobile = window.innerWidth <= 900;

  statuses.forEach((status) => {
    const section = document.querySelector(`.status-${status}`);
    section.style.display =
      isMobile && selectedStatus !== "all" && status !== selectedStatus
        ? "none"
        : "block";
  });
}

// Toggle filter visibility for small screens
function toggleFilterVisibility() {
  const label = document.querySelector(".status-label");
  const dropdown = document.querySelector("#status-filter");
  const isMobile = window.innerWidth <= 900;

  label.style.display = isMobile ? "block" : "none";
  dropdown.style.display = isMobile ? "block" : "none";
}

// Events
document
  .querySelector("#status-filter")
  .addEventListener("change", filterCourses);
window.addEventListener("resize", () => {
  filterCourses();
  toggleFilterVisibility();
});

// Initialize
loadLearningPath().then(() => {
  filterCourses();
  toggleFilterVisibility();
});
