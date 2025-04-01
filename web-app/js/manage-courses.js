const majors = JSON.parse(localStorage.majors);
const courses = JSON.parse(localStorage.courses);
const selectedCourse = JSON.parse(localStorage.selectedCourse);
const table = document.querySelector("#course-table");
const majorName = majors.find(m => m.majorId===selectedCourse.majorId).majorName

function convertPrereqToHTML() {
    const prereqsName = courses.filter(c => selectedCourse.prerequisitesCoursesId.includes(c.id)).map(c => c.courseName);
    return prereqsName.length === 0 ? "<div><p>No Prerequisties</p></div>" : prereqsName.map(pc => `<div><p>${pc}</p></div>`).join('\n')
}

function convertTableToHTML() {
    return `<tbody>
                    <tr>
                    <th>Course ID</th>
                    <td>${selectedCourse.id}</td>
                    </tr>
                    <tr>
                    <th>Course Name</th>
                    <td>${selectedCourse.courseName}</td>
                    </tr>
                    <tr>
                    <th>Course Code</th>
                    <td>${selectedCourse.courseCode}</td>
                    </tr>
                    <tr>
                    <th>Major</th>
                    <td colspan="3">${majorName}</td>
                    </tr>
                    <tr>
                    <th>Credit Hour</th>
                    <td colspan="3">${selectedCourse.creditHour}</td>
                    </tr>
                    <tr>
                    <th>Status - Ongoing</th>
                    <td colspan="3"><div class="${selectedCourse.isOngoing ? 'green-box green-bg' : 'red-box red-bg'}"></div></td>
                    </tr>
                    <tr>
                    <th>Status - Registration</th>
                    <td colspan="3"><div class="${selectedCourse.isRegistration ? 'green-box green-bg' : 'red-box red-bg'}"></div></td>
                    </tr>
                    <tr>
                    <th>Prerequisites</th>
                    <td colspan="3"><div class="prerequisite-list">${convertPrereqToHTML()}</div></td>
                    </tr>
                </tbody>
                `;
}

function renderTable() {
    table.innerHTML = convertTableToHTML();
}

renderTable();

// Editing Course Functionality

const editBtn = document.querySelector(".edit-course-btn");
const buttons = document.querySelector(".btns");

function convertTableEditableHTML() {
    return `<tbody>
                    <tr>
                    <th>Course ID</th>
                    <td>${selectedCourse.id}</td>
                    </tr>
                    <tr>
                    <th>Course Name</th>
                    <td>${selectedCourse.courseName}</td>
                    </tr>
                    <tr>
                    <th>Course Code</th>
                    <td>${selectedCourse.courseCode}</td>
                    </tr>
                    <tr>
                    <th>Major</th>
                    <td colspan="3">${majorName}</td>
                    </tr>
                    <tr>
                    <th>Credit Hour</th>
                    <td colspan="3">${selectedCourse.creditHour}</td>
                    </tr>
                    <tr>
                    <th>Status - Ongoing</th>
                    <td colspan="3"><input type="checkbox" id='ongoing-check' ${selectedCourse.isOngoing ? 'checked' : ''}></td>
                    </tr>
                    <tr>
                    <th>Status - Registration</th>
                    <td colspan="3"><input type="checkbox" id='reg-check' ${selectedCourse.isRegistration ? 'checked' : ''}></td>
                    </tr>
                    <tr>
                    <th>Prerequisites</th>
                    <td colspan="3"><div class="prerequisite-list">${convertPrereqToHTML()}</div></td>
                    </tr>
                </tbody>
                `;
}

function onCourseEdit() {
    table.innerHTML = convertTableEditableHTML();
    buttons.innerHTML = `<div class="save-btn green-bg course-btn" onclick="onSaveEdit()">
                            <i class='bx bxs-save'></i>
                        </div>
                        <div class="cancel-btn red-bg course-btn" onclick="onCancelEdit()">
                            <i class='bx bxs-x-circle'></i>
                        </div>`
    buttons.style.display = 'flex';
    buttons.style.gap = '5px'
}

function onCancelEdit() {
    renderTable();
    buttons.innerHTML = `<div class="edit-course-btn course-btn" onclick="onCourseEdit()">
                        <i class='bx bxs-edit'></i>
                        </div>
                        `
}

function onSaveEdit() {
    let index = courses.findIndex(c => selectedCourse.id === c.id);
    courses[index].isOngoing = selectedCourse.isOngoing = document.querySelector("#ongoing-check").checked
    courses[index].isRegistration = selectedCourse.isRegistration = document.querySelector("#reg-check").checked 
    localStorage.selectedCourse = JSON.stringify(selectedCourse);
    localStorage.courses =  JSON.stringify(courses);
    onCancelEdit()
    alert(`${selectedCourse.courseName} status has been updated!`);
}