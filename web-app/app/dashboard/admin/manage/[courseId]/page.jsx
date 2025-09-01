import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ClientRedirect from "@/app/components/ClientRedirect";
import CourseInfo from "@/app/components/CourseInfo";
import CourseSection from "@/app/components/CourseSection";
import appRepo from "@/app/repo/app-repo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ManageCoursePage({ params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <main className="main-dashboard">
        <p>Session expired. Redirecting in 5 seconds...</p>
        <ClientRedirect to="/" delay={5000} />
      </main>
    );
  }

  const user = session.user;
  if (user?.role !== "Admin") {
    const roleBase =
      user?.role === "Student"
        ? "/dashboard/student"
        : user?.role === "Instructor"
        ? "/dashboard/instructor"
        : "/";
    redirect(roleBase);
  }

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
