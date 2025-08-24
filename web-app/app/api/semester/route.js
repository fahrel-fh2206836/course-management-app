import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
   const { searchParams } = new URL(req.url);
   let removeSem = searchParams.get('removeSem');
   const removeSemArray = removeSem ? removeSem.split(',') : [];
   const semesters = await appRepo.getSemesters(removeSemArray);
   return Response.json(semesters, { status: 200 });
}