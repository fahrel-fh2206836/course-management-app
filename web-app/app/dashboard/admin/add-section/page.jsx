import AddSection from "@/app/components/AddSection";
import appRepo from "@/app/repo/app-repo";
import React from "react";

export default async function AddSectionPage() {
  const semesters = await appRepo.getSemesters();
  const nextSem = semesters.find((s) => s.semester === "Fall 2025");
  const regCourses = await appRepo.getCourseByMajorStatus({
    status: "registration",
  });
  const instructors = await appRepo.getInstructors();
  console.log(instructors[0]);

  return (
    <main className="add-page-main">
      <div className="form-container">
        <h2>Add New Section ({nextSem.semester})</h2>
        <AddSection
          nextSem={nextSem}
          regCourses={regCourses}
          instructors={instructors}
        />
      </div>
    </main>
  );
}
