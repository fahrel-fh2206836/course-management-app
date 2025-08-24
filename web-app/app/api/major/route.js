import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
   const { searchParams } = new URL(req.url);
   const majorCode = searchParams.get('code');
   if(majorCode) {
      return Response.json(await appRepo.getMajorByCode(majorCode), { status: 200 });
   }
   return Response.json(await appRepo.getMajors(), { status: 200 });
}