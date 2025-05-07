import { NextResponse } from 'next/server'
import AppRepo from '@/app/repo/app-repo'

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

  try {
    switch (type) {
      case 'totalStudentsPerMajor':
        return NextResponse.json(await AppRepo.getTotalStudentsPerMajor());

      case 'top3MostEnrolledCourses':
        return NextResponse.json(await AppRepo.getTop3MostEnrolledCourses());

      case 'passFailRatePerCourse':
        return NextResponse.json(await AppRepo.getPassFailRatePerCourse());

      case 'averageGPAperMajor':
        return NextResponse.json(await AppRepo.getAverageGPAperMajor());

      case 'averageGradePerCourse':
        return NextResponse.json(await AppRepo.getAverageGradePerCourse());

      case 'completionRateByCourse':
        return NextResponse.json(await AppRepo.getCompletionRateByCourse());

      case 'highestFailRateCourses':
        return NextResponse.json(await AppRepo.getHighestFailRateCourses());

      case 'studentsPerSemester':
        return NextResponse.json(await AppRepo.getStudentsPerSemester());

      case 'top3StudentsByGPA':
        return NextResponse.json(await AppRepo.getTop3StudentsByGPA());

      case 'averageCreditsPerMajor':
        return NextResponse.json(await AppRepo.getAverageCreditsPerMajor());

      default:
        return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
    }
  } catch (error) {
    console.error(`[STATISTICS ERROR - ${type}]`, error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}