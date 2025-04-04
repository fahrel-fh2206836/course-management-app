let dropDownBtn = document.querySelector("#dropdown-btn");
let list = document.querySelector("#list");
let icon = document.querySelector("#drop-icon");
let dropdownInput = document.querySelector("#dropdown-text");
let search = document.querySelector("#search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");
let displayCourse = document.querySelector("#display-courses");
const courses = JSON.parse(localStorage.courses);

dropDownBtn.addEventListener("click", (e) => showList(e))

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
        e.target.id !== "dropdownInput" &&
        e.target.id !== "drop-icon"
    ){
        icon.style.rotate = "0deg"
        list.classList.remove("show-list");
    }
};

function searchBarText(e){
    dropdownInput.innerText = e.target.innerText;
    if(e.target.innerText !== "All"){
        search.placeholder = `Search for ${e.target.innerText} Courses`;
    }else{
        search.placeholder = `Search for Courses`;
    }
}

for(item of listItems){
    item.addEventListener('click', (e) => searchBarText(e));
}


function displayCourses(courses){
    displayCourse.innerHTML = courses.map((course) => courseHTML(course)).join("\n");
}

displayCourses(courses);

function courseHTML(course){
    return `<div class="student-course-card">
                <div class="card-flag"><p>${course.courseCode}</p></div>                
                <div class="card-course-name"><p>${course.courseName}</p></div>
            </div>`;
}

search.addEventListener('input', (e) => filterCourse(e));

function filterCourse(e){
    let text = e.target.value.toLowerCase();
    
    let newCourses = [];
    newCourses = courses.filter((course) => course.courseName.toLowerCase().includes(text));

    console.log(courses);
    
    console.log(newCourses);

    displayCourses(newCourses);

    
}












