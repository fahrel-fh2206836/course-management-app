document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('LoginForm');

    if (!loginForm) {
        console.error("error");
        return;
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password');
    const wrongPass = document.getElementById('wrong-pass');


    fetch('assets/data/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password.value);
            if (user) {

                localStorage.setItem("loggedInUsername", username);
                localStorage.setItem("loggedInPassword", password.value);
                
                if (user.role === 'Student') {
                    window.location.href = '/view-student/dashboard-student.html';
                }else if (user.role === 'Instructor') {
                    window.location.href = '/view-instructor/dashboard-instructor.html';
                } else {
                    window.location.href = '/view-admin/dashboard-admin.html';
                } 
            } else {
                password.value = "";
                wrongPass.style.display = 'block';
            }
        })

        .catch(error => {
            console.error('user error', error);
        });

})})

function toggleViewPassword() {
    const passField = document.querySelector("#password");
    const toggleBtn = document.querySelector("#toggle-btn");

    if(passField.type === "password") {
        passField.type = "text";
        toggleBtn.classList.add('bx-hide');
        toggleBtn.classList.remove('bx-show');
        
    } else {
        passField.type = "password";
        toggleBtn.classList.add('bx-show');
        toggleBtn.classList.remove('bx-hide');
    }
}