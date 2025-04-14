// Set localstorage.currentpage
localStorage.currentPage = "registration";

const selectedCourse = JSON.parse(localStorage.selectedCourse);
const allRegistrations = JSON.parse(localStorage.registrations);
const currentSem = localStorage.currentSem;
const users = JSON.parse(localStorage.users);
let student = JSON.parse(localStorage.getItem("loggedInUser"));
const majors = JSON.parse(localStorage.majors);
const allSections = JSON.parse(localStorage.sections);
const title = document.querySelector("#title");
const preReqCoursesDisplay = document.querySelector("#pre-courses");
const sectionsDisplay = document.querySelector(".section-list");
const registeredDisplay = document.querySelector("#display-registered");
const table = document.querySelector("#course-table");
const semesters = JSON.parse(localStorage.semesters);

const majorName = majors.find(m => m.majorId===selectedCourse.majorId).majorName
const sectionHeaderH1 = document.querySelector(".section-header").querySelector("h1");

//Header Codee
sectionHeaderH1.innerText = `${selectedCourse.courseCode} Sections`;
title.innerHTML = `View Sections for ${selectedCourse.courseName}`;


//Note for Open Registration
const note = document.querySelector("#note");
note.innerText = `Note: ${semesters[semesters.length-1]} Sections are Open for Registration!`

// Course Details code
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
    return `<div class="course-card">
                <div class="card-flag"><p>${course.courseCode}</p></div>                
                <div class="card-course-name"><p>${course.courseName}</p></div>
                <hr>
                ${courseDone(course.id) === 1 ? "<div class='course-completed'><p>Course has been completed</p><i class='bx bxs-check-circle green'></i></div>" : courseDone(course.id) === 2 ? "<div class='course-completed'><p>Course in progress</p><i class='bx bxs-time-five orange'></i></div>" :  "<div class='course-completed'><p>Course has not been completed</p><i class='bx bxs-x-circle red'></i></div>"}
            </div>`;
}

displayPreCourses(preCourses);

function courseDone(courseID){

    for(let i = 0; i<allRegistrations.length ; i++){
        let isRegistered = allRegistrations[i].studentId === student.userId && allRegistrations[i].courseId === courseID;
        if( isRegistered && allRegistrations[i].grade === ""){
            return 2;
        }
        else if(isRegistered && allRegistrations[i].grade !== "F"){
            return 1;
        }
    }
    return 3;
}



// Sections code
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
                ${section.sectionStatus === "OPEN_REGISTRATION" ? `<button class="reg-btn active-reg-btn" onclick = "handleRegistration('${section.sectionId}')">Register</button>`
                 : `<button class="reg-btn grey">Register</button>`
            }
            </div>`;
}

displaySections(courseSections);

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
            $.map(s => ${semesters.map(s => `<option value="${s}">${s}</option>`).join('\n')}`
}

renderSemesterDropdown()

const semFilter = document.querySelector("#semester-filter");

semFilter.addEventListener('change', handleFilter);

function handleFilter(e) {
    let selectedSections = allSections.filter(s => s.courseId===selectedCourse.id);
    if(semFilter.value !== "All") {
        selectedSections = selectedSections.filter(s => s.semester === semFilter.value);
    }
    displaySections(selectedSections);
}

async function handleRegistration(sectionId){
    const index = allSections.findIndex(s => s.sectionId === sectionId);
    const selectedSection = allSections[index];

    // Check if he registered over 18
    if(countNewSecAndRegisteredCh(selectedSection, registeredSections) > 18){
        showNotification("max-ch-notif");
        return;
    }

    // Checks if course is in their program.
    if(!majors.find(m => m.majorId === student.majorId).allCourses.includes(selectedSection.courseId)) {
        showNotification("not-program-notif");
        return;
    }

    // Check if he has already completed the course before
    if(courseDone(selectedSection.courseId) === 1) {
        showNotification("passed-notif");
        return;
    }

    // Check if seats are full
    if (selectedSection.currentSeats === selectedSection.totalSeats) {
        showNotification("full-notif");
        return;
    }

    // Checks if he has already registered in the same section or another section of the same course.
    if(registeredSections.find(s => s.courseId === selectedSection.courseId)) {
        showNotification("same-course-notif");
        return;
    }

    //Check if all Prerequisite are fullfilled
    let preReqCheck = [];
    preCourses.forEach(pc => preReqCheck.push(courseDone(pc.id)));
    if (!(preReqCheck.length === 0) && !(preReqCheck.every(val => val === 1))) {
        showNotification("prerequisite-notif")
        return;
    }

    // Check for time conflict
    if (hasTimeConflict(selectedSection, registeredSections)) {
        showNotification("conflict-notif");
        return;
    }


    // Creating new registration    
    let newRegistration = {
        studentId: student.userId,
        courseId: selectedSection.courseId,
        sectionId: sectionId,
        grade: ""
    }

    allRegistrations.push(newRegistration);
    localStorage.registrations = JSON.stringify(allRegistrations);
    allSections[index].currentSeats+=1;
    localStorage.sections = JSON.stringify(allSections);

    getCurrentlyRegistered();
    displayRegisteredSections(registeredSections);
    getCourseSections();
    displaySections(courseSections);

    showNotification('registered-notif');
}

function countNewSecAndRegisteredCh(newSection, regSections) {
    let totalCh = countRegisteredCH(regSections);
    totalCh += allCourses.find(c => c.id === newSection.courseId).creditHour;
    return totalCh;
}

function countRegisteredCH(regSections) {
    let totalCh = 0;
    let regCoursesId = regSections.map(r => r.courseId);
    let regCoursesCh = allCourses.filter(c => regCoursesId.includes(c.id)).map(c => c.creditHour);
    regCoursesCh.forEach(rch => totalCh+=rch);
    return totalCh;
}

function hasTimeConflict(newSection, registeredSections) {
    const newDays = newSection.schedule.days.split("-");
    const [newStart, newEnd] = newSection.schedule.time.split("-").map(toMinutes);
  
    for (let r of registeredSections) {
        if (!r.schedule || !r.schedule.days || !r.schedule.time) {
            continue;
        }
        let regDays = r.schedule.days.split("-");
        let [regStart, regEnd] = r.schedule.time.split("-").map(toMinutes);

        let overlappingDays = newDays.some(day => regDays.includes(day));

        if (overlappingDays) {
            let isTimeOverlapping = newEnd >= regStart && newStart <= regEnd;
            if (isTimeOverlapping) {
                return true;
            }
        }
    }
    return false;
  }

function toMinutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(n => parseInt(n));
    return hours * 60 + minutes;
}

// Get Registered sections

let registeredSections = [];

function getCurrentlyRegistered() {
    registeredSections = [];
    let ongoingAndRegistered = allRegistrations.filter((registration) => registration.studentId === student.userId && registration.grade === "");
    for(r of ongoingAndRegistered){
        let sec = allSections.find((section) => section.sectionId === r.sectionId);
        if(sec.sectionStatus === "OPEN_REGISTRATION"){
            registeredSections.push(sec);
        }
    }
}

getCurrentlyRegistered();

document.querySelector("#curr-ch").innerText = ` Your CH: ${countRegisteredCH(registeredSections)}`

function displayRegisteredSections(sections){
    let html = "";
    if(sections.length === 0) {
        registeredDisplay.style.placeItems = "center";
        registeredDisplay.style.height = "100%";
        html =  `<div class="empty-section">
                    <i class='bx bxs-error-circle'></i>
                    <p>You have not registered for any courses.</p>
                </div>`
    } else {
        registeredDisplay.style.placeItems = null;
        registeredDisplay.style.height = null;
        html = sections.map((section) => registeredHTML(section)).join("\n");
    }
    registeredDisplay.innerHTML = html;
}

function registeredHTML(section){
    const i = users.find(u => u.userId===section.instructorId);
    const registerdCourse = allCourses.find(c => c.id === section.courseId);

    return `<div class="course-card">
                <div class="card-flag"><p>${registerdCourse.courseCode}</p></div>
                <div class="card-seats position-slight-top-left">
                    <i class='bx bxs-group'></i>
                    <p>${section.currentSeats}/${section.totalSeats}</p>
                </div>
                <div class="delete-button position-corner-top-left red-bg" onclick = "removeRegistered('${section.sectionId}')">
                    <i class='bx bxs-trash-alt' ></i>
                </div>
                <div class="card-course-name"><p>${registerdCourse.courseName}</p></div>
                <div class="card-course-instructor"><p>Instructor: ${i.firstName} ${i.lastName}</p></div>
                <div class="card-course-section-location"><p>Section ID: ${section.sectionId}</p><p>Class Location: ${section.location !== '' ? section.location : 'None'}</p></div>
                <hr>
                <div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${section.semester}</p><p><i class='bx bx-calendar-week'></i>${section.schedule.days !== '' ? section.schedule.days : 'None'}</p><p><i class='bx bx-time'></i>${section.schedule.time !== '' ? section.schedule.time : 'None'}</p></div>                
            </div>`;
}

displayRegisteredSections(registeredSections);

function removeRegistered(sectionId){

    let registeredSectionIndex = registeredSections.findIndex((section) => section.sectionId === sectionId);
    registeredSections.splice(registeredSectionIndex,1);
    

    let sectionIndex = allSections.findIndex((section) => section.sectionId === sectionId);
    allSections[sectionIndex].currentSeats -= 1;
    localStorage.sections = JSON.stringify(allSections);

    let registeredIndex = allRegistrations.findIndex((r) => r.studentId === student.userId && r.sectionId === sectionId);
    allRegistrations.splice(registeredIndex,1);
    localStorage.registrations = JSON.stringify(allRegistrations);

    displayRegisteredSections(registeredSections);
    getCourseSections();
    displaySections(courseSections);
    showNotification("unregistered-notif");
} 

function showNotification(elementId) {
    document.querySelector(`#${elementId}`).classList.add("show");

    setTimeout(() => {
        document.querySelector(`#${elementId}`).classList.remove("show");
    }, 3000);
}