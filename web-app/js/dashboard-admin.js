const courseListGeneral = document.querySelector("#course-list-general");
const courses = JSON.parse(localStorage.courses);
const statusDropdown = document.querySelector('#status');

if (window.matchMedia("(max-width: 1023px)").matches) {
    onSmallScreen();
} else {    
    onBigScreen();
}

window.addEventListener('resize', function(event) {
    if (window.matchMedia("(max-width: 1023px)").matches) {
        onSmallScreen();
    } else {    
        onBigScreen();
    }
})

function mapCoursesToHTML(cl) {
    return cl.map(c => generateCoursesHTML(c)).join('\n');
}

function generateCoursesHTML(c) {
    return `<div class="course-card">
                        <div class="manage-class-btn"><i class='bx bxs-cog'></i><p>Manage Course</p></div>
                        <div class="card-flag"><p>${c.courseCode}</p></div>
                        <div class="card-course-name"><p>Course ID: ${c.id} - ${c.courseName}</p></div>
                </div>
            `;
}

function filterOngoing() {
    return courses.filter(c => c.isOngoing === true);
}

function filterRegistration() {
    return courses.filter(c => c.isRegistration === true)
}

function filterNotOffered() {
    return courses.filter(c => c.isRegistration === false && c.isOngoing === false)
}

function onMajorChange(e, s) {
    let courseListHTML;
    let status = window.matchMedia("(max-width: 1023px)").matches ? statusDropdown.value : s;
    let major = e.target.value;
    
    if(status === "ongoing") {
        courseListHTML = filterOngoing();
    } else if (status === "registration") {
        courseListHTML = filterRegistration();
    } else if(status === "not-offered") {
        courseListHTML = filterNotOffered();
    }

    if(major === "CMPS") {
        courseListHTML = mapCoursesToHTML(courseListHTML.filter(c => c.majorId === "1"));
    } else if (major === "CMPE") {
        courseListHTML = mapCoursesToHTML(courseListHTML.filter(c => c.majorId === "2"));
    } else if (major === "") {
        courseListHTML = mapCoursesToHTML(courseListHTML.map(c => generateCoursesHTML(c)).join('\n'));
    }

    if(window.matchMedia("(max-width: 1023px)").matches) {
        courseListGeneral.innerHTML = courseListHTML;
    }else if (status === "ongoing"){
        document.querySelector("#course-list-ongoing").innerHTML = courseListHTML;
    } else if(status === "registration") {
        document.querySelector("#course-list-registration").innerHTML = courseListHTML;
    } else if(status === "not-offered") {
        document.querySelector("#course-list-not-offered").innerHTML = courseListHTML;
    }
}

function onSmallScreen() {
    const statusIcon = document.querySelector("#status-icon");
    const cStatusIcon = document.querySelector("#c-status-icon");
    const cStatusText = document.querySelector("#c-status-text");
    const majorDropDown = document.querySelector("#major");
    
    statusDropdown.addEventListener('change', onStatusChange);

    courseListGeneral.innerHTML = mapCoursesToHTML(filterOngoing());

    function onStatusChange(e) {
        if(e.target.value === "ongoing") {
            statusIcon.classList.remove(...statusIcon.classList);
            cStatusIcon.classList.remove(cStatusIcon.classList[2]);
            cStatusText.classList.remove(...cStatusText.classList);
            statusIcon.classList.add("bx", "bxs-hourglass-top", "icon-circle", "ongoing");
            cStatusIcon.classList.add("ongoing")
            cStatusText.classList.add("ongoing");
            cStatusText.innerText = "Ongoing Courses";

            courseListGeneral.innerHTML = mapCoursesToHTML(filterOngoing());

        } else if (e.target.value === "registration") {
            statusIcon.classList.remove(...statusIcon.classList);
            cStatusIcon.classList.remove(cStatusIcon.classList[2]);            
            cStatusText.classList.remove(...cStatusText.classList);
            statusIcon.classList.add("bx", "bxs-check-circle", "icon-circle","registration");
            cStatusIcon.classList.add("registration")
            cStatusText.classList.add("registration");
            cStatusText.innerText = "Open Courses";

            courseListGeneral.innerHTML = mapCoursesToHTML(filterRegistration());

        } else {
            statusIcon.classList.remove(...statusIcon.classList);
            cStatusIcon.classList.remove(cStatusIcon.classList[2]);
            cStatusText.classList.remove(...cStatusText.classList);
            statusIcon.classList.add("bx", "bxs-x-circle", "icon-circle", "not-offered");
            cStatusIcon.classList.add("not-offered")
            cStatusText.classList.add("not-offered");
            cStatusText.innerText = "Not Offered Courses";

            courseListGeneral.innerHTML = mapCoursesToHTML(filterNotOffered());

        }

        majorDropDown.selectedIndex = 0;
    }
}

function onBigScreen() {
    const courseReg = document.querySelector("#course-list-registration");
    const courseNotOffered = document.querySelector("#course-list-not-offered");
    const courseOngoing = document.querySelector("#course-list-ongoing");

    
    courseOngoing.innerHTML = mapCoursesToHTML(filterOngoing());
    courseReg.innerHTML = mapCoursesToHTML(filterRegistration());
    courseNotOffered.innerHTML = mapCoursesToHTML(filterNotOffered());
}