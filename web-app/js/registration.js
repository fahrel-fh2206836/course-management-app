const selectedCourse = JSON.parse(localStorage.selectedCourse);
const title = document.querySelector("#title");
const courseId = document.querySelector("#course-id");
const courseCode = document.querySelector("#course-code");
const courseName = document.querySelector("#course-name");
const courseHours = document.querySelector("#course-hour");
const preReqCoursesDisplay = document.querySelector("#pre-courses");

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
            </div>`;
}

displayPreCourses(preCourses);

