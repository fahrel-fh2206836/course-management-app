// Set localstorage.currentpage
localStorage.currentPage = "manageCourse";
baseUrl = '/api/'

const selectedCourse = JSON.parse(localStorage.selectedCourse);
const table = document.querySelector("#course-table");
const sectionHeaderH1 = document.querySelector(".section-header").querySelector("h1");
sectionHeaderH1.innerText = `${selectedCourse.courseCode} Sections`;

function convertPrereqToHTML(prereqs) {
    return prereqs.prerequisites.length === 0 ? "<div><p>No Prerequisties</p></div>" : prereqs.prerequisites.map(pc => `<div><p>${pc.prerequisite.courseName}</p></div>`).join('\n')
}

function convertTableToHTML(major, prereqs) {
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
                    <td colspan="3">${major.majorName}</td>
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
                    <td colspan="3"><div class="prerequisite-list">${convertPrereqToHTML(prereqs)}</div></td>
                    </tr>
                </tbody>
                `;
}

async function renderCourseInfo() {
    const responseMajor = await fetch(`${baseUrl}major/${selectedCourse.majorId}`);
    const responsePrereq = await fetch(`${baseUrl}course/${selectedCourse.id}/prerequisites`);
    table.innerHTML = convertTableToHTML(await responseMajor.json(), await responsePrereq.json());
}

renderCourseInfo();

// Editing Course Functionality

const editBtn = document.querySelector("#edit-course-btn");
const buttons = document.querySelector(".btns");

async function convertTableEditableHTML() {
    const responseMajor = await fetch(`${baseUrl}major/${selectedCourse.majorId}`);
    const major = await responseMajor.json();
    const responsePrereq = await fetch(`${baseUrl}course/${selectedCourse.id}/prerequisites`);
    const prereq = await responsePrereq.json();
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
                <td colspan="3">${major.majorName}</td>
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
                <td colspan="3"><div class="prerequisite-list">${convertPrereqToHTML(prereq)}</div></td>
                </tr>
            </tbody>`;
}

async function onCourseEdit() {
    table.innerHTML = await convertTableEditableHTML();
    buttons.innerHTML = `<button id="save-course-btn" class="save-btn green-bg course-btn" onclick="onSaveCourseEdit()">
                            <i class='bx bxs-save'></i>
                        </button>
                        <button id="cancel-course-btn" class="cancel-btn red-bg course-btn" onclick="onCancelCourseEdit()">
                            <i class='bx bxs-x-circle'></i>
                        </button>`;
    buttons.style.display = 'flex';
    buttons.style.gap = '5px'
}

function onCancelCourseEdit() {
    renderCourseInfo();
    buttons.innerHTML = `<button id="edit-course-btn" class="edit-btn course-btn" onclick="onCourseEdit()">
                        <i class='bx bxs-edit'></i>
                        </button>
                        `;
}

async function onSaveCourseEdit() {
    // UI update
    selectedCourse.isOngoing = document.querySelector("#ongoing-check").checked
    selectedCourse.isRegistration = document.querySelector("#reg-check").checked 
    localStorage.selectedCourse = JSON.stringify(selectedCourse);

    const updatedStatus = {
        isOngoing: selectedCourse.isOngoing,
        isRegistration: selectedCourse.isRegistration
    }

    // Database update
    await fetch(`/api/course/${selectedCourse.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStatus)
    })

    onCancelCourseEdit()
    document.querySelector("#updated-course-notif").innerText = `✅ ${selectedCourse.courseName} status has been updated!`;
    showNotification("updated-course-notif");
}

// List of Sections
// const sectionList = document.querySelector(".section-list");

// function renderCourseSection(selectedSections) {
//     if(selectedSections.length === 0) {
//         sectionList.innerHTML = `<div class="empty-section">
//                                     <i class='bx bxs-error-circle'></i>
//                                     <p>This course has no sections.</p>
//                                  </div>
//                                 `;
//         return;
//     }
//     sectionList.innerHTML = selectedSections.map(s => convertSectionHTML(s)).join('\n');
// }

// function convertStatusAppearance(s) {
//     const approvalStatus = s.approvalStatus.charAt(0) + s.approvalStatus.substring(1).toLowerCase();
//     const sectionStatus = s.sectionStatus === "OPEN_REGISTRATION" ? "Open for Registration" : s.sectionStatus.charAt(0) + s.sectionStatus.substring(1).toLowerCase();
//     return [approvalStatus, sectionStatus];
// }

// function convertSectionHTML(s) {
//     const i = users.find(u => u.userId===s.instructorId);
    
//     return `<div class="course-card">
//                 <div class="card-flag"><p>${selectedCourse.courseCode}</p></div>
//                 <div class="card-seats position-slight-top-left">
//                     <i class='bx bxs-group'></i>
//                     <p>${s.currentSeats}/${s.totalSeats}</p>
//                 </div>
//                 <div class="card-course-name"><p>${selectedCourse.courseName}</p></div>
//                 <div class="card-course-instructor"><p>Instructor: ${i.firstName} ${i.lastName}</p></div>
//                 <div class="card-course-section-location"><p>Section ID: ${s.sectionId}</p><p>Class Location: ${s.location !== '' ? s.location : 'None'}</p></div>
//                 <hr>
//                 <div class="card-course-sem-schedule"><p><i class='bx bx-calendar'></i>${s.semester}</p><p><i class='bx bx-calendar-week'></i>${s.schedule.days !== '' ? s.schedule.days : 'None'}</p><p><i class='bx bx-time'></i>${s.schedule.time !== '' ? s.schedule.time : 'None'}</p></div>
//                 <hr>
//                 <div id="card-course-statuses-${s.sectionId}" class="card-course-statuses">
//                     ${convertUneditableSectionHTML(s)}
//                 </div>
//                 <div id="section-btns-${s.sectionId}" class="section-btns">
//                     <button id="edit-section-btn" class="edit-btn section-btn" onclick="onEditSection('${s.sectionId}')">
//                         <i class='bx bxs-edit'></i>
//                     </button>
//                 </div>
//             </div>`;
// }

// renderCourseSection(sections.filter(s => s.courseId===selectedCourse.id));


// // Filters
// const semFilter = document.querySelector("#semester-filter");
// const approvalFilter = document.querySelector("#approval-filter");
// const sectionStatusFilter = document.querySelector('#section-status-filter')

// semFilter.addEventListener('change', handleFilter);
// approvalFilter.addEventListener('change', handleFilter);
// sectionStatusFilter.addEventListener('change', handleFilter);

// function handleFilter(e) {
//     let selectedSections = sections.filter(s => s.courseId===selectedCourse.id);
//     if(semFilter.value !== "All") {
//         selectedSections = selectedSections.filter(s => s.semester === semFilter.value);
//     }

//     if(approvalFilter.value !== "None") {
//         selectedSections = selectedSections.filter(s => s.approvalStatus === approvalFilter.value);
//     }

//     if(sectionStatusFilter.value !== "None") {
//         selectedSections = selectedSections.filter(s => s.sectionStatus === sectionStatusFilter.value);
//     }

//     renderCourseSection(selectedSections);
// }

// // Editing Sections
// let sectionBtns;
// let cardCourseStatus;

// function setReferences(id) {
//     sectionBtns = document.querySelector(`#section-btns-${id}`);
//     cardCourseStatus = document.querySelector(`#card-course-statuses-${id}`);
// }

// function convertEditableSectionHTML(s) {
//     const approvalStatus = convertStatusAppearance(s)[0];
//     return `<div class="statuses">
//                 <p>Approval Status</p>
//                 <div>
//                     ${s.sectionStatus === "ONGOING" || s.sectionStatus === "COMPLETED" ?  
//                         `<div class="status-value approval-type">
//                             ${s.approvalStatus === "APPROVED" ? "<i class='bx bxs-check-circle'></i>" : s.approvalStatus === "CANCELLED" ? "<i class='bx bxs-x-circle'></i>" : "<i class='bx bx-time-five'></i>"}       
//                                 <p>${approvalStatus}</p>
//                         </div>`
//                         : 
//                         `<select class="edit-section-approval" name="edit-section-approval">
//                             <option value="PENDING" ${s.approvalStatus === "PENDING" ? "selected" : ''}>⏳ Pending</option>
//                             <option value="APPROVED" ${s.approvalStatus === "APPROVED" ? "selected" : ''}>✅ Approved</option>
//                             <option value="CANCELLED" ${s.approvalStatus === "CANCELLED" ? "selected" : ''}>❌ Cancelled</option>
//                         </select>`
//                     } 
//                 </div>
//             </div>
//             <div class="statuses">
//                 <p>Section Status</p>
//                 <div>
//                     <select class="edit-section-status" name="edit-section-status">
//                         <option value="COMPLETED" ${s.sectionStatus === "COMPLETED" ? 'selected' : ''}>Completed</option>
//                         <option value="ONGOING" ${s.sectionStatus === "ONGOING" ? 'selected' : ''}>Ongoing</option>
//                         <option value="OPEN_REGISTRATION" ${s.sectionStatus === "OPEN_REGISTRATION" ? 'selected' : ''}>Open for Registration</option>
//                     </select>
//                 </div>
//             </div>`;
// }

// function convertUneditableSectionHTML(s) {
//     const [approvalStatus, sectionStatus] = convertStatusAppearance(s);
//     return `<div class="statuses">
//                 <p>Approval Status</p>
//                 <div class="status-value approval-type">
//                         ${s.approvalStatus === "APPROVED" ? "<i class='bx bxs-check-circle'></i>" : s.approvalStatus === "CANCELLED" ? "<i class='bx bxs-x-circle'></i>" : "<i class='bx bx-time-five'></i>"}       
//                         <p>${approvalStatus}</p>
//                 </div>
//             </div>
//             <div class="statuses">
//                 <p>Section Status</p>
//                 <div class="status-value section-type ${s.sectionStatus === "COMPLETED" ? 'completed-card' : s.sectionStatus === "ONGOING" ? 'ongoing-card' : 'open-for-reg-card'}">
//                         <p>${sectionStatus}</p>
//                 </div>
//             </div>`;
// }

// function onEditSection(sectionId) {
//     setReferences(sectionId);
//     const section = sections.find(s => s.sectionId === sectionId);
//     cardCourseStatus.innerHTML = convertEditableSectionHTML(section);
//     sectionBtns.innerHTML = `<button id="save-section-btn" class="save-btn green-bg section-btn" onclick="onSaveSectionEdit('${section.sectionId}')">
//                                 <i class='bx bxs-save'></i>
//                             </button>
//                             <button id="cancel-section-btn" class="cancel-btn red-bg section-btn" onclick="onCancelSectionEdit('${section.sectionId}')">
//                                 <i class='bx bxs-x-circle'></i>
//                             </button>`;
//     sectionBtns.style.display = 'flex';
//     sectionBtns.style.flexDirection = 'column';
//     sectionBtns.style.gap = '5px'
// }



// function onCancelSectionEdit(sectionId) {
//     setReferences(sectionId);
//     const section = sections.find(s => s.sectionId === sectionId);
//     cardCourseStatus.innerHTML = convertUneditableSectionHTML(section);
//     sectionBtns.innerHTML = `<button id="edit-section-btn" class="edit-btn section-btn" onclick="onEditSection('${section.sectionId}')">
//                                 <i class='bx bxs-edit'></i>
//                             </button>`;
// }

// function onSaveSectionEdit(sectionId) {
//     setReferences(sectionId);
//     let index = sections.findIndex(s => sectionId === s.sectionId);

//     let newApprovalStatus;
//     let newApprovalStatusDiv =  cardCourseStatus.querySelector(".edit-section-approval");

//     if(newApprovalStatusDiv !== null) {
//         newApprovalStatus = newApprovalStatusDiv.value;
//         sections[index].approvalStatus = newApprovalStatus;
//     }

//     if(newApprovalStatus === "CANCELLED") {
//         sections[index].currentSeats = 0;
//         localStorage.registrations = JSON.stringify(registrations.filter(r => r.sectionId !== sectionId));
//         //Re-render section list
//         renderCourseSection(sections.filter(s => s.courseId===selectedCourse.id))
//     }

//     let newSectionStatus = cardCourseStatus.querySelector(".edit-section-status").value;
//     let doUpdateSectionStatus = false;

//     if(newSectionStatus === 'ONGOING' || newSectionStatus === "COMPLETED") {
//         if(sections[index].approvalStatus !== "APPROVED") {
//             document.querySelector("#not-approved-notif").innerText = `⚠️ Status cannot be ${newSectionStatus}. (NOT APPROVED STATUS YET)`;
//             showNotification("not-approved-notif");
//             return;
//         } else {
//             doUpdateSectionStatus = true;
//         }
//     } else {
//         doUpdateSectionStatus = true;
//     }

//     sections[index].sectionStatus = doUpdateSectionStatus === true ? newSectionStatus : sections[index].sectionStatus;
    
//     onCancelSectionEdit(sectionId)
//     localStorage.sections =  JSON.stringify(sections);
//     showNotification("updated-section-notif");
// }

// // Render Semester Filter

async function renderSemesterDropdown() {
    const response = await fetch(`${baseUrl}semester`)
    const semesterDropdown = document.querySelector('#semester-filter');
    semesterDropdown.innerHTML = convertSemesterOptionHTML(await response.json());
}

function convertSemesterOptionHTML(semesters) {
    return `<option value="All" selected>All Semester</option>
            ${semesters.map(s => `<option value="${s.semester}">${s.semester}</option>`).join('\n')}`
}

renderSemesterDropdown()

function showNotification(elementId) {
    document.querySelector(`#${elementId}`).classList.add("show");

    setTimeout(() => {
        document.querySelector(`#${elementId}`).classList.remove("show");
    }, 3000);
}