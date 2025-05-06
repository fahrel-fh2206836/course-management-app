import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
   const semesters = await appRepo.getSemesters();
   return Response.json(semesters, { status: 200 });
}