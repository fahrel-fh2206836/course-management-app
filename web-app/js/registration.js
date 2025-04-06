const selectedCourse = JSON.parse(localStorage.selectedCourse);
const title = document.querySelector("#title");
const courseId = document.querySelector("#course-id");
const courseCode = document.querySelector("#course-code");
const courseName = document.querySelector("#course-name");
const courseHours = document.querySelector("#course-hour");
const preReqCoursesDisplay = document.querySelector("pre-courses");

const coursePrerequisites = selectedCourse.prerequisitesCoursesId;
const allCourses = localStorage.courses;

title.innerHTML = `View Sections for ${selectedCourse.courseName}`;

courseId.innerHTML = `${selectedCourse.id}`
courseCode.innerHTML = `${selectedCourse.courseCode}`
courseName.innerHTML = `${selectedCourse.courseName}`
courseHours.innerHTML = `${selectedCourse.creditHour}`
