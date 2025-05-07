import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId');
    const semester = searchParams.get('semester');
    if(semester && studentId) {
        const ongoingRegSecs = await appRepo.getStudentRegSecBySem(studentId, semester);
        return Response.json(ongoingRegSecs, { status: 200 });
    }
    return Response.json(await appRepo.getRegistrations(), { status: 200 });
}