import appRepo from "@/app/repo/app-repo";

export async function GET() {
    return Response.json(await appRepo.getCoursePreRequisites(), {status:200});
}