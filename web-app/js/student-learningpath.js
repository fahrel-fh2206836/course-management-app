document.addEventListener("DOMContentLoaded", () => {

    let majors = JSON.parse(localStorage.majors);
    let student = JSON.parse(localStorage.getItem("loggedInUser"));
    let registration = JSON.parse(localStorage.registrations)
    let section = JSON.parse(localStorage.sections)
    let course = JSON.parse(localStorage.courses)
    console.log(student);

    //student details
    if (!student || student.role !== "Student") {
        console.log("User not found or not a student.");
        return;
    }
    console.log("Logged-in Student:", student);

    let studentMajor = majors.find(m => m.majorId == student.majorId);

    document.querySelector(".major").innerHTML = `Major: ${studentMajor.majorName}`;
    document.querySelector(".gpa").innerHTML = `CGPA: ${student.gpa.toFixed(2)}`;
    document.querySelector(".completed_courses").innerHTML = `Completed Courses: 0`; 
    document.querySelector(".completed_CH").innerHTML = `Completed Credit Hours: ${student.finishedCreditHour}`;
    
    let progress = (student.finishedCreditHour / studentMajor.totalCreditHour) * 100;
    
    document.querySelector(".progress-bar").style.width = progress + "%";
    document.querySelector(".percentage").innerHTML = `${progress.toFixed(2)}%`;


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
            if (completed) {
                completed.innerHTML += `
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
    })});






