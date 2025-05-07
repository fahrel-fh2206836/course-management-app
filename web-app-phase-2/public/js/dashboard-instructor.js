// Set localstorage.currentpage
localStorage.currentPage = "dashboard";
const baseUrl = '/api/'

const user = JSON.parse(localStorage.getItem("loggedInUser"));

const nameSpan = document.querySelector("#name");
const teachingList = document.querySelector(".course-card-list");
const activeclass = document.querySelector("#Activeclass");
const totalStud = document.querySelector("#totalStud")
const numberOfClasses = document.querySelector("#Noclasses");

nameSpan.innerText = `${user.firstName} ${user.lastName}`;

async function loadInstructorSecs() {
    const responseSem = await fetch(`${baseUrl}semester`);
    const semesters = await responseSem.json();

    const ongoingSem = semesters[semesters.length-2].semester;
    const responseOngoing = await fetch(`${baseUrl}section?instructorId=${user.userId}&semester=${ongoingSem}&notSem=false`);
    const ongoingSecs = await responseOngoing.json();
    activeclass.innerHTML = ongoingSecs.length;

    const responseNonOngoing = await fetch(`${baseUrl}section?instructorId=${user.userId}&semester=${ongoingSem}&notSem=true`);
    const nonOngoingSecs = await responseNonOngoing.json();
    numberOfClasses.innerHTML = `${ongoingSecs.length + nonOngoingSecs.length}`;

    const responseNumStudent = await fetch(`${baseUrl}isntructor/${user.userId}/total-student?semester=${ongoingSem}`);
    const numStudent = await responseNumStudent.json();
    totalStud.innerHTML = `${numStudent._sum.currentSeats}`;
    renderActiveCourses([...nonOngoingSecs, ...ongoingSecs])
    renderSemesterDropdown(semesters, ongoingSem);
}


async function dataLoaderApi() {
    loadInstructorSecs();
}

dataLoaderApi()

function renderActiveCourses(instructorSections){
    let ongoingHTML = '';
    let notOngoingHTML = '';
    if(instructorSections.length === 0) {
        teachingList.innerHTML = `<div class="empty-section">
                                    <i class='bx bxs-error-circle'></i>
                                    <p>No Courses found.</p>
                                 </div>
                                `;
                                return;
    }
    instructorSections.forEach(section => {
        const cardHTML = generateCourseListHTML(section, section.course)+'\n';
        if (section.sectionStatus === 'ONGOING') {
            ongoingHTML += cardHTML;
          } else if (section.sectionStatus === 'OPEN_REGISTRATION' || section.sectionStatus === 'COMPLETED') {
            notOngoingHTML += cardHTML;
          }
        })
        teachingList.innerHTML = `
            <h3>Ongoing Courses</h3>
            <div class="card-group">${ongoingHTML || `<div class="empty-section"><i class='bx bxs-error-circle'></i><p>No Ongoing Courses found.</p> </div>`}</div>
            
            <div class="pFcourses">
                <h3>Previous/Future Courses</h3>
                <div class="section-filters">
                    <div class="semester-filter">
                        <select id="semester-filter" name="semester">
                            <!-- Added thru js -->
                        </select>
                    </div>
                </div>
            </div>
            <div class="pFcard-group">${notOngoingHTML || `<div class="empty-section"><i class='bx bxs-error-circle'></i><p>No Previous/Future Courses found.</p> </div>`}</div>
        `;
}

function generateCourseListHTML(s, c) {
    return `
            <div class="course-card hover-underline" onclick="goToGradeAllocation('${s.sectionId}')">
                <div class="card-seats position-corner-top-left">
                    <i class='bx bxs-group'></i>
                    <p>${s.currentSeats}/${s.totalSeats}</p>
                </div>
                <div class="card-flag"><p>${c.courseCode}</p></div>
                <div class="card-course-name"><p>${c.courseName}</p></div>
                <div class="card-course-section-location"><p>Section ID: ${s.sectionId}</p><p>Class Location: ${s.location !== '' ? s.location : 'None'}</p></div>
                <hr>
                <div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${s.semester}</p><p><i class='bx bx-calendar-week'></i>${s.days !== '' ? s.days : 'None'}</p><p><i class='bx bx-time'></i>${s.time !== '' ? s.time : 'None'}</p></div>
            </div>`;
}

async function goToGradeAllocation(sectionId) {
    const s = await fetch(`${baseUrl}section/${sectionId}`)
    localStorage.selectedCourse = JSON.stringify(s);
    window.location.href='grade-allocation.html';
}


function renderSemesterDropdown(semesters, ongoingSem) {
    const semesterDropdown = document.querySelector('#semester-filter');
    semesterDropdown.innerHTML = convertSemesterOptionHTML(semesters, ongoingSem);
}

function convertSemesterOptionHTML(semesters, ongoingSem) {
    let relevantsemesters = semesters.filter(s => s !== ongoingSem);
    return `<option value="All" selected>All Semester</option>
            $.map(s => ${relevantsemesters.map(s => `<option value="${s.semester}">${s.semester}</option>`).join('\n')}`;
}

const pFcardGroup = document.querySelector(".pFcard-group");
const semFilter = document.querySelector("#semester-filter");
semFilter.addEventListener('change', handleFilter);

function handleFilter(e){
    let selectedSections;
    if(semFilter.value !== "All") {
        selectedSections = instructorSections.filter(s => s.semester === semFilter.value);
    }else{
        selectedSections = instructorSections.filter(s => s.sectionStatus !== "ONGOING");
    }
    
    pFcardGroup.innerHTML = '';
    if(selectedSections.length >= 1){
        selectedSections.forEach(section => {
            let course = courses.find(c => c.id === section.courseId);
            pFcardGroup.innerHTML += generateCourseListHTML(section,course);
        })
    }else{
        pFcardGroup.innerHTML = `<div class="empty-section"><i class='bx bxs-error-circle'></i><p>No Courses found.</p> </div>`;
    }
}