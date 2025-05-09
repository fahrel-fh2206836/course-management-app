import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
   const section = await appRepo.getSectionById((await params).sectionId);
   return Response.json(section, { status: 200 });
}

export async function PUT(request, { params }) {
   const section = await request.json()
   const updatedSection = await appRepo.updateSection(params.sectionId, section);
   return Response.json(updatedSection, {status: 200})
}