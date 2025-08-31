import CourseInfo from "@/app/components/CourseInfo";
import appRepo from "@/app/repo/app-repo";
import React from "react";

export default async function page({ params }) {
  const courseId = params.courseId;
  const selectedCourse = await appRepo.getCourseById(courseId);
  const courseSections = await appRepo.getSections(null, null, null, courseId);
  return (
    <main className="main-manage-courses">
      <h1>
        <i className="bx bxs-cog"></i> Manage Course
      </h1>

      <CourseInfo selectedCourse={selectedCourse} />

      <div class="course-section">
        <div class="section-header">
          <h1>$Course Sections</h1>
        </div>
        <div class="section-filters">
          <div class="semester-filter">
            <label for="semester-filter">Select Semester</label>
            <select id="semester-filter" name="semester">
              {/* <!-- Added thru js --> */}
            </select>
          </div>
          <div class="approval-filter">
            <label for="approval-filter">Select Approval Status</label>
            <select id="approval-filter" name="approval">
              <option value="None" selected>
                None
              </option>
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>
          <div class="section-status-filter">
            <label for="section-status-filter">Select Section Status</label>
            <select id="section-status-filter" name="section-status">
              <option value="None" selected>
                None
              </option>
              <option value="COMPLETED">Completed</option>
              <option value="ONGOING">Ongoing</option>
              <option value="OPEN_REGISTRATION">Open for Registration</option>
            </select>
          </div>
        </div>
        <div class="section-list">{/* <!-- Added thru javascript --> */}</div>
      </div>
    </main>
  );
}
