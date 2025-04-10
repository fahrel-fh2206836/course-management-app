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
    const grades = ["", "A", "B", "C", "D", "F"];
    return grades.map(g => 
      `<option value="${g}" ${g === currentGrade ? "selected" : ""}>${g}</option>`
    ).join("");
}

let tempGradeChange = []

document.addEventListener("change", (e) => {
  const studentId = e.target.dataset.studentId;
  let index = tempGradeChange.findIndex(g => g.studentId === studentId);
  if(index == -1) {
    tempGradeChange.push({
      studentId: studentId,
      newGrade: e.target.value,
      sectionId: selectedSection.sectionId
    })
  } else {
    tempGradeChange[index].newGrade = e.target.value;
  }
});

function cancelFunction(){
  searchInput.value = "";
  renderStudents("");
}

function saveFunction() {
  for (temp of tempGradeChange) {
  
    // Update registration local storage
    let regIndex = registrations.findIndex(r => r.studentId === temp.studentId && r.sectionId === temp.sectionId);
    registrations[regIndex].grade = temp.newGrade;
    localStorage.registrations = JSON.stringify(registrations);


    let userIndex = users.findIndex(u => u.userId === temp.studentId);
    console.log(userIndex);
    // Updating Finsihed Credit Hour of User
    let courseId = sections.find(s => s.sectionId === temp.sectionId).courseId;
    let courseCh = courses.find(c => c.id === courseId).creditHour;
    users[userIndex].finishedCreditHour+=courseCh;


    // Update GPA of User
    let regsOfUser = registrations.filter(r => r.studentId === temp.studentId && r.grade!="");
    users[userIndex].gpa = calculateGPA(regsOfUser, users[userIndex].finishedCreditHour);

    localStorage.users = JSON.stringify(users);
  }
  showNotification();
}

function calculateGPA(regsOfUser, finishedCreditHour) {
    let gpa = 0.0;
    for (r of regsOfUser) {
      let courseCh = courses.find(c => c.id === r.courseId).creditHour;
      if(r.grade === "A") {
        gpa+=courseCh*4; 
      } else if (r.grade === "B") {
        gpa+=courseCh*3;
      } else if (r.grade === "C") {
        gpa+=courseCh*2;
      } else if (r.grade === "D") {
        gpa+=courseCh*1;
      }
      else if (r.grade === "F") {
        gpa+=courseCh*0;
      }
    }
    return parseFloat((gpa/finishedCreditHour).toFixed(2));
}



function showNotification() {
  notif.classList.add("show");

  setTimeout(() => {
      notif.classList.remove("show");
  }, 3000);
}


console.log(users);
