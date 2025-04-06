const selectedCourse = JSON.parse(localStorage.selectedCourse);
const users = JSON.parse(localStorage.users);
let student = JSON.parse(localStorage.getItem("loggedInUser"));
const majors = JSON.parse(localStorage.majors);
const allSections = JSON.parse(localStorage.sections);
const title = document.querySelector("#title");
const preReqCoursesDisplay = document.querySelector("#pre-courses");
const sectionsDisplay = document.querySelector(".section-list");
const table = document.querySelector("#course-table");

const majorName = majors.find(m => m.majorId===selectedCourse.majorId).majorName
const sectionHeaderH1 = document.querySelector(".section-header").querySelector("h1");

sectionHeaderH1.innerText = `${selectedCourse.courseCode} Sections`;
title.innerHTML = `View Sections for ${selectedCourse.courseName}`;

const coursePrerequisites = selectedCourse.prerequisitesCoursesId;
const allCourses = JSON.parse(localStorage.courses);
let preCourses = [];

function getPreCourses(){
    preCourses = allCourses.filter((course) => coursePrerequisites.includes(course.id));
}
getPreCourses();

function displayPreCourses(preCourse){
    preCourse.sort((a, b) => a.courseName.localeCompare(b.courseName));
    preReqCoursesDisplay.innerHTML = preCourse.length === 0 ? `There are no prerequisites for this course` : preCourse.map((course) => courseHTML(course)).join("\n");
}

function courseHTML(course){
    return `<div class="course-card hover-underline">
                <div class="card-flag"><p>${course.courseCode}</p></div>                
                <div class="card-course-name"><p>${course.courseName}</p></div>
                <hr>
                <!--To dooooo-->
            </div>`;
}

displayPreCourses(preCourses);

let courseSections = [];

function getCourseSections(){
    courseSections = allSections.filter((section) => section.courseId === selectedCourse.id && (section.approvalStatus === "APPROVED" || section.approvalStatus === "PENDING"));
}

getCourseSections();

function displaySections(sections){
    sectionsDisplay.innerHTML = sections.length === 0 ? `<div class="empty-section">
                                                            <i class='bx bxs-error-circle'></i>
                                                            <p>This course has no sections.</p>
                                                         </div>` : sections.map((section) => sectionHTML(section)).join("\n");
}

function sectionHTML(section) {
    const i = users.find(u => u.userId===section.instructorId);

    return `<div class="course-card">
                <div class="card-flag"><p>${selectedCourse.courseCode}</p></div>
                <div class="card-seats position-corner-top-left">
                    <i class='bx bxs-group'></i>
                    <p>${section.currentSeats}/${section.totalSeats}</p>
                </div>
                <div class="card-course-name"><p>${selectedCourse.courseName}</p></div>
                <div class="card-course-instructor"><p>Instructor: ${i.firstName} ${i.lastName}</p></div>
                <div class="card-course-section-location"><p>Section ID: ${section.sectionId}</p><p>Class Location: ${section.location !== '' ? section.location : 'None'}</p></div>
                <hr>
                <div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${section.semester}</p><p><i class='bx bx-calendar-week'></i>${section.schedule.days !== '' ? section.schedule.days : 'None'}</p><p><i class='bx bx-time'></i>${section.schedule.time !== '' ? section.schedule.time : 'None'}</p></div>
                <hr>
            </div>`;
}

displaySections(courseSections);

// Javascript I added (Remove this comment later)

function convertTableToHTML() {
    return `<tbody>
                    <tr>
                    <th>Course ID</th>
                    <td>${selectedCourse.id}</td>
                    </tr>
                    <tr>
                    <th>Course Name</th>
                    <td>${selectedCourse.courseName}</td>
                    </tr>
                    <tr>
                    <th>Course Code</th>
                    <td>${selectedCourse.courseCode}</td>
                    </tr>
                    <tr>
                    <th>Major</th>
                    <td colspan="3">${majorName}</td>
                    </tr>
                    <tr>
                    <th>Credit Hour</th>
                    <td colspan="3">${selectedCourse.creditHour}</td>
                    </tr>
                    <tr>
                    <th>Status - Ongoing</th>
                    <td colspan="3"><div class="${selectedCourse.isOngoing ? 'green-box green-bg' : 'red-box red-bg'}"></div></td>
                    </tr>
                    <tr>
                    <th>Status - Registration</th>
                    <td colspan="3"><div class="${selectedCourse.isRegistration ? 'green-box green-bg' : 'red-box red-bg'}"></div></td>
                    </tr>
                </tbody>
                `;
}

function renderTable() {
    table.innerHTML = convertTableToHTML();
}

renderTable();

function renderSemesterDropdown() {
    const semesterDropdown = document.querySelector('#semester-filter');
    semesterDropdown.innerHTML = convertSemesterOptionHTML();
}

function convertSemesterOptionHTML() {
    return `<option value="All" selected>All Semester</option>
            ${JSON.parse(localStorage.semesters).map(s => `<option value="${s}">${s}</option>`).join('\n')}`
}

renderSemesterDropdown()

const semFilter = document.querySelector("#semester-filter");

semFilter.addEventListener('change', handleFilter);

function handleFilter(e) {
    let selectedSections = allSections.filter(s => s.courseId===selectedCourse.id);
    if(semFilter.value !== "All") {
        selectedSections = selectedSections.filter(s => s.semester === semFilter.value);
    }

    if(approvalFilter.value !== "None") {
        selectedSections = selectedSections.filter(s => s.approvalStatus === approvalFilter.value);
    }

    if(sectionStatusFilter.value !== "None") {
        selectedSections = selectedSections.filter(s => s.sectionStatus === sectionStatusFilter.value);
    }

    displaySections(selectedSections);
}