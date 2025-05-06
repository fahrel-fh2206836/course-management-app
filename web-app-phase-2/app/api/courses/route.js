import appRepo from "@/app/repo/app-repo"

export async function POST(request) {
    const course = await request.json()
    const newCourse = await appRepo.addCourse(course)
    return Response.json(newCourse, {status: 200})
}