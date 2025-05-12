// Set localstorage.currentpage
localStorage.currentPage = "registration";
const selectedCourse = JSON.parse(localStorage.selectedCourse);
const student = JSON.parse(localStorage.getItem("loggedInUser"));
const baseUrl = "/api"

let currentSem = '';
let majors = [];
let courseSections = [];
let semesters = [];
let majorName = '';
let preCourses = [];
let registeredSections = [];

async function loadCurrentSem() {
    const response = await fetch(`${baseUrl}/semester`)
    const semesters = await response.json()
    const currentSem = semesters[semesters.length - 2];
    return currentSem;
}

async function loadMajors(){
    const response = await fetch (`${baseUrl}/major`);
    const majors = await response.json();
    return majors;
}

async function loadAllSemesters() {
    const response = await fetch(`${baseUrl}/semester`);
    const semesters = await response.json();
    return semesters;
}

async function loadCourseSections() {
    const response = await fetch(`${baseUrl}/section?courseId=${selectedCourse.id}&approval=CANCELLED&notApproval=true`);
    const sections = await response.json();
    return sections;
}

async function getCurrentlyRegistered() {
    const responseRegs = await fetch(`/api/registration?studentId=${student.userId}&section-status=OPEN_REGISTRATION`);
    const currentlyRegistered = await responseRegs.json();
    return currentlyRegistered;
}

window.addEventListener("DOMContentLoaded", async () => {
    currentSem = await loadCurrentSem();
    majors = await loadMajors();
    courseSections = await loadCourseSections();
    semesters = await loadAllSemesters();
    registeredSections = await getCurrentlyRegistered();
    
    preCourses = (await (await fetch(`${baseUrl}/course/${selectedCourse.id}/prerequisites`)).json()).prerequisites;
    majorName = (await (await fetch(`${baseUrl}/major/${selectedCourse.majorId}`)).json()).majorName;
    const sectionHeaderH1 = document.querySelector(".section-header").querySelector("h1");

    //Note for Open Registration
    const note = document.querySelector("#note");
    note.innerText = `Note: ${semesters[semesters.length-1].semester} Sections are Open for Registration!`

    //Header Codee
    sectionHeaderH1.innerText = `${selectedCourse.courseCode} Sections`;
    title.innerHTML = `View Sections for ${selectedCourse.courseName}`;

    displayPreCourses();
    displaySections(courseSections);
    renderTable();
    renderSemesterDropdown();
    displayRegisteredSections(registeredSections);
    document.querySelector("#curr-ch").innerText = ` Your CH: ${countRegisteredCH(registeredSections)}`; 
})

const title = document.querySelector("#title");
const preReqCoursesDisplay = document.querySelector("#pre-courses");
const sectionsDisplay = document.querySelector(".section-list");
const registeredDisplay = document.querySelector("#display-registered");
const table = document.querySelector("#course-table");

async function displayPreCourses(){
    if(preCourses.length === 0 ) {
        preReqCoursesDisplay.innerHTML = `There are no prerequisites for this course`;
        return;
    }
    preReqCoursesDisplay.innerHTML = (await Promise.all(preCourses.map(c => courseHTML(c.prerequisite)))).join('\n');

}

async function courseHTML(course){
    return `<div class="course-card">
                <div class="card-flag"><p>${course.courseCode}</p></div>                
                <div class="card-course-name"><p>${course.courseName}</p></div>
                <hr>
                ${await courseDone(course.id) ? "<div class='course-completed'><p>Course has been completed</p><i class='bx bxs-check-circle green'></i></div>" : "<div class='course-completed'><p>Course has not been completed</p><i class='bx bxs-x-circle red'></i></div>"}
            </div>`;
}



async function courseDone(courseID){
    return await (await fetch(`${baseUrl}/student/${student.userId}/completed-courses?courseId=${courseID}&check-completed=true`)).json();
}

// Sections code
function displaySections(sections){
    sectionsDisplay.innerHTML = sections.length === 0 ? `<div class="empty-section">
                                                            <i class='bx bxs-error-circle'></i>
                                                            <p>This course has no sections.</p>
                                                         </div>` : sections.map((section) => sectionHTML(section)).join("\n");
}

function sectionHTML(section) {
    const i = section.instructor.user;

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
                <div class="card-course-sem-schedule">
                    <p><i class='bx bx-calendar'></i>${section.semester}</p>
                    <p><i class='bx bx-calendar-week'></i>${section.days ? section.days : 'None'}</p>
                    <p><i class='bx bx-time'></i>${section.time ? section.time : 'None'}</p>
                </div>
                <hr>
                ${section.sectionStatus === "OPEN_REGISTRATION" ? `<button class="reg-btn active-reg-btn" onclick = "handleRegistration('${section.sectionId}')">Register</button>`
                 : `<button class="reg-btn grey">Register</button>`
            }
            </div>`;
}


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

function renderSemesterDropdown() {
    const semesterDropdown = document.querySelector('#semester-filter');
    semesterDropdown.innerHTML = convertSemesterOptionHTML();
}

function convertSemesterOptionHTML() {
    return `<option value="All" selected>All Semester</option>
            ${semesters.map(s => `<option value="${s.semester}">${s.semester}</option>`).join('\n')}`         
}


const semFilter = document.querySelector("#semester-filter");

semFilter.addEventListener('change', handleFilter);

async function handleFilter(e) {
    if(semFilter.value !== "All") {
        displaySections(await (await fetch(`${baseUrl}/section?courseId=${selectedCourse.id}&semester=${semFilter.value}&approval=CANCELLED&notApproval=true`)).json());
        return;
    }
    displaySections(courseSections);
}

async function handleRegistration(sectionId){
    const selectedSection = await (await fetch(`${baseUrl}/section/${sectionId}`)).json();

    // Check if he registered over 18
    if(countNewSecAndRegisteredCh(selectedSection) > 18){
        showNotification("max-ch-notif");
        return;
    }

    // Checks if course is in their program.
    if(student.Student.majorId != selectedSection.course.majorId) {
        showNotification("not-program-notif");
        return;
    }

    // Check if he has already completed the course before
    if(await courseDone(selectedSection.courseId) === true) {
        showNotification("passed-notif");
        return;
    }

    // Checks if he has already registered in the same section or another section of the same course.
    if(registeredSections.find(s => s.courseId === selectedSection.courseId)) {
        showNotification("same-course-notif");
        return;
    }

    // Check if seats are full
    if (selectedSection.currentSeats === selectedSection.totalSeats) {
        showNotification("full-notif");
        return;
    }

    //Check if all Prerequisite are fullfilled
    const preReqCheck = await Promise.all(preCourses.map(pc => courseDone(pc.id)));
    if (!(preReqCheck.length === 0) && !(preReqCheck.every(val => val === true))) {
        showNotification("prerequisite-notif")
        return;
    }

    // Check for time conflict
    if (hasTimeConflict(selectedSection)) {
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

    // Add Course
    await fetch("/api/registration", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRegistration)
    })

    selectedSection.currentSeats+=1;
    // Update Section
    await fetch(`${baseUrl}/section/${sectionId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedSection)
    })

    // Re-render
    registeredSections = await getCurrentlyRegistered();
    courseSections = await loadCourseSections()
    displayRegisteredSections(registeredSections);
    displaySections(courseSections);
    document.querySelector("#curr-ch").innerText = ` Your CH: ${countRegisteredCH(registeredSections)}`; 
    showNotification('registered-notif');
}

function countNewSecAndRegisteredCh(newSection) {
    let totalCh = countRegisteredCH();
    totalCh += newSection.course.creditHour;
    return totalCh;
}

function countRegisteredCH() {
    let totalCh = 0;
    let regCoursesCh = registeredSections.map(r => r.section.course.creditHour);
    regCoursesCh.forEach(rch => totalCh+=rch);
    return totalCh;
}

function hasTimeConflict(newSection) {
    const newDays = newSection.days.split("-");
    const [newStart, newEnd] = newSection.time.split("-").map(toMinutes);
  
    for (let r of registeredSections) {
        const currSection = r.section;
        if (!currSection.days || !currSection.time) {
            continue;
        }
        let regDays = currSection.days.split("-");
        let [regStart, regEnd] = currSection.time.split("-").map(toMinutes);

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

function displayRegisteredSections(regSections){
    let html = "";
    if(regSections.length === 0) {
        registeredDisplay.style.placeItems = "center";
        registeredDisplay.style.height = "100%";
        html =  `<div class="empty-section">
                    <i class='bx bxs-error-circle'></i>
                    <p>You have not registered for any courses.</p>
                </div>`
    } else {
        registeredDisplay.style.placeItems = null;
        registeredDisplay.style.height = null;
        html = regSections.map((r) => registeredHTML(r.section)).join("\n");
    }
    registeredDisplay.innerHTML = html;
}

function registeredHTML(section){
    const i = section.instructor.user;
    const registerdCourse = section.course;

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
                <div class="card-course-section-location"><p>Section ID: ${section.sectionId}</p></div>
                <div class="card-course-section-location"><p>Class Location: ${section.location !== '' ? section.location : 'None'}</p></div>
                <hr>
                <div class="card-course-sem-schedule">
                    <p><i class='bx bx-calendar'></i>${section.semester}</p>
                    <p><i class='bx bx-calendar-week'></i>${section.days ? section.days : 'None'}</p>
                    <p><i class='bx bx-time'></i>${section.time ? section.time : 'None'}</p>
                </div>                
            </div>`;
}


async function removeRegistered(sectionId){
    const section = await (await fetch(`${baseUrl}/section/${sectionId}`)).json();
    section.currentSeats -= 1;

    // Update Section
    await fetch(`${baseUrl}/section/${sectionId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(section)
    })

    // Delete Registration
    await fetch(`/api/registration?sectionId=${sectionId}&studentId=${student.userId}`, {
            method: 'DELETE'
    });

    // Re-render
    registeredSections = await getCurrentlyRegistered();
    courseSections = await loadCourseSections()
    displayRegisteredSections(registeredSections);
    displaySections(courseSections);
    document.querySelector("#curr-ch").innerText = ` Your CH: ${countRegisteredCH(registeredSections)}`; 
    showNotification("unregistered-notif");
} 

function showNotification(elementId) {
    document.querySelector(`#${elementId}`).classList.add("show");

    setTimeout(() => {
        document.querySelector(`#${elementId}`).classList.remove("show");
    }, 3000);
}