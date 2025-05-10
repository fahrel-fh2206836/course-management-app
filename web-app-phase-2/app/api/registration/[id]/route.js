import appRepo from "@/app/repo/app-repo";

export async function PUT(request, { params }) {
   const reg = await request.json()
   const updatedReg = await appRepo.updateRegistration(params.id, reg);
   return Response.json(updatedReg, { status: 200 }) 
}
