const user = JSON.parse(localStorage.getItem("loggedInUser"));
const majors = JSON.parse(localStorage.majors);
const registrations = JSON.parse(localStorage.registrations);
const sections = JSON.parse(localStorage.sections);
const courses = JSON.parse(localStorage.courses);
const users = JSON.parse(localStorage.users);

const nameSpan = document.querySelector("#name");
const teachingList = document.querySelector(".course-card-list");

nameSpan.innerText = `${user.firstName} ${user.lastName}`;
const instructorSections = sections.filter(section => section.instructorId === user.userId);


function renderActiveCourses(){
    let html = ``;
    if(instructorSections.length === 0) {
        html = `<div class="empty-section">
                                    <i class='bx bxs-error-circle'></i>
                                    <p>No Active Courses.</p>
                                 </div>
                                `;
    } else {
        instructorSections.forEach(instSec => {
            let section = sections.find(s => instSec.sectionId === s.sectionId); 
            let course = courses.find(c => c.id === section.courseId);
            let NoStud = registrations.filter(r => r.sectionId === section.sectionId).length;;
            html+=generateCourseListHTML(section, course, NoStud)+'\n';
        })
    }
    console.log(html); 
    teachingList.innerHTML = html;
}

function generateCourseListHTML(s, c, n) {
    return `
            <div class="course-card hover-underline" onclick="location.href='grade-allocation.html'">
                <div class="card-flag"><p>${c.courseCode}</p></div>
                <div class="card-course-name"><p>${c.courseName}</p></div>
                <div class="card-course-instructor"><p>Student Number:</p><p>${n}</p></div>
                <div class="card-course-section-location"><p>Section ID: ${s.sectionId}</p><p>Class Location: ${s.location !== '' ? s.location : 'None'}</p></div>
                <hr>
<div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${s.semester}</p><p><i class='bx bx-calendar-week'></i>${s.schedule.days !== '' ? s.schedule.days : 'None'}</p><p><i class='bx bx-time'></i>${s.schedule.time !== '' ? s.schedule.time : 'None'}</p></div>
            </div>         
        `
}

renderActiveCourses()
