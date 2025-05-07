import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId');
    const semester = searchParams.get('semester');
    const instructorId = searchParams.get('instructorId');
    const notSem = searchParams.get('notSem');
    if(semester && studentId) {
        const ongoingRegSecs = await appRepo.getStudentRegSecBySem(studentId, semester);
        return Response.json(ongoingRegSecs, { status: 200 });
    }
    else if(semester && instructorId && notSem !== null) {
        console.log(semester)
        console.log(instructorId)
        console.log(notSem)
        const parsedNotSem = notSem === 'true'; 
        const instructorSecs = await appRepo.getInstructorSecBySem(instructorId, semester, parsedNotSem);
        return Response.json(instructorSecs, { status: 200 });
    }
    else if(instructorId && semester) {
        const numStudent = await appRepo.getInstructorTotalStudentSem(instructorId, semester);
        return Response.json(numStudent, { status: 200 });
    }

    return Response.json(await appRepo.getSections(), { status: 200 });
}