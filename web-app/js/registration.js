const selectedCourse = JSON.parse(localStorage.selectedCourse);
const title = document.querySelector("#title");


title.innerHTML = headingHtml();

function headingHtml(){
    return `View Sections for ${selectedCourse.courseName}`
}