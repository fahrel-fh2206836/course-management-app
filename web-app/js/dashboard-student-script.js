const user = JSON.parse(localStorage.getItem("loggedInUser"));
const majors = JSON.parse(localStorage.majors);
const registrations = JSON.parse(localStorage.registrations);
const sections = JSON.parse(localStorage.sections);
const courses = JSON.parse(localStorage.courses);
const users = JSON.parse(localStorage.users);


const nameSpan = document.querySelector("#name");
const majorSpan = document.querySelector("#stats-major");
const cgpaSpan = document.querySelector("#stats-CGPA");
const coursesSpan = document.querySelector("#stats-no-courses");
const completedSpan = document.querySelector("#stats-completed");
const progressBar = document.querySelector("#progress-bar").querySelector("div");
const percentSpan = document.querySelector("#bar-percentage");
const registeredList = document.querySelector("#course-card-list");

const studentMajor = majors.find(m => m.majorId === user.majorId)
const progress = (user.finishedCreditHour/studentMajor.totalCreditHour) * 100;
const registeredSections = registrations.filter(r => r.studentId === user.userId && r.grade === "");

nameSpan.innerText = `${user.firstName} ${user.lastName}`;
majorSpan.innerText = studentMajor.majorName;
cgpaSpan.innerText = user.gpa.toString();
coursesSpan.innerText = registeredSections.length;
completedSpan.innerText = `${user.finishedCreditHour}/${studentMajor.totalCreditHour}`
percentSpan.innerText = `${progress.toFixed(1)}%`
progressBar.style.width = progress + "%";

function renderRegisteredCourses() {
    let html = ``;
    if(registeredSections.length === 0) {
        html = `<div class="empty-section">
                                    <i class='bx bxs-error-circle'></i>
                                    <p>No Registered Section.</p>
                                 </div>
                                `;
    } else {
        registeredSections.forEach(regSec => {
            let section = sections.find(s => regSec.sectionId === s.sectionId); 
            let course = courses.find(c => c.id === section.courseId);
            let instructor = users.find(u => u.userId === section.instructorId);
            html+=generateCourseListHTML(section, course, instructor)+'\n';
        })
    }
    console.log(html); 
    registeredList.innerHTML = html;
}

function generateCourseListHTML(s, c, i) {
    return `
            <div class="course-card">
                <div class="card-flag"><p>${c.courseCode}</p></div>
                <div class="card-course-name"><p>${c.courseName}</p></div>
                <div class="card-course-instructor"><p>Instructor: ${i.firstName} ${i.lastName}</p></div>
                <div class="card-course-section-location"><p>Section ID: ${s.sectionId}</p><p>Class Location: ${s.location !== '' ? s.location : 'None'}</p></div>
                <hr>
                <div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${s.semester}</p><p><i class='bx bx-calendar-week'></i>${s.schedule.days !== '' ? s.schedule.days : 'None'}</p><p><i class='bx bx-time'></i>${s.schedule.time !== '' ? s.schedule.time : 'None'}</p></div>
            </div>        
        `
}

renderRegisteredCourses()




