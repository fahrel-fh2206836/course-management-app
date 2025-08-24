// Set localstorage.currentpage
localStorage.currentPage = "addCourses";
baseUrl = "/api/"

//Inputs
const form = document.querySelector("#add-courses-form");
const prerequisitesDropdown = document.querySelector("#prerequisites");
const prerequisitesOptGroup = document.querySelector("#prerequisites-opt");

async function renderMajorDropdown() {
    const majorDropdown = document.querySelector('#major')
    const response = await fetch(`${baseUrl}major`) 
    const majors = await response.json();
    majorDropdown.innerHTML = `<option value="" selected disabled>Select Major</option>
                                ${majors.map(m => `<option value="${m.majorId}">${m.majorName} (${m.majorCode})</option>`).join('\n')}`;

    majorDropdown.addEventListener('change', renderOngoingCourses);
}

async function renderOngoingCourses(e) {
    const resOpt = await fetch(`${baseUrl}major/${e.target.value}`);
    const optLabel = await resOpt.json();
    prerequisitesOptGroup.label = optLabel.majorName + " Courses";

    const responseCourses = await fetch(`${baseUrl}course?majorId=${e.target.value}`)
    const preCourses = await responseCourses.json();
    prerequisitesOptGroup.innerHTML = preCourses.map(c => courseOptionsToHTML(c)).join('\n');
} 

function courseOptionsToHTML(c) {
    return `<option label="${c.courseName}" value="${c.id}"></option>`;
}

renderMajorDropdown();

form.addEventListener('submit', handleAddCourse);

async function handleAddCourse(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const course = Object.fromEntries(formData);
    course.creditHour = parseInt(course.creditHour);
    if(course.creditHour <= 0) {
        showNotification("negative-seats-notif");
        return;
    }

    const major = await (await fetch(`${baseUrl}major/${course.majorId}`)).json();
    course.courseCode = major.majorCode + course.courseCode;

    //Check if the course already exist.
    const exist = await (await fetch(`${baseUrl}course?code=${course.courseCode}`)).json();
    if(exist) {
        showNotification("exist-notif");
        return;
    }
    course.prerequisitesCoursesId = formData.getAll('prerequisitesCoursesId');

    // Add Course
    await fetch("/api/course", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })


    major.totalCreditHour += course.creditHour;
    // Update Major
    await fetch(`/api/major/${major.majorId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(major)
    })

    form.reset();

    document.querySelector('#added-notif').innerText = `✅ ${course.courseCode} is Added to the System.`;
    showNotification("added-notif");
}

function showNotification(elementId) {
    document.querySelector(`#${elementId}`).classList.add("show");

    setTimeout(() => {
        document.querySelector(`#${elementId}`).classList.remove("show");
    }, 3000);
}


