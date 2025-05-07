import appRepo from "@/app/repo/app-repo";

export async function PUT(req, { params }) {
    const majorId = params.majorId;
    const major = await req.json();
    const updatedMajor = await appRepo.updateMajor(majorId, major);
    return Response.json(updatedMajor, { status : 200 });
}

export async function GET(req, { params }) {
   const major = await appRepo.getMajorById(params.majorId);
   return Response.json(major, { status: major.error ? 404 : 200 });
}