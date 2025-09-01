import fs from "fs-extra";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const baseDir = "app/data"; // where your JSON files live

async function readJSON(filename) {
  const filePath = path.join(process.cwd(), baseDir, filename);
  return fs.readJSON(filePath);
}

function chunk(arr, size = 1000) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function createManyChunked(model, data, options = {}) {
  if (!data || data.length === 0) return;
  for (const part of chunk(data, options.chunkSize || 1000)) {
    await model.createMany({
      data: part,
      skipDuplicates: options.skipDuplicates !== false, // default true
    });
  }
}

async function seed() {
  console.log("🌱 Seeding Postgres via Prisma (chunked, no global tx)…");

  try {
    // Optional: increase Postgres statement timeout for this session (30s)
    // (Works on Postgres; harmless if provider ignores it)
    try {
      await prisma.$executeRawUnsafe(`SET statement_timeout TO '30000ms'`);
    } catch {
      /* ignore if not supported */
    }

    // Load data
    const majors = await readJSON("majors.json");
    const users = await readJSON("users.json");
    const admins = await readJSON("admins.json");
    const students = await readJSON("students.json");
    const instructors = await readJSON("instructors.json");
    const courses = await readJSON("courses.json");
    const coursesPre = await readJSON("course_prerequisites.json");
    const sections = await readJSON("sections.json");
    const registrations = await readJSON("registrations.json");

    // Seed in FK-safe order, one table at a time (no long-running transaction)
    await createManyChunked(prisma.semester, [
      { semester: "Spring 2024" },
      { semester: "Fall 2024" },
      { semester: "Spring 2025" },
      { semester: "Fall 2025" },
    ]);

    await createManyChunked(prisma.major, majors);
    await createManyChunked(prisma.user, users);
    await createManyChunked(prisma.admin, admins);
    await createManyChunked(prisma.student, students);
    await createManyChunked(prisma.instructor, instructors);
    await createManyChunked(prisma.course, courses);

    // This table was timing out — seed it in smaller chunks
    await createManyChunked(prisma.coursePrerequisite, coursesPre, {
      chunkSize: 500,
    });

    await createManyChunked(prisma.section, sections, { chunkSize: 1000 });
    await createManyChunked(prisma.registration, registrations, {
      chunkSize: 1000,
    });

    console.log("✅ Seeding finished.");
  } catch (e) {
    console.error("❌ Seed failed:", e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

seed();
