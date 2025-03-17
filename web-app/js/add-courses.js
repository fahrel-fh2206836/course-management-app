//Local Storages
const courses = JSON.parse(localStorage.courses);

//Inputs
const form = document.querySelector("#add-courses-form");
const prerequisitesDropdown = document.querySelector("#prerequisites");

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
    e.preventDefault();

    const formData = new FormData(e.target);
    const course = Object.fromEntries(formData);
    if(course.creditHour <= 0) {
        alert("CREDIT HOUR SHOULD BE A POSITIVE INTEGER! (CH>0)");
        return;
    }
    //Check if the course already exist.
    course.id = courses.length + 100;
    course.prerequisitesCoursesId = Array.from(prerequisitesDropdown.selectedOptions).map(option => option.value);
    course.isOngoing = course.isOngoing === "on" ? true : false;
    course.isRegistration = course.isRegistration === "on"? true : false;
    courses.push(course);
    localStorage.courses = JSON.stringify(courses);
    form.reset();

    //Will change to snack bar.
    alert(`${course.courseCode} is Added to the System.`);
}




