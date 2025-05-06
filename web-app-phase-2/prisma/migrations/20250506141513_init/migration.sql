-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Section" (
    "sectionId" TEXT NOT NULL PRIMARY KEY,
    "currentSeats" INTEGER NOT NULL,
    "totalSeats" INTEGER NOT NULL,
    "days" TEXT,
    "time" TEXT,
    "location" TEXT,
    "approvalStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "sectionStatus" TEXT NOT NULL DEFAULT 'OPEN_REGISTRATION',
    "courseId" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    CONSTRAINT "Section_semester_fkey" FOREIGN KEY ("semester") REFERENCES "Semester" ("semester") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Section_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Section_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Section" ("approvalStatus", "courseId", "currentSeats", "days", "instructorId", "location", "sectionId", "sectionStatus", "semester", "time", "totalSeats") SELECT "approvalStatus", "courseId", "currentSeats", "days", "instructorId", "location", "sectionId", "sectionStatus", "semester", "time", "totalSeats" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
