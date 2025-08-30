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
    const courseCode = searchParams.get('code');
    const courseName = searchParams.get('name');
    if (courseName && majorId) {
      return Response.json(await appRepo.getCourseByNameAndMajor(courseName, majorId), { status: 200 });
    }
    if (courseName) {
      return Response.json(await appRepo.getCourseByName(courseName), { status: 200 });
    }
    if (courseStatus) {
        const courses = await appRepo.getCourseByMajorOrStatus(majorId, courseStatus);
        return Response.json(courses, { status: 200 });
      }
      
      if (majorId) {
        return Response.json(await appRepo.getCourseByMajorId(majorId), { status: 200 });
      }
    
      if (courseCode) {
        return Response.json(await appRepo.getCourseByCode(courseCode), { status: 200 });
      }
    return Response.json(await appRepo.getCourses(), { status: 200 });
}