const { default: appRepo } = require("@/app/repo/app-repo");

export async function GET(req, { params }) {
    const { searchParams } = new URL(req.url);
    const semester = searchParams.get('semester');
    const numStudent = await appRepo.getInstructorTotalStudentSem(params.instructorId, semester);
    return Response.json(numStudent, { status: 200 });
}