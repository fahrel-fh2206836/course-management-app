import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
   const course = await appRepo.getCourseById(params.id);
   return Response.json(course, { status: course.error ? 404 : 200 });
}

export async function PUT(request, { params }) {
   const updatedStatus = await request.json()
   const updatedCourse = await appRepo.updateCourse(params.id, updatedStatus);
   return Response.json(updatedCourse, {status: 200})
 }