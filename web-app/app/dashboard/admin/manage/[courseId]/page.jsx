import CourseInfo from "@/app/components/CourseInfo";
import CourseSection from "@/app/components/CourseSection";
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
      <CourseSection
        selectedCourse={selectedCourse}
        courseSections={courseSections}
      />
    </main>
  );
}
