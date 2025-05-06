import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
   const section = await appRepo.getSectionById((await params).sectionId);
   return Response.json(section, { status: 200 });
}