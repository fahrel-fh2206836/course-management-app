// Set localstorage.currentpage
localStorage.currentPage = "dashboard";
baseUrl = "/api/"

const user = JSON.parse(localStorage.getItem("loggedInUser"));

const nameSpan = document.querySelector("#name");
const majorSpan = document.querySelector("#stats-major");
const cgpaSpan = document.querySelector("#stats-CGPA");
const coursesSpan = document.querySelector("#stats-no-courses");
const completedSpan = document.querySelector("#stats-completed");
const progressBar = document.querySelector("#progress-bar").querySelector("div");
const percentSpan = document.querySelector("#bar-percentage");
const registeredList = document.querySelector("#course-card-list");

async function loadStudentMajor() {
    const response = await fetch(`${baseUrl}/major/${user.Student.majorId}`);
    const studentMajor = await response.json();
    majorSpan.innerText = studentMajor.majorName;

    const progress = (user.Student.finishedCreditHour/studentMajor.totalCreditHour) * 100;
    completedSpan.innerText = `${user.Student.finishedCreditHour}/${studentMajor.totalCreditHour}`
    percentSpan.innerText = `${progress.toFixed(1)}%`
    progressBar.style.width = progress + "%";

    nameSpan.innerText = `${user.firstName} ${user.lastName}`;
    cgpaSpan.innerText = user.Student.gpa.toString();
}

async function loadStudentongoingRegs() {
    const responseSem = await fetch(`${baseUrl}/semester`);
    const semesters = await responseSem.json();
    const ongoingSem = semesters[semesters.length-2].semester;
    const responseSec = await fetch(`/api/section?studentId=${user.userId}&semester=${ongoingSem}`);
    const ongoingSections = await responseSec.json();
    renderRegisteredCourses(ongoingSections);
}

async function dataLoaderApi() {
    loadStudentMajor();
    loadStudentongoingRegs();
}

dataLoaderApi();

function renderRegisteredCourses(studentsRegistrations) {
    let html = ``;
    coursesSpan.innerText = studentsRegistrations.length;
    if(studentsRegistrations.length === 0) {
        html = `<div class="empty-section">
                    <i class='bx bxs-error-circle'></i>
                    <p>No Registered Section.</p>
                </div>`;
    } else {
        studentsRegistrations.forEach(regSec => {
            html+=generateCourseListHTML(regSec.section, regSec.section.course, regSec.section.instructor.user)+'\n';
        })
    } 
    registeredList.innerHTML = html;
}

function generateCourseListHTML(s, c, i) {
    return `
            <div class="course-card">
                <div class="card-flag"><p>${c.courseCode}</p></div>
                <div class="card-course-name"><p>${c.courseName}</p></div>
                <div class="card-course-instructor"><p>Instructor: ${i.firstName} ${i.lastName}</p></div>
                <div class="card-course-section-location"><p>Section ID: ${s.sectionId}</p><p>Class Location: ${s.location !== '' ? s.location : 'None'}</p></div>
                <hr>
                <div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${s.semester}</p><p><i class='bx bx-calendar-week'></i>${s.days !== '' ? s.days : 'None'}</p><p><i class='bx bx-time'></i>${s.time !== '' ? s.time : 'None'}</p></div>
            </div>`;
}




