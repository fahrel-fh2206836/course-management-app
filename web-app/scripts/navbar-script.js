let menuList = document.getElementById("menuList")
let navbar = document.getElementById("navbar")

if(window.innerWidth > 1024) {
    menuList.classList.add("largeMenuList")
} else {
    menuList.classList.add("closeMenuList")
}

function toggleMenu() {
    if(!menuList.classList.contains("openMenuList")) {
        menuList.classList.add("openMenuList")
    }
    if(menuList.classList.contains("closeMenuList")) {
        navbar.style.borderRadius = "0px"
        menuList.classList.remove("closeMenuList")
    }else {
        navbar.style.borderRadius = null 
        menuList.classList.add("closeMenuList")

   }
}

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth > 1024) {
        menuList.classList.remove("openMenuList")
        menuList.classList.remove("closeMenuList")
        navbar.style.borderRadius = null
        menuList.classList.add("largeMenuList")
    } else {
        menuList.classList.remove("largeMenuList")
        menuList.classList.add("closeMenuList")
    }
}, true);


