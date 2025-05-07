import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const semester = searchParams.get('semester');
    const instructorId = searchParams.get('instructorId');
    const notSem = searchParams.get('notSem');
    if(instructorId && notSem !== null) {
        const parsedNotSem = notSem === 'true'; 
        const instructorSecs = await appRepo.getInstructorSecBySem(instructorId, semester, parsedNotSem);
        return Response.json(instructorSecs, { status: 200 });
    }
    return Response.json(await appRepo.getSections(), { status: 200 });
}