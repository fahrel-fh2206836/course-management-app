import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const semester = searchParams.get('semester');
    const instructorId = searchParams.get('instructorId');
    const notSemParam = searchParams.get('notSem');
    const notSem = notSemParam === 'true';
  
    const sections = await appRepo.getSections(instructorId, semester, notSem);
    return Response.json(sections, { status: 200 });
  }