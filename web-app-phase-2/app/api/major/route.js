import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
   return Response.json(await appRepo.getMajors(), { status: 200 });
}