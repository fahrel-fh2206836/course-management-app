import appRepo from "@/app/repo/app-repo";

export async function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search')?.toLowerCase() || '';

  if (search) {
    const results = await appRepo.searchRegistrations(params.sectionId, search);
    return Response.json(results, { status: 200 });
  }

  const section = await appRepo.getSectionById(params.sectionId);
  return Response.json(section, { status: 200 });
}

export async function PUT(request, { params }) {
   const section = await request.json()
   const updatedSection = await appRepo.updateSection(params.sectionId, section);
   return Response.json(updatedSection, {status: 200})
}