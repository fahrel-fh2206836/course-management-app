//Local Storages
const sections = JSON.parse(localStorage.sections);
const courses = JSON.parse(localStorage.courses);
const users = JSON.parse(localStorage.users);
const currentSem = localStorage.currentSem;

const form = document.querySelector("#add-section-form");
const h2 = document.querySelector(".form-container").querySelector("h2");
const courseSelect = document.querySelector("#section-course");
const instructorSelect = document.querySelector("#section-instructor");

h2.innerText = `Add New Section (${currentSem})`;

function renderCourses() {
    courseSelect.innerHTML = `<option label="Select Course" value="" selected disabled></option>
                             ${courses.map(c => `<option label="${c.courseName}" value="${c.id}"></option>`)};`
}

function renderInstructor() {
    const instructors = users.filter(u => u.role === "Instructor");
    instructorSelect.innerHTML = `<option label="Select Instructor" value="" selected disabled></option>
                        ${instructors.map(i =>  `<option label="${i.firstName} ${i.lastName}" value="${i.userId}"></option>`)}`
}

renderCourses();
renderInstructor();

// form.addEventListener('submit', handleAddSection);

// function handleAddSection(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const section = Object.fromEntries(formData);
//     if(section.totalSeats <= 0) {
//         alert("CREDIT HOUR SHOULD BE A POSITIVE INTEGER! (CH>0)");
//         return;
//     }
//     //Check if the course already exist.
//     section.id = (sections.length + 25).toString();
//     section.prerequisitesCoursesId = Array.from(prerequisitesDropdown.selectedOptions).map(option => option.value);
//     courses.push(course);
//     localStorage.courses = JSON.stringify(courses);
//     form.reset();

//     //Will change to snack bar.
//     alert(`${course.courseCode} is Added to the System.`);
// }