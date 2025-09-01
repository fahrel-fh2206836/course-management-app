import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ClientRedirect from "@/app/components/ClientRedirect";
import CoursesSearch from "@/app/components/CourseSearch";
import appRepo from "@/app/repo/app-repo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CoursesPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <main className="main-dashboard">
        <p>Session expired. Redirecting in 5 seconds...</p>
        <ClientRedirect to="/" delay={5000} />
      </main>
    );
  }

  const user = session?.user ?? null;
  if (user?.role !== "Student") {
    const roleBase =
      user?.role === "Admin"
        ? "/dashboard/admin"
        : user?.role === "Instructor"
        ? "/dashboard/instructor"
        : "/";
    redirect(roleBase);
  }

  const [majors, initialCourses] = await Promise.all([
    appRepo.getMajors(),
    appRepo.getCourses(),
  ]);

  return (
    <main className="main-student-courses">
      <h1>Search for Courses</h1>
      <CoursesSearch majors={majors} initialCourses={initialCourses} />
    </main>
  );
}
