import appRepo from "@/app/repo/app-repo";

export async function GET() {
    return Response.json(await appRepo.getUsers(), {status : 200})    
}