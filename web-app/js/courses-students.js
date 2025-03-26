let dropDownBtn = document.querySelector("#dropdown-btn");
let list = document.querySelector("#list");
let icon = document.querySelector("#drop-icon");
let span = document.querySelector("#span");
let search = document.querySelector("#search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

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
        e.target.id !== "span" &&
        e.target.id !== "drop-icon"
    ){
        icon.style.rotate = "0deg"
        list.classList.remove("show-list");
    }
};

function searchBarText(e){
    span.innerText = e.target.innerText;
    if(e.target.innerText !== "All"){
        search.placeholder = `Search for ${e.target.innerText} Courses`;
    }else{
        search.placeholder = `Search for Courses`;
    }
}

for(item of listItems){
    item.addEventListener('click', (e) => searchBarText(e));
}






