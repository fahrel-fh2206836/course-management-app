'use server'

import appRepo from '@/app/repo/app-repo';

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

export async function getUserByEmailAction(username){
    return await appRepo.getUserByEmail(username);
}

export async function getMajorByIdAction(majorId) {
    return await appRepo.getMajorById(majorId);
}

export async function getRegistrationsAction(studentId, sem) {
    return await appRepo.getRegistrations(studentId, sem);
}   

export async function getSectionsAction(instructorId, sem, notSem) {
    return await appRepo.getSections(instructorId, sem, notSem);
}

export async function getInstructorTotalStudentSemAction(instructorId, sem) {
    return await appRepo.getInstructorTotalStudentSem(instructorId, sem);
}

export async function getCourseByStatusAction(status) {
    return await appRepo.getCourseByStatus(status);
}

export async function getCourseByMajorStatusAction(majorId, status) {
    return await appRepo.getCourseByMajorStatus(majorId, status);
}