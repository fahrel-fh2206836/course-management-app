const user = JSON.parse(localStorage.getItem("loggedInUser"));
const registrations = JSON.parse(localStorage.registrations);
const sections = JSON.parse(localStorage.sections);
const courses = JSON.parse(localStorage.courses);
const users = JSON.parse(localStorage.users);
const selectedSection = JSON.parse(localStorage.selectedCourse);

const courseSpan = document.querySelector("#stats-major");
const sectionID = document.querySelector("#stats-ID");
const NoOfStudents = document.querySelector("#stats-no-stud");
const semester = document.querySelector("#stats-sem");
const main = document.querySelector("main");

checkForNotOngoingCourse();


courseSpan.innerHTML = `${getCourseName()}`;
sectionID.innerHTML = `${selectedSection.sectionId}`;
NoOfStudents.innerHTML = `${selectedSection.currentSeats}`;
semester.innerHTML = `${selectedSection.semester}`;

function getCourseName(){
    let course = courses.find(c => c.id === selectedSection.courseId);
    return course.courseName;
}

function checkForNotOngoingCourse(){
    if (selectedSection.sectionStatus==="OPEN_REGISTRATION"){
        main.innerHTML='';
        main.innerHTML=`
        <div class="empty-section"><i class='bx bxs-error-circle'></i><p>Course has not yet started.</p> </div>
        `;
    }
}
