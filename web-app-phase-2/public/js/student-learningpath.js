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
const inProgressList = document.querySelector(".status-in_progress .course-list");

let completedCoursesCount = 0;


async function loadLearningPath() {
    const studentRes = await fetch("/api/student");
    const student = await studentRes.json();

    const majorsRes = await fetch("/api/majors");
    const majors = await majorsRes.json();

    const registrationsRes = await fetch("/api/registrations");
    const registrations = await registrationsRes.json();

    const sectionsRes = await fetch("/api/sections");
    const sections = await sectionsRes.json();

    const coursesRes = await fetch("/api/courses");
    const courses = await coursesRes.json();

    const studentMajor = majors.find(m => m.majorId === student.majorId);

    const allCourseIds = studentMajor?.allCourses || [];

    nameElem.textContent = `${student.firstName} ${student.lastName}`;
    majorElem.textContent = studentMajor.majorName;
    cgpaElem.textContent = student.gpa.toFixed(2);
    chElem.textContent = `${student.finishedCreditHour}/${studentMajor.totalCreditHour}`;

    const progress = (student.finishedCreditHour / studentMajor.totalCreditHour) * 100;

    barElem.style.width = `${progress}%`;
    percentElem.textContent = `${progress.toFixed(1)}%`;

    // Flowchart image
    const image = document.querySelector(".img-prerequiste");

    if (studentMajor.majorName === "Computer Science") {
        image.innerHTML = `<img src="../assets/images/flowchart_cs.png" alt="">`;
    } else if (studentMajor.majorName === "Computer Engineering") {
        image.innerHTML = `<img src="../assets/images/flowchart_ce.png" alt="">`;
    }

    completedList.innerHTML = "";
    pendingList.innerHTML = "";
    inProgressList.innerHTML = "";

    const takenCourseIds = [];

    registrations
        .filter(reg => reg.studentId === student.userId)
        .forEach(reg => {
            const sec = sections.find(s => s.sectionId === reg.sectionId);
            const crs = courses.find(c => c.id === sec?.courseId);

            if (!crs) return;

            takenCourseIds.push(crs.id);

            const courseHTML = `
                <div class="scrolling">
                    <div class="course-card">
                        <div class="course-header">
                            <span class="course-code">${crs.courseCode}</span>
                            <span class="course-title">${crs.courseName}</span>
                            <span class="course-ch">${crs.creditHour} CH</span>
                        </div>
                        ${reg.grade && reg.grade !== "F" && reg.grade !== "f" ? `<div class="course-grade"><span>Grade: ${reg.grade}</span></div>` : ""}
                    </div>
                </div>`;

            if (reg.grade && reg.grade !== "F" && reg.grade !== "f") {
                completedCoursesCount++;
                completedList.innerHTML += courseHTML;
            } else if (reg.grade === "F" || reg.grade === "f") {
                pendingList.innerHTML += courseHTML;
            } else if (reg.grade === "" && crs.isOngoing) {
                inProgressList.innerHTML += courseHTML;
            }
        });

    allCourseIds
        .filter(id => !takenCourseIds.includes(id))
        .forEach(id => {
            const crs = courses.find(c => c.id === id);

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
    const selectedStatus = document.querySelector('#status-filter').value;
    const statuses = ["completed", "pending", "in_progress"];
    const isMobile = window.innerWidth <= 900;

    statuses.forEach(status => {
        const section = document.querySelector(`.status-${status}`);
        section.style.display = (isMobile && selectedStatus !== "all" && status !== selectedStatus)
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
document.querySelector("#status-filter").addEventListener("change", filterCourses);
window.addEventListener("resize", () => {
    filterCourses();
    toggleFilterVisibility();
});

// Initialize
loadLearningPath().then(() => {
    filterCourses();
    toggleFilterVisibility();
});