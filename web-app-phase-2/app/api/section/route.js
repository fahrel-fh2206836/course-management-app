import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const semester = searchParams.get('semester');
    const instructorId = searchParams.get('instructorId');
    const courseId = searchParams.get('courseId');
    const notSemParam = searchParams.get('notSem');
    const approvalStatus = searchParams.get('approval');
    const sectionStatus = searchParams.get('section-status');
    const notApprovalParam = searchParams.get('notApproval');
    const notSem = notSemParam === 'true';
    const notApproval = notApprovalParam === 'true';

    const sections = await appRepo.getSections(instructorId, semester, notSem, courseId, approvalStatus, sectionStatus, notApproval);
    return Response.json(sections, { status: 200 });
    
}

export async function POST(request) {
    const section = await request.json();
    const newSection = await appRepo.addSection(section);
    return Response.json(newSection, {status: 201})
}