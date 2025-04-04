const user = JSON.parse(localStorage.getItem("loggedInUser"));
const majors = JSON.parse(localStorage.majors);
const registrations = JSON.parse(localStorage.registrations);
const sections = JSON.parse(localStorage.sections);
const courses = JSON.parse(localStorage.courses);
const users = JSON.parse(localStorage.users);

const nameSpan = document.querySelector("#name");
const numberOfClasses = document.querySelector("#NoClasses")
const teachingList = document.querySelector(".course-card-list");
const instructorSections = sections.filter(section => section.instructorId === user.userId);

nameSpan.innerText = `${user.firstName} ${user.lastName}`;



function renderActiveCourses(){
    let ongoingHTML = '';
    let futureHTML = '';
    let pastHTML = '';
    if(instructorSections.length === 0) {
        html = `<div class="empty-section">
                                    <i class='bx bxs-error-circle'></i>
                                    <p>No Courses found.</p>
                                 </div>
                                `;
                                return;
    }
    instructorSections.forEach(instSec => {
        let section = sections.find(s => instSec.sectionId === s.sectionId); 
        let course = courses.find(c => c.id === section.courseId);
        let NoStud = registrations.filter(r => r.sectionId === section.sectionId).length;;
        const cardHTML = generateCourseListHTML(section, course, NoStud)+'\n';
        if (section.sectionStatus === 'ONGOING') {
            ongoingHTML += cardHTML;
          } else if (section.sectionStatus === 'OPEN_REGISTRATION') {
            futureHTML += cardHTML;
          } else if (section.sectionStatus === 'COMPLETED') {
            pastHTML += cardHTML;
          }
        })
        teachingList.innerHTML = `
            <h3>Ongoing Courses</h3>
            <div class="card-group">${ongoingHTML || '<p>No ongoing courses.</p>'}</div>
            
            <h3>Future Courses</h3>
            <div class="card-group">${futureHTML || '<p>No upcoming courses.</p>'}</div>
            
            <h3>Completed Courses</h3>
            <div class="card-group">${pastHTML || '<p>No completed courses.</p>'}</div>
        `;
}

function generateCourseListHTML(s, c, n) {
    return `
            <div class="course-card hover-underline" onclick="location.href='grade-allocation.html'">
                <div class="card-flag"><p>${c.courseCode}</p></div>
                <div class="card-course-name"><p>${c.courseName}</p></div>
                <div class="card-course-instructor"><p>Number of students:</p><p>${n}</p></div>
                <div class="card-course-section-location"><p>Section ID: ${s.sectionId}</p><p>Class Location: ${s.location !== '' ? s.location : 'None'}</p></div>
                <hr>
<div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${s.semester}</p><p><i class='bx bx-calendar-week'></i>${s.schedule.days !== '' ? s.schedule.days : 'None'}</p><p><i class='bx bx-time'></i>${s.schedule.time !== '' ? s.schedule.time : 'None'}</p></div>
            </div>         
        `
}

renderActiveCourses()
