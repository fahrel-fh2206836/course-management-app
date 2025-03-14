document.addEventListener("DOMContentLoaded", () => {

    let majors = JSON.parse(localStorage.majors);

    let student = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(student);
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

    let image = document.querySelector(".img-prerequiste");
    if (studentMajor.majorName === "Computer Science") {
        image.innerHTML = `<img src="../assets/images/flowchart_cs.png" alt="">`; 
    } else if (studentMajor.majorName === "Computer Engineering") {
        image.innerHTML = `<img src="../assets/images/flowchart_ce.png" alt="">`;}

});
