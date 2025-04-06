let dropDownBtn = document.querySelector("#dropdown-btn");
let list = document.querySelector("#list");
let icon = document.querySelector("#drop-icon");
let dropdownInput = document.querySelector("#dropdown-span");
let search = document.querySelector("#search-input");
let displayCourse = document.querySelector("#display-courses");
const majors = JSON.parse(localStorage.majors)

//Use this to navigate to register screen --to do--
let courseCard = document.querySelector(".student-course-card");

const courses = JSON.parse(localStorage.courses);

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

    let filteredCourses = filterCourses();
    displayCourses(filteredCourses);
}

// Search Bar
function displayCourses(filteredCourses){
    filteredCourses.sort((a, b) => a.courseName.localeCompare(b.courseName))
    displayCourse.innerHTML = filteredCourses.map((course) => courseHTML(course)).join("\n");
}

displayCourses(courses);

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

function searchCourse(e){
    let text = e.target.value.toLowerCase();
    let filteredCourses = filterCourses();
    filteredCourses = filteredCourses.filter((course) => course.courseName.toLowerCase().includes(text));
    displayCourses(filteredCourses);
}

function filterCourses() {
    let filteredCourses = [];
    if (dropdownInput.innerText !== "All"){
        let majorId = majors.find(m => m.majorCode === dropdownInput.innerText).majorId;
        filteredCourses = courses.filter((course) => course.majorId === majorId);
    } else {
        filteredCourses = [...courses];
    }
    return filteredCourses;
}

function goToRegistration(id){
    const c = courses.find(c => c.id === id);
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

renderMajorDropdown();

