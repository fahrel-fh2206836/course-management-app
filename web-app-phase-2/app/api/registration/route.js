import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId');
    const semester = searchParams.get('semester');
    const sectionStatus = searchParams.get('section-status');
    return Response.json(await appRepo.getRegistrations(studentId, semester, sectionStatus), { status: 200 });
}

export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const sectionId = searchParams.get('sectionId');
    const studentId = searchParams.get('studentId');
    await appRepo.deleteRegistrations(sectionId, studentId);
    return Response.json({ message: `Registrations of ${sectionId} deleted` }, { status: 200 });
}

export async function POST(request) {
    const reg = await request.json();
    const newReg = await appRepo.addRegistration(reg);
    return Response.json(newReg, {status: 201})
}