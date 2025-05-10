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
  const query = searchInput.value.toLowerCase();
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

tbody.addEventListener("change", (e) => {
  if (e.target.classList.contains("grade-dropdown")) {
    const studentId = e.target.dataset.studentId;
    let index = tempGradeChange.findIndex(g => g.studentId === studentId);
    if(index === -1) {
      tempGradeChange.push({
        studentId: studentId,
        newGrade: e.target.value === "None" ? "" : e.target.value,
        sectionId: selectedSection.sectionId
      });
    } else {
      tempGradeChange[index].newGrade = e.target.value === "None" ? "" : e.target.value;
    }
  }
});

function cancelFunction(){
  tempGradeChange = [];
  renderStudents(searchInput.value);
}

async function saveFunction() {
  for (temp of tempGradeChange) {
    const reg = await (await fetch(`/api/registration?studentId=${temp.studentId}&sectionId=${temp.sectionId}`)).json();
    let oldGrade = reg.grade;
    reg.grade = temp.newGrade;

    // Update registration
    await fetch(`/api/registration/${reg.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg)
    })

    const user = reg.student;
    const courseCh = selectedSection.course.creditHour;
    // Updating Finsihed Credit Hour of User
    if(temp.newGrade === "F" || temp.newGrade === "") {
      if(["A", "B", "C", "D"].includes(oldGrade)) {
        user.finishedCreditHour-=courseCh;
      }
    } else {
      user.finishedCreditHour+=courseCh;
    }
    
    // Update GPA of User
    let regsOfUser = await (await fetch(`/api/student/${temp.studentId}/completed-courses`)).json();
    user.gpa = calculateGPA(regsOfUser, user.finishedCreditHour);

    // Update Student
    await fetch(`/api/student/${temp.studentId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
  }
  showNotification();
}

function calculateGPA(regsOfUser, finishedCreditHour) {
    let gpa = 0.0;
    for (r of regsOfUser) {
      let courseCh = r.section.course.creditHour;
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