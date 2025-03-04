let menuList = document.querySelector("#menulist");
let navbar = document.querySelector("#navbar");

if(window.innerWidth > 1024) {
    menuList.classList.add("large-menulist");
} else {
    menuList.classList.add("close-menulist");
}

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth > 1024) {
        menuList.classList.remove("open-menulist");
        menuList.classList.remove("close-menulist");
        navbar.style.borderRadius = null;
        menuList.classList.add("large-menulist");
    } else {
        menuList.classList.remove("large-menulist");
        menuList.classList.add("close-menulist");
    }
    }, true);


function toggleMenu() {
    if(!menuList.classList.contains("open-menulist")) {
        menuList.classList.add("open-menulist");
    }
    if(menuList.classList.contains("close-menulist")) {
        navbar.style.borderRadius = "0px";
        menuList.classList.remove("close-menulist");
    }else {
        navbar.style.borderRadius = null;
        menuList.classList.add("close-menulist");
    }
}    