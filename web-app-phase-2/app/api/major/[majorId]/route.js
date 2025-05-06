import appRepo from "@/app/repo/app-repo";

export async function PUT(request, { params }) {
    const majorId = params.majorId;
    const major = await request.json();
    const updatedMajor = await appRepo.updateMajor(majorId, major);
    return Response.json(updatedMajor);
}