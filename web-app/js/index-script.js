// Initializing Local Storages
async function retrieveJSONData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return JSON.stringify(jsonData);
}

async function loadLocalStorages() {

    //Uncomment this for 2 sec if you changed any data in the json files then comment it again.
    // delete localStorage.majors;
    // delete localStorage.courses;
    // delete localStorage.sections;
    // delete localStorage.registrations;
    // delete localStorage.users;
    // delete localStorage.currentSem;
    // delete localStorage.currentPage;

    if(!localStorage.majors) {
        localStorage.majors = await retrieveJSONData('../assets/data/majors.json');
    }
    if(!localStorage.courses) {
        localStorage.courses = await retrieveJSONData('../assets/data/courses.json');
    }
    if(!localStorage.registrations) {
        localStorage.registrations = await retrieveJSONData('../assets/data/registrations.json');   
    }
    if(!localStorage.sections) {
        localStorage.sections = await retrieveJSONData('../assets/data/sections.json');
    }
    if(!localStorage.currentSem) {
        localStorage.currentSem = "Fall 2025";
    }
}

async function loadUsers() {
    localStorage.users = await retrieveJSONData('../assets/data/users.json');
    return JSON.parse(localStorage.users);
}


document.addEventListener('DOMContentLoaded', function () {
    let users = localStorage.users ? JSON.parse(localStorage.users) : loadUsers();
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


        const user = users.find(user => user.username === username && user.password === password.value);
        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            localStorage.currentPage = 'dashboard';
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

loadLocalStorages();

