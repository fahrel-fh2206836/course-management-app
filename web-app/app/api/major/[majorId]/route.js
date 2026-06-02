import appRepo from "@/app/repo/app-repo";

export async function PUT(req, { params }) {
    const { majorId } = await params;
    const major = await req.json();
    const updatedMajor = await appRepo.updateMajor(majorId, major);
    return Response.json(updatedMajor, { status : 200 });
}

export async function GET(req, { params }) {
   const { majorId } = await params;
   const major = await appRepo.getMajorById(majorId);
   return Response.json(major, { status: major.error ? 404 : 200 });
}