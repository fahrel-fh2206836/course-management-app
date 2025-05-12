import { NextResponse } from "next/server";
import appRepo from "@/app/repo/app-repo";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  try {
    switch (type) {
      case "totalStudentsPerMajor":
        return NextResponse.json(await appRepo.getTotalStudentsPerMajor());

      case "top3MostEnrolledCourses":
        return NextResponse.json(await appRepo.getTop3MostEnrolledCourses());

      case "avgCompletedCHperMajor":
        return NextResponse.json(await appRepo.getAvgCompletedCHPerMajor());

      case "averageGPAperMajor":
        return NextResponse.json(await appRepo.getAverageGPAperMajor());

      case "top5mostStudentInstructor":
        return NextResponse.json(await appRepo.getTop5MostStudentInstructor());

      case "avgClassSizePerCourse":
        return NextResponse.json(await appRepo.getAvgClassSizePerCourse());

      case "failRatePerCourse":
        return NextResponse.json(await appRepo.getFailRatePerCourse());

      case "totalStudentsPerSemester":
        return NextResponse.json(await appRepo.getTotalStudentsPerSemester());

      case "top3StudentsByGPA":
        return NextResponse.json(await appRepo.getTop3StudentsByGPA());

      case "passRatePerCourse":
        return NextResponse.json(await appRepo.getPassRatePerCourse());

      default:
        return NextResponse.json(
          { error: "Invalid type parameter" },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error(`[STATISTICS ERROR - ${type}]`, error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
