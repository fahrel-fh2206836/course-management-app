// Set localstorage.currentpage
localStorage.currentPage = "addSection";
baseUrl = '/api/'

const form = document.querySelector("#add-section-form");
const h2 = document.querySelector(".form-container").querySelector("h2");
const courseSelect = document.querySelector("#section-course");
const instructorSelect = document.querySelector("#section-instructor");

async function loadRegistrationSem() {
    const regSems = await (await fetch(`${baseUrl}semester`)).json();
    const regSem = regSems[regSems.length-1].semester
    h2.innerText = `Add New Section (${regSem})`;
}


async function renderRegistrationCourses() {
    const ongoingCourses = await (await fetch(`${baseUrl}course?course-status=registration`)).json();
    courseSelect.innerHTML = `<option label="Select Course" value="" selected disabled></option>
                             ${ongoingCourses.map(c => `<option label="${c.courseName}" value="${c.id}"></option>`)};`
}

async function renderInstructor() {
    const instructors = await (await fetch(`${baseUrl}instructor`)).json();
    instructorSelect.innerHTML = `<option label="Select Instructor" value="" selected disabled></option>
                        ${instructors.map(i =>  `<option label="${i.firstName} ${i.lastName}" value="${i.userId}"></option>`)}`
}

loadRegistrationSem();
renderRegistrationCourses();
renderInstructor();

form.addEventListener('submit', handleAddSection);

async function handleAddSection(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const section = Object.fromEntries(formData);
    section.totalSeats = parseInt(section.totalSeats);
    if(section.totalSeats <= 0) {
        showNotification("negative-seats-notif");
        return;
    }

    let checkedDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(chbox => chbox.value).join('-');
    
    let time = [section.startTime, section.endTime].join('-');
    section.days = checkedDays;
    section.time = time;

    delete section.endTime;
    delete section.startTime;

    // Add Section
    await fetch("/api/section", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(section)
    })

    form.reset();

    document.querySelector("#added-notif").innerText = `✅ Section is Added to the System.`;
    showNotification("added-notif");
}

function showNotification(elementId) {
    document.querySelector(`#${elementId}`).classList.add("show");

    setTimeout(() => {
        document.querySelector(`#${elementId}`).classList.remove("show");
    }, 3000);
}