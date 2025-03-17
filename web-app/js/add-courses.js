//Local Storages
const courses = JSON.parse(localStorage.courses);

//Inputs
const form = document.querySelector("#add-courses-form");
const courseCode = document.querySelector("#course-code");
const courseName = document.querySelector("#course-name");
const creditHour = document.querySelector("#credit-hour");
const majorDropdown = document.querySelector("#major");
const prerequisitesDropdown = document.querySelector("prerequisites");
const ongoingCheckbox = document.querySelector("ongoing");
const regCheckbox = document.querySelector("registration");

//Initialize prerequisitesDropdown values
const csCoursesOpt = document.querySelector("#cs-courses");
const ceCoursesOpt = document.querySelector("#ce-courses");

renderCourses();

function renderCourses() {
    const csCourses = courses.filter(c => c.majorId === "1").sort((a, b) => a.courseName.localeCompare(b.courseName))
    const ceCourses = courses.filter(c => c.majorId === "2").sort((a, b) => a.courseName.localeCompare(b.courseName))
    
    csCoursesOpt.innerHTML = csCourses.map(c => courseOptionsToHTML(c)).join('\n');
    ceCoursesOpt.innerHTML = ceCourses.map(c => courseOptionsToHTML(c)).join('\n');
}   

function courseOptionsToHTML(c) {
    return `<option label="${c.courseName}" value="${c.id}"></option>`;
}


form.addEventListener('submit', handleAddCourse);

function handleAddCourse(e) {

}