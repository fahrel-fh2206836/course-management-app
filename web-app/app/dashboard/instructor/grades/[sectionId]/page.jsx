// app/dashboard/instructor/grade/[sectionId]/page.jsx
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ClientRedirect from "@/app/components/ClientRedirect";
import GradeCourseInfo from "@/app/components/GradeCourseInfo";
import GradeTable from "@/app/components/GradeTable";

export default async function GradePage({ params }) {
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
  if (user?.role !== "Instructor") {
    const roleBase =
      user?.role === "Student"
        ? "/dashboard/student"
        : user?.role === "Admin"
        ? "/dashboard/admin"
        : "/";
    redirect(roleBase);
  }

  const { sectionId } = params;

  return (
    <main className="main-grades">
      <h1>Grade Allocation</h1>
      <div className="section-style welcome-stats" style={{ marginBottom: 16 }}>
        <GradeCourseInfo sectionId={sectionId} />
      </div>

      <div className="registered-courses section-style">
        <ul className="course-card-list">
          <GradeTable sectionId={sectionId} />
        </ul>
      </div>
    </main>
  );
}
