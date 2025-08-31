import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import appRepo from "@/app/repo/app-repo";
import styles from "./page.module.css";
import Schedule from "@/app/components/Schedule";
import AdminCourses from "@/app/components/AdminCourses";
import ClientRedirect from "@/app/components/ClientRedirect";

export default async function AdminDashboard() {
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

  const semester = await appRepo.getSemesters();
  const majors = await appRepo.getMajors();
  const ongoingCourse = await appRepo.getCourseByMajorStatus({
    status: "ongoing",
  });
  const regCourse = await appRepo.getCourseByMajorStatus({
    status: "registration",
  });
  const notOfferedCourse = await appRepo.getCourseByMajorStatus({
    status: "notOffered",
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Course Status Management</h1>

      <AdminCourses
        majors={majors}
        ongoingCourse={ongoingCourse}
        regCourse={regCourse}
        notOfferedCourse={notOfferedCourse}
      />

      <div className={styles.scheduleContainer}>
        <h2>
          <i className={`bx bxs-calendar ${styles.h2Icon}`}></i> Ongoing Class
          Schedule
        </h2>
        <Schedule ongoingSemester={semester[semester.length - 2].semester} />
      </div>
    </main>
  );
}
