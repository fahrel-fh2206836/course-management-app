let dropDownBtn = document.querySelector("#dropdown");
let list = document.querySelector("#list");
let icon = document.querySelector("#drop-icon");



dropDownBtn.addEventListener("onclick", showList())

function showList(){
    list.classList.toggle("show-list");
    icon.style.rotate = "-180deg";
}
