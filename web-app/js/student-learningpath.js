document.addEventListener("DOMContentLoaded", () => {

    let majors = JSON.parse(localStorage.majors);
    let student = JSON.parse(localStorage.getItem("loggedInUser"));
    let registration = JSON.parse(localStorage.registrations)
    let section = JSON.parse(localStorage.sections)
    let course = JSON.parse(localStorage.courses)
    let completedcourses=0;

    //student details
    if (!student || student.role !== "Student") {
        console.log("User not found or not a student.");
        return;
    }

    let studentMajor = majors.find(m => m.majorId == student.majorId);

    document.querySelector("#name").innerHTML = `${student.firstName} ${student.lastName}`;
    document.querySelector("#stats-major").innerHTML = studentMajor.majorName;
    document.querySelector("#stats-CGPA").innerHTML = student.gpa.toFixed(2);
    document.querySelector("#stats-completed-ch").innerHTML = `${student.finishedCreditHour}/${studentMajor.totalCreditHour}`;
    
    let progress = (student.finishedCreditHour / studentMajor.totalCreditHour) * 100;
    
    document.querySelector("#progress-bar").querySelector("div").style.width = progress + "%";
    document.querySelector("#bar-percentage").innerHTML = `${progress.toFixed(1)}%`;


    //prereq img
    let image = document.querySelector(".img-prerequiste");
    if (studentMajor.majorName === "Computer Science") {
        image.innerHTML = `<img src="../assets/images/flowchart_cs.png" alt="">`; 
    } else if (studentMajor.majorName === "Computer Engineering") {
        image.innerHTML = `<img src="../assets/images/flowchart_ce.png" alt="">`;}



    //completed - pending - inprogress
    let completed = document.querySelector(".status-completed .course-list");
    let pending = document.querySelector(".status-pending .course-list");
    let in_progress = document.querySelector(".status-in_progress .course-list");
    
    if (completed) 
        completed.innerHTML = "";
    if (pending) 
        pending.innerHTML = "";
    if (in_progress) 
        in_progress.innerHTML = "";

    let allCoursesIds = [];
    
    if (studentMajor)
        allCoursesIds = studentMajor.allCourses;
    
    let studentRegistrations = registration.filter(m => m.studentId === student.userId);
    let takenCourseIds = [];
    
    studentRegistrations.forEach(registration => {
        let studentSection = section.find(m => m.sectionId === registration.sectionId);
        let studentCourse = course.find(m => m.id === studentSection?.courseId);
        takenCourseIds.push(studentCourse.id);
    
        if (registration.grade !== "" && registration.grade !== "F" && registration.grade !== "f") {
            completedcourses+=1;
            if (completed) {
                completed.innerHTML += `
                    <div class="scrolling">
                        <div class="course-card">
                            <div class="course-header">
                                <span class="course-code">${studentCourse.courseCode}</span>
                                <span class="course-title">${studentCourse.courseName}</span>
                                <span class="course-ch">${studentCourse.creditHour} CH</span>
                            </div>
                            <div class="course-grade"><span>Grade: ${registration.grade}</span></div>
                        </div>
                    </div>`;
            }
        } else if (registration.grade === "F" || registration.grade === "f") {
            if (pending) {
                pending.innerHTML += `
                    <div class="scrolling">
                        <div class="course-card">
                            <div class="course-header">
                                <span class="course-code">${studentCourse.courseCode}</span>
                                <span class="course-title">${studentCourse.courseName}</span>
                                <span class="course-ch">${studentCourse.creditHour} CH</span>
                            </div>
                        </div>
                    </div>`;
            }
        } else if (registration.grade === "" && studentCourse.isOngoing) {
            if (in_progress) {
                in_progress.innerHTML += `
                    <div class="scrolling">
                        <div class="course-card">
                            <div class="course-header">
                                <span class="course-code">${studentCourse.courseCode}</span>
                                <span class="course-title">${studentCourse.courseName}</span>
                                <span class="course-ch">${studentCourse.creditHour} CH</span>
                            </div>
                        </div>
                    </div>`;
            }
        }
    });

    document.querySelector("#stats-completed-courses").innerHTML = completedcourses; 
    
    allCoursesIds.filter(id => !takenCourseIds.includes(id)).forEach(courseId => {
        let pendingCourse = course.find(c => c.id === courseId);
        if (pending) {
            pending.innerHTML += `
                <div class="scrolling">
                    <div class="course-card">
                        <div class="course-header">
                            <span class="course-code">${pendingCourse.courseCode}</span>
                            <span class="course-title">${pendingCourse.courseName}</span>
                            <span class="course-ch">${pendingCourse.creditHour} CH</span>
                        </div>
                    </div>
                </div>`;
        }
    })
function filterCourses() { // this is to select specific category when in small screen
    let selectedStatus = document.querySelector('#status-filter').value;
    let allStatuses = ["completed", "pending", "in_progress"];
    let isMobile = window.innerWidth <= 900;

    if (isMobile) {
        allStatuses.forEach(status => {
            let section = document.querySelector(`.status-${status}`);
            section.style.display = "none";
        });

        if (selectedStatus !== "all") {
            let selectedSection = document.querySelector(`.status-${selectedStatus}`);
            selectedSection.style.display = "block";
        } else {
            allStatuses.forEach(status => {
                let section = document.querySelector(`.status-${status}`);
                section.style.display = "block";
            });
        }
    } else {
        allStatuses.forEach(status => {
            let section = document.querySelector(`.status-${status}`);
            section.style.display = "block";
        });
    }
}
document.querySelector("#status-filter").addEventListener("change", filterCourses);
window.addEventListener("resize", filterCourses);
filterCourses();

function toggleFilterVisibility() { // this is to hide the dropdowns in big screen
    let label = document.querySelector(".status-label");
    let dropdown = document.querySelector("#status-filter");

    if (window.innerWidth <= 900) {
        label.style.display = "block"; 
        dropdown.style.display = "block"; 
    } else {
        label.style.display = "none";    
        dropdown.style.display = "none"; 
    }
}

toggleFilterVisibility();
window.addEventListener("resize", toggleFilterVisibility);
});






