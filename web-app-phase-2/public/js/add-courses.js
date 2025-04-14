// Set localstorage.currentpage
localStorage.currentPage = "addCourses";

//Local Storages
const courses = JSON.parse(localStorage.courses);
const majors = JSON.parse(localStorage.majors);

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
    course.creditHour = parseInt(course.creditHour);
    if(course.creditHour <= 0) {
        showNotification("negative-seats-notif");
        return;
    }

    //Check if the course already exist.
    if(courses.map(c => c.courseCode.toLowerCase().replace(/\s+/g, '')).includes(course.courseCode.toLowerCase().replace(/\s+/g, ''))) {
        showNotification("exist-notif");
        return;
    }

    course.id = (courses.length + 100).toString();
    course.prerequisitesCoursesId = Array.from(prerequisitesDropdown.selectedOptions).map(option => option.value);
    course.isOngoing = course.isOngoing === "on" ? true : false;
    course.isRegistration = course.isRegistration === "on" ? true : false;

    let includeBoth = course.bothMajorProgram === "on" ? true : false;
    delete course.bothMajorProgram;

    courses.push(course);
    localStorage.courses = JSON.stringify(courses);

    let index = majors.findIndex(m => m.majorId === course.majorId);
    majors[index].allCourses.push(course.id);
    majors[index].totalCreditHour+=parseInt(course.creditHour);

    if(includeBoth) {
        let otherMajorIndex = +!index;
        majors[otherMajorIndex].allCourses.push(course.id);
        majors[otherMajorIndex].totalCreditHour+=parseInt(course.creditHour);
    }

    localStorage.majors = JSON.stringify(majors);

    form.reset();

    document.querySelector('#added-notif').innerText = `✅ ${course.courseCode} is Added to the System.`;
    showNotification("added-notif");
}

function renderMajorDropdown() {
    const majorDropdown = document.querySelector('#major')
    majorDropdown.innerHTML = `<option value="" selected disabled>Select Major</option>
                                ${majors.map(m => `<option value="${m.majorId}">${m.majorName} (${m.majorCode})</option>`).join('\n')}`;
}

renderMajorDropdown();

function showNotification(elementId) {
    document.querySelector(`#${elementId}`).classList.add("show");

    setTimeout(() => {
        document.querySelector(`#${elementId}`).classList.remove("show");
    }, 3000);
}