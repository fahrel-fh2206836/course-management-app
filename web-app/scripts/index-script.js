document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('LoginForm');

    if (!loginForm) {
        console.error("error");
        return;
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


fetch('assets/data/users.json')
    .then(response => response.json())
    .then(users => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user.role === "Student") {
            window.location.href = 'dashboard-student.html';
        }else if (user.role === "Instructor") {
            window.location.href = 'dashboard-instructor.html';
        } else if (user.role === "Admin") {
            window.location.href = 'dashboard-admin.html';
        }else { 
            alert('credentials are incorrect or doesnt exist, retry please sir')
        }
    })

    .catch(error => {
        console.error('user error', error);
    });

})})