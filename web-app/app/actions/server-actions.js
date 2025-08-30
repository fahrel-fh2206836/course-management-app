'use server'

import appRepo from '@/app/repo/app-repo';
import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';

function removeServerActionProperty(data) {
    // this is a helper function to remove the $ACTION_ID_ prefix from the keys
    for (const key in data) {
        if (key.startsWith('$ACTION_ID_')) {
            delete data[key];
            break
        }
    }

    return data;
}

export async function getSemestersAction() {
    return await appRepo.getSemesters();
}

export async function getUsersAction() {
    return await appRepo.getUsers();
}

export async function getUserAction(username, password) {
    return await appRepo.getUser(username, password);
}

export async function getUserByEmailAction(username) {
    return await appRepo.getUserByEmail(username);
}

export async function getMajorByIdAction(majorId) {
    return await appRepo.getMajorById(majorId);
}

export async function getRegistrationsByStudentIdandSemAction(studentId, sem) {
    return await appRepo.getRegistrations(studentId, sem);
}

export async function getSectionsAction(instructorId, sem, notSem) {
    return await appRepo.getSections(instructorId, sem, notSem);
}

export async function getInstructorTotalStudentSemAction(instructorId, sem) {
    return await appRepo.getInstructorTotalStudentSem(instructorId, sem);
}

export async function getCourseByStatusAction(status) {
    return await appRepo.getCourseByMajorStatus({ status: status });
}

export async function getCourseByMajorStatusAction(majorId, status) {
    return await appRepo.getCourseByMajorStatus({majorId: majorId, status: status});
}

export async function fetchLearningPathForCurrentUser() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.userId ?? session?.user?.id ?? null;

    if (!userId) {
        return {
            user: null,
            student: null,
            major: null,
            categorized: { completed: [], inProgress: [], pending: [] },
            status: "unauthenticated",
        };
    }

    const data = await appRepo.getLearningPathByUserId(userId);
    return { ...data, status: "authenticated" };
}

export async function fetchLearningPathByUserIdAction(userId) {
    return appRepo.getLearningPathByUserId(userId);
}

export async function getCompletedCreditsAction(userId) {
    return appRepo.computeCompletedCredits(userId);
}

export async function addCourseAction(course) {
    return appRepo.addCourse(course);
}

export async function updateMajorAction(majorId, updatedMajor) {
    return appRepo.updateMajor(majorId, updatedMajor);
}