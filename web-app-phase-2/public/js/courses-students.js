// Set localstorage.currentpage
localStorage.currentPage = "courses";
const baseUrl = "/api/";

let dropDownBtn = document.querySelector("#dropdown-btn");
let list = document.querySelector("#list");
let icon = document.querySelector("#drop-icon");
let dropdownInput = document.querySelector("#dropdown-span");
let search = document.querySelector("#search-input");
let displayCourse = document.querySelector("#display-courses");
let majors = [];
let courses = [];


//Use this to navigate to register screen --to do--
let courseCard = document.querySelector(".student-course-card");


async function loadMajors(){
    const response = await fetch (`${baseUrl}/major`);
    const majors = await response.json();
    return majors;
}

async function loadCourses() {
    const response = await fetch (`${baseUrl}/course`);
    const courses = await response.json();
    return courses;
}

window.addEventListener("DOMContentLoaded", async () => {
    majors = await loadMajors();
    courses = await loadCourses();

    renderMajorDropdown();
    displayCourses(courses);
});

//Dropdwon Functions
dropDownBtn.addEventListener("click", (e) => showList(e));

function showList(e){
    if(list.classList.contains("show-list")){
        icon.style.rotate = "0deg";
    } else {
        icon.style.rotate = "-180deg";
    }

    list.classList.toggle("show-list");
};

window.addEventListener("click", (e) => makeChange(e))

function makeChange(e){
    if(e.target.id !== "dropdown-btn" &&
        e.target.id !== "dropdown-span" &&
        e.target.id !== "drop-icon"
    ){
        icon.style.rotate = "0deg"
        list.classList.remove("show-list");
    }
};


function dropDownMajor(e){
    dropdownInput.innerText = e.target.innerText;
    search.value = '';
    if(e.target.innerText !== "All"){
        search.placeholder = `Search for ${e.target.innerText} Courses`;
    }else{
        search.placeholder = `Search for Courses`;
    }
    filterCoursesByMajor(e.target.innerText);
}

// Search Bar
function displayCourses(filteredCourses){
    displayCourse.innerHTML = filteredCourses.map((course) => courseHTML(course)).join("\n");
}

function courseHTML(course){
    return `<div class="course-card hover-underline" onclick="goToRegistration('${course.id}')">
                <div class="card-flag"><p>${course.courseCode}</p></div>                
                <div class="card-course-name"><p>${course.courseName}</p></div>
                <hr>
                <div class="sub-card-styling">
                    <div class="course-status">
                        <span>Ongoing Status</span>
                        ${course.isOngoing ? "<i class='bx bxs-check-circle green' ></i>" : "<i class='bx bxs-x-circle red'></i>"}
                    </div>
                    <div class="course-status">
                        <span>Registration Status</span>
                        ${course.isRegistration ? "<i class='bx bxs-check-circle green'></i>" : "<i class='bx bxs-x-circle red'></i>"}
                    </div>
                </div>
            </div>`;
}

search.addEventListener('input', (e) => searchCourse(e));

async function searchCourse(e) {
    e.preventDefault();
    let text = e.target.value.toLowerCase().trim();

    const majorCode = dropdownInput.innerText;
    
    if (text === '') {
        filterCoursesByMajor(majorCode);
        return;
    }

    let url = `${baseUrl}/course?name=${text}`;

    if (majorCode !== "All") {
        const selectedMajor = await (await fetch(`${baseUrl}major?code=${majorCode}`)).json();
        if (selectedMajor) {
            url += `&majorId=${selectedMajor.majorId}`;
        }
    }
    const response = await fetch(url);
    const result = await response.json();
    displayCourses(result);
}

async function filterCoursesByMajor(majorCode) {
    if (majorCode === "All") {
        courses = await loadCourses();
    } else {
        const selectedMajor = await (await fetch(`${baseUrl}major?code=${majorCode}`)).json();
        
        const response = await fetch(`${baseUrl}/course?majorId=${selectedMajor.majorId}`);
        courses = await response.json();
    }

    displayCourses(courses);
}

async function goToRegistration(id){
    const c =  await (await fetch(`${baseUrl}course/${id}`)).json();
    localStorage.selectedCourse = JSON.stringify(c);
    window.location.href = '../view-student/registration.html';
}

function renderMajorDropdown() {
    list.innerHTML = convertMajorOptionHTML();
    let listItems = document.querySelectorAll(".dropdown-list-item");
    for(item of listItems){
        item.addEventListener('click', (e) => dropDownMajor(e));
    }
}

function convertMajorOptionHTML() {
    return `<li class="dropdown-list-item">All</li>
            ${majors.map(m => `<li class="dropdown-list-item">${m.majorCode}</li>`).join('\n')}`
}

