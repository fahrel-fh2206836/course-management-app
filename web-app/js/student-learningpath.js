document.addEventListener("DOMContentLoaded", () => {
    const currentUserId = "202205004"; //for testing only 

    fetch("../assets/data/users.json")
        .then(response => response.json())
        .then(users => {
            let student = null;
            for (let i = 0; i < users.length; i++) {
                if (users[i].userId === currentUserId && users[i].role === "Student") {
                    student = users[i];
                    break;
                }
            }
            
            if (!student) {
                console.log("User not found or not a student.");
                return;
            }

            fetch("../assets/data/majors.json")
                .then(response => response.json())
                .then(majors => {
                    let studentMajor = "N/A";
                    for (let i = 0; i < majors.length; i++) {
                        if (majors[i].majorId === student.majorId) {
                            studentMajor = majors[i].majorName;
                            break;
                        }
                    }

                    document.querySelector(".major").innerHTML = `Major: ${studentMajor}`;
                    document.querySelector(".gpa").innerHTML = `CGPA: ${student.gpa.toFixed(2)}`;
                    document.querySelector(".completed_courses").innerHTML = `Completed Courses: 0`; // 
                    document.querySelector(".completed_CH").innerHTML = `Completed Credit Hours: ${student.finishedCreditHour}`;
                    
                    let progress = (student.finishedCreditHour / 120) * 100;
                    document.querySelector(".progress-bar").style.width = progress + "%";
                    document.querySelector(".percentage").innerHTML = `${progress.toFixed(2)}%`;
                });
        });
});
