import appRepo from "@/app/repo/app-repo";

export async function PUT(request, { params }) {
   const { id } = await params;
   const reg = await request.json()
   const updatedReg = await appRepo.updateRegistration(id, reg);
   return Response.json(updatedReg, { status: 200 }) 
}
