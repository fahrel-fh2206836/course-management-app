import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
   const course = await appRepo.getCourseById(params.id);
   return Response.json(course, { status: course.error ? 404 : 200 });
}