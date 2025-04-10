// Set localstorage.currentpage
localStorage.currentPage = "addSection";

//Local Storages
const sections = JSON.parse(localStorage.sections);
const courses = JSON.parse(localStorage.courses);
const users = JSON.parse(localStorage.users);
const semesters = JSON.parse(localStorage.semesters);
const currentSem = semesters[semesters.length-1];

const form = document.querySelector("#add-section-form");
const h2 = document.querySelector(".form-container").querySelector("h2");
const courseSelect = document.querySelector("#section-course");
const instructorSelect = document.querySelector("#section-instructor");

h2.innerText = `Add New Section (${currentSem})`;

function renderCourses() {
    courseSelect.innerHTML = `<option label="Select Course" value="" selected disabled></option>
                             ${courses.filter(c => c.isRegistration === true).sort((a, b) => a.courseName.localeCompare(b.courseName)).map(c => `<option label="${c.courseName}" value="${c.id}"></option>`)};`
}

function renderInstructor() {
    const instructors = users.filter(u => u.role === "Instructor");
    instructorSelect.innerHTML = `<option label="Select Instructor" value="" selected disabled></option>
                        ${instructors.sort((a, b) => a.firstName.localeCompare(b.firstName)).map(i =>  `<option label="${i.firstName} ${i.lastName}" value="${i.userId}"></option>`)}`
}

renderCourses();
renderInstructor();

form.addEventListener('submit', handleAddSection);

function handleAddSection(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const section = Object.fromEntries(formData);
    if(section.totalSeats <= 0) {
        alert("⚠️ TOTAL SEATS SHOULD BE A POSITIVE INTEGER! (CH>0)");
        return;
    }

    section.totalSeats = parseInt(section.totalSeats);
    section.sectionId = (sections.length + 25).toString();
    section.currentSeats = 0;
    section.semester = currentSem;
    section.approvalStatus = "PENDING";
    section.sectionStatus = "OPEN_REGISTRATION";

    let checkedDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(chbox => chbox.value).join('-');
    
    let time = [section.startTime, section.endTime].join('-');
    section.schedule = {
        days: checkedDays,
        time: time,
    }

    delete section.days;
    delete section.endTime;
    delete section.startTime;

    sections.push(section);
    localStorage.sections = JSON.stringify(sections);
    form.reset();

    alert(`✅ Section ID: ${section.sectionId} is Added to the System.`);
}