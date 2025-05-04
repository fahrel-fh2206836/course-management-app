'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
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

export async function getUsersAction() {
    return await appRepo.getUsers();
}

export async function getUserAction(username, password) {
    return await appRepo.getUser(username, password);
}

export async function getMajorByIdAction(majorId) {
    return await appRepo.getMajorById(majorId);
}

export async function getRegSecBySemAction(studentId, sem) {
    return await appRepo.getRegSecBySem(studentId, sem);
}   