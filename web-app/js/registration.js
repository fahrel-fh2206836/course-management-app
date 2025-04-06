document.addEventListener("DOMContentLoaded", () =>{

    const selectedCourse = JSON.parse(localStorage.selectedCourse);
    const users = JSON.parse(localStorage.users);
    let student = JSON.parse(localStorage.getItem("loggedInUser"));
    const title = document.querySelector("#title");
    const courseId = document.querySelector("#course-id");
    const courseCode = document.querySelector("#course-code");
    const courseName = document.querySelector("#course-name");
    const courseHours = document.querySelector("#course-hour");
    const preReqCoursesDisplay = document.querySelector("#pre-courses");
    const sectionsDisplay = document.querySelector("#sections-display");

title.innerHTML = `View Sections for ${selectedCourse.courseName}`;

courseId.innerHTML = `${selectedCourse.id}`
courseCode.innerHTML = `${selectedCourse.courseCode}`
courseName.innerHTML = `${selectedCourse.courseName}`
courseHours.innerHTML = `${selectedCourse.creditHour}`


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


const allSections = JSON.parse(localStorage.sections);
let courseSections = [];

function getCourseSections(){
    courseSections = allSections.filter((section) => section.courseId === selectedCourse.id && section.approvalStatus === "APPROVED");
}

getCourseSections();

function displaySections(sections){
    sectionsDisplay.innerHTML = sections.length === 0 ? `There are no sections for this course` : sections.map((section) => sectionHTML(section)).join("\n");
}

function sectionHTML(section){
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


})

