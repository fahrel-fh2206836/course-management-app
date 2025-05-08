import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
    return Response.json(await appRepo.getCoursePrerequisites(params.id), { status:200 });
}