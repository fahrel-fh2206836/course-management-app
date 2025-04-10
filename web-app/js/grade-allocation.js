// Set localstorage.currentpage
localStorage.currentPage = "gradeAllocation";

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
const main = document.querySelector(".searchStud");
const searchInput = document.getElementById("search-input");
const tbody = document.querySelector("tbody");
const notif = document.getElementById("save-notification");

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

renderStudents("");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  renderStudents(query);
});

function renderStudents(filter){
    tbody.innerHTML = "";
    const sectionId = selectedSection.sectionId;
    const studentRows = registrations
        .filter(r => r.sectionId === sectionId)
        .map(r => {
            const student = users.find(u => u.userId === r.studentId);
            if (!student) return null;
            const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
            const matches = student.userId.toLowerCase().includes(filter) || fullName.includes(filter);
            if (!filter || matches) {
                return `
                  <tr>
                    <td>${student.userId}</td>
                    <td>${student.firstName} ${student.lastName}</td>
                    <td><select data-student-id="${student.userId}" class="grade-dropdown">
                        ${renderGradeOptions(r.grade)}
                    </td>
                  </tr>
                `;
              }
        
              return null;
            });     
        tbody.innerHTML = studentRows.join("") || "<tr><td colspan='3'>No students found</td></tr>";
}

function renderGradeOptions(currentGrade) {
    const grades = ["A", "B+", "B-", "C+", "C-", "D+", "D-", "E", "F"];
    return grades.map(g => 
      `<option value="${g}" ${g === currentGrade ? "selected" : ""}>${g}</option>`
    ).join("");
  }

document.addEventListener("change", (e) => {
    let registrationArray=JSON.parse(localStorage.getItem("reg"))
    if(!registrationArray){
        registrationArray = [];
    }
    if (e.target.classList.contains("grade-dropdown")) {
      const studentId = e.target.dataset.studentId;
      const newGrade = e.target.value;
      registrationArray.push({
        studentId: studentId,
        sectionId: selectedSection.sectionId,
        grade: newGrade
      });
      localStorage.setItem("reg",JSON.stringify(registrationArray));
    }
});

function cancelFunction(){
  localStorage.removeItem('reg');
  localStorage.removeItem('newGrade');
  window.location.href = 'dashboard-instructor.html';

}

function saveFunction() {
  const registrationArray = JSON.parse(localStorage.getItem('reg'));
  if (registrationArray) {
    registrationArray.forEach(change => {
      const index = registrations.findIndex(r =>
        r.studentId === change.studentId && r.sectionId === change.sectionId
      );
      if (index !== -1) {
        registrations[index].grade = change.grade;
      }
    });
    localStorage.setItem("registrations", JSON.stringify(registrations));
    localStorage.removeItem("reg");
    showNotification();
  }
}


function showNotification() {
  notif.classList.add("show");

  setTimeout(() => {
      notif.classList.remove("show");
  }, 2500);
}