import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
    const { id } = await params;
    return Response.json(await appRepo.getCoursePrerequisites(id), { status:200 });
}