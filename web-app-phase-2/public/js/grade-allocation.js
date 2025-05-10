// Set localstorage.currentpage
localStorage.currentPage = "gradeAllocation";

const user = JSON.parse(localStorage.getItem("loggedInUser"));
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

courseSpan.innerHTML = `${selectedSection.course.courseName}`;
sectionID.innerHTML = `${selectedSection.sectionId}`;
NoOfStudents.innerHTML = `${selectedSection.currentSeats}`;
semester.innerHTML = `${selectedSection.semester}`;

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

async function renderStudents(filter) {
  tbody.innerHTML = "";
  let data = selectedSection.registrations;
  if(filter !== "") {
    const res = await fetch(`/api/section/${selectedSection.sectionId}?search=${encodeURIComponent(filter)}`);
    data = await res.json();
  }

  if (!data || data.length === 0) {
    tbody.innerHTML = "<tr><td colspan='3'>No students found</td></tr>";
    return;
  }

  const rows = data.map(r => {
    const student = r.student.user;
    return `
      <tr>
        <td>${student.userId}</td>
        <td>${student.firstName} ${student.lastName}</td>
        <td>
          <select data-student-id="${student.userId}" class="grade-dropdown">
            ${renderGradeOptions(r.grade)}
          </select>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = rows.join("");
}

function renderGradeOptions(currentGrade) {
    const grades = ["", "A", "B", "C", "D", "F"];
    return grades.map(g => 
      `<option value="${g === "" ? 'None' : g}" ${g === currentGrade ? "selected" : ""}>${g}</option>`
    ).join("");
}

let tempGradeChange = []

document.addEventListener("change", (e) => {
  const studentId = e.target.dataset.studentId;
  let index = tempGradeChange.findIndex(g => g.studentId === studentId);
  if(index == -1) {
    tempGradeChange.push({
      studentId: studentId,
      newGrade: e.target.value === "None" ? "" : e.target.value,
      sectionId: selectedSection.sectionId
    })
  } else {
    tempGradeChange[index].newGrade = e.target.value === "None" ? "" : e.target.value;
  }
});

function cancelFunction(){
  tempGradeChange = [];
  searchInput.value = "";
  renderStudents("");
}

function saveFunction() {
  for (temp of tempGradeChange) {
  
    // Update registration local storage
    let regIndex = registrations.findIndex(r => r.studentId === temp.studentId && r.sectionId === temp.sectionId);
    let oldGrade = registrations[regIndex].grade;
    registrations[regIndex].grade = temp.newGrade;
    localStorage.registrations = JSON.stringify(registrations);


    let userIndex = users.findIndex(u => u.userId === temp.studentId);
    // Updating Finsihed Credit Hour of User
    let courseId = sections.find(s => s.sectionId === temp.sectionId).courseId;
    let courseCh = courses.find(c => c.id === courseId).creditHour;

    if(temp.newGrade === "F" || temp.newGrade === "") {
      if(["A", "B", "C", "D"].includes(oldGrade)) {
        users[userIndex].finishedCreditHour-=courseCh;
      }
    } else {
      users[userIndex].finishedCreditHour+=courseCh;
    }
    
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
    }
    return parseFloat((gpa/finishedCreditHour).toFixed(2));
}

function showNotification() {
  notif.classList.add("show");

  setTimeout(() => {
      notif.classList.remove("show");
  }, 3000);
}