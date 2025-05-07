// Set localstorage.currentpage
localStorage.currentPage = "dashboard";
baseUrl = '/api/'

const courseListGeneral = document.querySelector("#course-list-general");
const statusDropdown = document.querySelector('#status');

if (window.matchMedia("(max-width: 1023px)").matches) {
    onSmallScreen();
} else {    
    onBigScreen();
}

window.addEventListener('resize', function(event) {
    if (window.matchMedia("(max-width: 1023px)").matches) {
        onSmallScreen();
    } else {    
        onBigScreen();
    }
    resetMajorDropdown();
})

function mapCoursesToHTML(cl) {
    return cl.map(c => generateCoursesHTML(c)).join('\n');
}

function generateCoursesHTML(c) {
    return `<div class="course-card">
                <div class="manage-class-btn" onclick="manageCourse('${c.id}')"><i class='bx bxs-cog'></i><p>Manage Course</p></div>
                <div class="card-flag"><p>${c.courseCode}</p></div>
                <div class="card-course-name"><p>Course ID: ${c.id}</p></div>
                <div class="card-course-name"><p>Course ID: ${c.courseName}</p></div>
            </div>`;
}

async function manageCourse(id) {
    const response = await fetch(`${baseUrl}course/${id}`);
    localStorage.selectedCourse = JSON.stringify(await response.json());
    window.location.href = "../view-admin/manage-course.html";
}

async function filterOngoing() {
    const response = await fetch(`${baseUrl}course?course-status=ongoing`);
    return await response.json();
}

async function filterRegistration() {
    const response = await fetch(`${baseUrl}course?course-status=registration`);
    return await response.json();
}

async function filterNotOffered() {
    const response = await fetch(`${baseUrl}course?course-status=notOffered`);
    return await response.json();
}

async function onMajorChange(e, s) {
    let courseListHTML;
    let status = window.matchMedia("(max-width: 1023px)").matches ? statusDropdown.value : s;
    let majorId = e.target.value;

    if(majorId !== "all") {
        const response = await fetch(`${baseUrl}course?majorId=${majorId}&course-status=${status}`)
        courseListHTML = mapCoursesToHTML(await response.json());
    } else {     
        const response = await fetch(`${baseUrl}course?course-status=${status}`)
        courseListHTML = mapCoursesToHTML(await response.json());   
    }

    if(window.matchMedia("(max-width: 1023px)").matches) {
        courseListGeneral.innerHTML = courseListHTML;
    }else if (status === "ongoing"){
        document.querySelector("#course-list-ongoing").innerHTML = courseListHTML;
    } else if(status === "registration") {
        document.querySelector("#course-list-registration").innerHTML = courseListHTML;
    } else if(status === "not-offered") {
        document.querySelector("#course-list-not-offered").innerHTML = courseListHTML;
    }
}

async function onSmallScreen() {
    const statusIcon = document.querySelector("#status-icon");
    const cStatusIcon = document.querySelector("#c-status-icon");
    const cStatusText = document.querySelector("#c-status-text");
    const majorDropDown = document.querySelector("#major");
    
    statusDropdown.addEventListener('change', onStatusChange);

    courseListGeneral.innerHTML = mapCoursesToHTML(await filterOngoing());

    async function onStatusChange(e) {
        if(e.target.value === "ongoing") {
            statusIcon.classList.remove(...statusIcon.classList);
            cStatusIcon.classList.remove(cStatusIcon.classList[2]);
            cStatusText.classList.remove(...cStatusText.classList);
            statusIcon.classList.add("bx", "bxs-hourglass-top", "icon-circle", "ongoing");
            cStatusIcon.classList.add("ongoing")
            cStatusText.classList.add("ongoing");
            cStatusText.innerText = "Ongoing Courses";

            courseListGeneral.innerHTML = mapCoursesToHTML(await filterOngoing());

        } else if (e.target.value === "registration") {
            statusIcon.classList.remove(...statusIcon.classList);
            cStatusIcon.classList.remove(cStatusIcon.classList[2]);            
            cStatusText.classList.remove(...cStatusText.classList);
            statusIcon.classList.add("bx", "bxs-check-circle", "icon-circle","registration");
            cStatusIcon.classList.add("registration")
            cStatusText.classList.add("registration");
            cStatusText.innerText = "Open Courses";

            courseListGeneral.innerHTML = mapCoursesToHTML(await filterRegistration());

        } else {
            statusIcon.classList.remove(...statusIcon.classList);
            cStatusIcon.classList.remove(cStatusIcon.classList[2]);
            cStatusText.classList.remove(...cStatusText.classList);
            statusIcon.classList.add("bx", "bxs-x-circle", "icon-circle", "not-offered");
            cStatusIcon.classList.add("not-offered")
            cStatusText.classList.add("not-offered");
            cStatusText.innerText = "Not Offered Courses";

            courseListGeneral.innerHTML = mapCoursesToHTML(await filterNotOffered());

        }

        majorDropDown.selectedIndex = 0;
    }
}

async function onBigScreen() {
    const courseReg = document.querySelector("#course-list-registration");
    const courseNotOffered = document.querySelector("#course-list-not-offered");
    const courseOngoing = document.querySelector("#course-list-ongoing");

    
    courseOngoing.innerHTML = mapCoursesToHTML(await filterOngoing());
    courseReg.innerHTML = mapCoursesToHTML(await filterRegistration());
    courseNotOffered.innerHTML = mapCoursesToHTML(await filterNotOffered());
}

async function renderTable() {
    const responseSem = await fetch(`${baseUrl}semester`);
    const semesters = await responseSem.json();
    const ongoingSem = semesters[semesters.length-2].semester;

    const responseOngoing = await fetch(`${baseUrl}section?semester=${ongoingSem}&notSem=false`);
    const ongoingSections = await responseOngoing.json();

    
    const tBody = document.querySelector("#schedule-table").querySelector("tbody");
    tBody.innerHTML = ongoingSections.map(s => convertRowToHTML(s)).join("\n");
}

function convertRowToHTML(s) {
    const c = s.course
    let tempI = s.instructor.user
    const i = tempI ? tempI : '';
    const days = s.days.split("-");
    return `<tr>
                <td>${c.courseCode}</td>
                <td>${c.courseName}</td>
                <td>${s.sectionId}</td>
                <td>${i ? i.firstName : ''} ${i ? i.lastName : ''}</td>
                <td>
                    <div class="week-days">
                        <div class="day ${days.includes("SUN") ? 'selected' : ''}">S</div>
                        <div class="day ${days.includes("MON") ? 'selected' : ''}">M</div>
                        <div class="day ${days.includes("TUE") ? 'selected' : ''}">T</div>
                        <div class="day ${days.includes("WED") ? 'selected' : ''}">W</div>
                        <div class="day ${days.includes("THU") ? 'selected' : ''}">T</div>
                        <div class="day ${days.includes("FRI") ? 'selected' : ''}">F</div>
                        <div class="day ${days.includes("SAT") ? 'selected' : ''}">S</div>
                    </div>
                </td>
                <td>${s.time}</td>   
                <td>${s.location}</td>
            </tr>`;
}

async function renderMajorDropdown() {
    const majorDropdowns = document.querySelectorAll('#major, #major-ongoing, #major-reg, #major-not');
    majorDropdowns.forEach(async (m) => m.innerHTML = await convertMajorOptionHTML());
}

async function convertMajorOptionHTML() {
    const response = await fetch(`${baseUrl}major`) 
    const majors = await response.json();
    return `<option value="all" selected>All Majors</option>
            ${majors.map(m => `<option value="${m.majorId}">${m.majorName}</option>`).join('\n')}`
}

function resetMajorDropdown() {
    const majorDropdowns = document.querySelectorAll('#major, #major-ongoing, #major-reg, #major-not');
    majorDropdowns.forEach(m => m.value = "all");

    const statusIcon = document.querySelector("#status-icon");
    const cStatusIcon = document.querySelector("#c-status-icon");
    const cStatusText = document.querySelector("#c-status-text");
    const majorDropDown = document.querySelector("#major");
    statusDropdown.value = "ongoing"
    statusIcon.classList.remove(...statusIcon.classList);
    cStatusIcon.classList.remove(cStatusIcon.classList[2]);
    cStatusText.classList.remove(...cStatusText.classList);
    statusIcon.classList.add("bx", "bxs-hourglass-top", "icon-circle", "ongoing");
    cStatusIcon.classList.add("ongoing")
    cStatusText.classList.add("ongoing");
    cStatusText.innerText = "Ongoing Courses";
}

renderMajorDropdown();
renderTable();
