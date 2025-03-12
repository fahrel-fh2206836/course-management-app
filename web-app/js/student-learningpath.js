document.addEventListener("DOMContentLoaded", () => {

    const loggedInUsername = localStorage.getItem("loggedInUsername");
    const loggedInPassword = localStorage.getItem("loggedInPassword");

    fetch("../assets/data/users.json")
        .then(response => response.json())
        .then(users => {
            let student = users.find(user => user.username === loggedInUsername && user.password === loggedInPassword);

            if (!student || student.role !== "Student") {
                console.log("User not found or not a student.");
                return;
            }
            console.log("Logged-in Student:", student);

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
                    document.querySelector(".completed_courses").innerHTML = `Completed Courses: 0`; 
                    document.querySelector(".completed_CH").innerHTML = `Completed Credit Hours: ${student.finishedCreditHour}`;

                    let progress = (student.finishedCreditHour / 120) * 100;
                    document.querySelector(".progress-bar").style.width = progress + "%";
                    document.querySelector(".percentage").innerHTML = `${progress.toFixed(2)}%`;
                });
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
});
