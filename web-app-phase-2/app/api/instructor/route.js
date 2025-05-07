import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
    const instructors = await appRepo.getInstructors();
    return Response.json(instructors, {status: 200});
}