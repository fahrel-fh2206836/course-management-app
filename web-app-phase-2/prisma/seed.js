import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const baseUrl = 'app/data/'

async function getData(filename) {
    const filePath = path.join(process.cwd(), filename);
    return await fs.readJSON(filePath)
}

async function seed() {
    console.log("Seeding Databse...");
    
    const majors = await getData(`${baseUrl}majors.json`);
    const users = await getData(`${baseUrl}users.json`);
    const admins = await getData(`${baseUrl}admins.json`);
    const students = await getData(`${baseUrl}students.json`);
    const instructors = await getData(`${baseUrl}instructors.json`);
    const courses = await getData(`${baseUrl}courses.json`);
    const coursesPre = await getData(`${baseUrl}course_prerequisites.json`);
    const sections = await getData(`${baseUrl}sections.json`);
    const registrations = await getData(`${baseUrl}registrations.json`);
  
    await prisma.major.createMany({ data: majors });
    await prisma.user.createMany({ data: users });
    await prisma.admin.createMany({ data: admins });
    await prisma.student.createMany({ data: students });
    await prisma.instructor.createMany({ data: instructors });
    await prisma.course.createMany({ data: courses });
    await prisma.coursePrerequisite.createMany({ data: coursesPre });
    await prisma.section.createMany({ data: sections });
    await prisma.registration.createMany({ data: registrations });
}

seed().then(async () => {
    console.log('Seeding finished.');
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1)
})