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
    if (e.target.classList.contains("grade-dropdown")) {
      const studentId = e.target.dataset.studentId;
      const newGrade = e.target.value;
      const registration = registrations.find(r => 
        r.studentId === studentId && r.sectionId === selectedSection.sectionId
      );
      localStorage.setItem("reg",JSON.stringify(registration));
      localStorage.setItem("newGrade",JSON.stringify(newGrade));
    }
});

function cancelFunction(){
  localStorage.removeItem('reg');
  localStorage.removeItem('newGrade');
  window.location.href = 'dashboard-instructor.html';

}

function saveFunction(){
  const reg = JSON.parse(localStorage.getItem('reg'));
  const newGrade = JSON.parse(localStorage.getItem('newGrade'));
  if (reg) {
    const index = registrations.findIndex(r =>
      r.studentId === reg.studentId && r.sectionId === reg.sectionId
    );
  if(index !== -1){
    registrations[index].grade = newGrade;
    localStorage.setItem("registrations", JSON.stringify(registrations));
  }
  }
  // alert("Grade saved successfully!");

  localStorage.removeItem('reg');
  localStorage.removeItem('newGrade');
  showNotification();
}

function showNotification() {
  notif.classList.add("show");

  setTimeout(() => {
      notif.classList.remove("show");
  }, 2500);
}