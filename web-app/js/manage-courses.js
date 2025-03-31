const majors = JSON.parse(localStorage.majors);
const courses = JSON.parse(localStorage.courses);
const selectedCourse = JSON.parse(localStorage.selectedCourse);
const table = document.querySelector("#course-table");

function convertPrereqToHTML() {
    const prereqsName = courses.filter(c => selectedCourse.prerequisitesCoursesId.includes(c.id)).map(c => c.courseName);
    return prereqsName.length === 0 ? "<p>No Prerequisties</p>" : prereqsName.map(pc => `<p>${pc}</p>`).join('\n')
}

function convertTableToHTML() {
    const majorName = majors.find(m => m.majorId===selectedCourse.majorId).majorName
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
                    <th>Prerequisites</th>
                    <td colspan="3"><div class="prerequisite-list">${convertPrereqToHTML()}</div></td>
                    </tr>
                    <tr>
                    <th>Status - Ongoing</th>
                    <td colspan="3"><div class="${selectedCourse.isOngoing ? 'green-box' : 'red-box'}"></div></td>
                    </tr>
                    <tr>
                    <th>Status - Registration</th>
                    <td colspan="3"><div class="${selectedCourse.isRegistration ? 'green-box' : 'red-box'}"></div></td>
                    </tr>
                </tbody>
                `;
}

function renderTable() {
    table.innerHTML = convertTableToHTML();
}

renderTable();