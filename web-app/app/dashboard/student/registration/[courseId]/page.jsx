import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RegistrationComponent from "@/app/components/RegistrationComponent";
import appRepo from "@/app/repo/app-repo";
import { getServerSession } from "next-auth";

async function getPrereqs(courseId) {
  if (!courseId) return { prerequisites: [] };
  const res = await fetch(`/api/course/${courseId}/prerequisites`);
  return res.ok ? res.json() : { prerequisites: [] };
}

export default async function RegistrationPage({ params }) {
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
  const studentId = user?.userId ?? user?.id ?? null;

  const courseId = params?.courseId ?? null;
  const course = await appRepo.getCourseById(courseId);
  const semesters = await appRepo.getSemesters();
  const openRegistrationSemester =
    semesters?.[semesters.length - 1]?.semester ?? "";
  const majorName = (await appRepo.getMajorById(course.majorId)).majorName;

  const [sections, prereqs, registered] = await Promise.all([
    appRepo.getSections(null, null, null, courseId),
    appRepo.getCoursePrerequisites(courseId),
    appRepo.getRegistrations(
      studentId,
      openRegistrationSemester,
      "OPEN_REGISTRATION"
    ),
  ]);

  const title = course
    ? `View Sections for ${course.courseName}`
    : "Course Sections";

  return (
    <main className="main-registration">
      <h1 id="title" className="title-grid">
        {title}
      </h1>

      <RegistrationComponent
        user={user}
        course={course}
        majorName={majorName}
        prereqs={
          Array.isArray(prereqs?.prerequisites) ? prereqs.prerequisites : []
        }
        semesters={semesters}
        initialSections={sections}
        initiallyRegistered={registered}
        openRegistrationSemester={openRegistrationSemester}
      />
    </main>
  );
}
