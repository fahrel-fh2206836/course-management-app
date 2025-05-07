import appRepo from "@/app/repo/app-repo"

export async function POST(request) {
    const course = await request.json()
    const newCourse = await appRepo.addCourse(course)
    return Response.json(newCourse, {status: 201})
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const majorId = searchParams.get('majorId');
    const courseStatus = searchParams.get('course-status');
    if((majorId && courseStatus) || courseStatus) {
        const courses = await appRepo.getCourseByMajorStatus(majorId, courseStatus);
        return Response.json(courses, { status: 200 });
    } else if (majorId) {
        return Response.json(await appRepo.getCourseByMajorId(majorId), {status : 200});
    }
    return Response.json(await appRepo.getCourses(), { status: 200 });
}