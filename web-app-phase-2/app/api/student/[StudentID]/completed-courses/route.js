import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get('courseId');
    const checkCompParam = searchParams.get('check-completed');
    const checkCompleted = checkCompParam === 'true';
    if(checkCompleted) {
        return Response.json(await appRepo.hasStudentCompletedCourse(params.StudentID, courseId))
    }
    const completed = await appRepo.getStudentCompletedCourses(params.StudentID, courseId);
    return Response.json(completed, { status: 200 });
}