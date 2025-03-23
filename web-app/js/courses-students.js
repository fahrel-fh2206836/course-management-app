let dropDownBtn = document.querySelector("#dropdown");
let list = document.querySelector("#list");
let icon = document.querySelector("#drop-icon");

dropDownBtn.addEventListener("click", showList)

function showList(e){
    list.classList.toggle("show-list");
    if (icon.style.rotate === "-180deg") {
        icon.style.rotate = "0deg";
    } else {
        icon.style.rotate = "-180deg";
    }
}
