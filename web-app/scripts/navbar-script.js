let menuList = document.getElementById("menuList")
let navbar1 = document.getElementById("navbar1")

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px"
        navbar1.style.borderRadius = "0px"
        menuList.style.boxShadow = "0 0 10px"
        menuList.style.padding = "20px"
    }else {
        menuList.style.maxHeight = "0px"
        navbar1.style.borderRadius = null
        menuList.style.boxShadow = "none"
        menuList.style.padding = null
    }
}

$(window).on('resize load', function () {
    if ($(window).width() < 739) {
        $("#default").add('classnew').removeClass('classold')
    } else {
        $("#default").addClass('classold').removeClass('classnew')
    }
 });


