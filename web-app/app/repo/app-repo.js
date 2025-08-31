import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class AppRepo {
  constructor() {}

  // ===================== User Methods =====================

  async getUsers() {
    return await prisma.user.findMany();
  }

  async getUser(username, password) {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
        password: password,
      },
      include: {
        Student: true,
        Instructor: true,
        Admin: true,
      },
    });

    if (!user) {
      return { error: "Wrong credentials" };
    }
    return user;
  }

  async getUserByEmail(username) {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
      include: {
        Student: true,
        Instructor: true,
        Admin: true,
      },
    });

    if (!user) {
      return { error: "Wrong credentials" };
    }
    return user;
  }

  async getInstructors() {
    return await prisma.user.findMany({
      where: { role: "Instructor" },
      orderBy: { firstName: "asc" },
      include: {
        Instructor: {
          include: {
            major: true,
          },
        },
      },
    });
  }

  async updateStudent(studentId, updatedStudent) {
    const { gpa, finishedCreditHour } = updatedStudent;
    return await prisma.student.update({
      where: {
        userId: studentId,
      },
      data: {
        gpa,
        finishedCreditHour,
      },
    });
  }

  // ===================== Sections Methods =====================

  async getSections(
    instructorId,
    sem,
    notSem = false,
    courseId,
    approvalStatus,
    sectionStatus,
    notApproval
  ) {
    const whereOptions = {};

    if (instructorId) {
      whereOptions.instructorId = instructorId;
    }

    if (sem) {
      whereOptions.semester = notSem ? { not: sem } : sem;
    }

    if (courseId) {
      whereOptions.courseId = courseId;
    }

    if (approvalStatus) {
      whereOptions.approvalStatus = notApproval
        ? { not: approvalStatus }
        : approvalStatus;
    }

    if (sectionStatus) {
      whereOptions.sectionStatus = sectionStatus;
    }

    return await prisma.section.findMany({
      where: whereOptions,
      include: {
        course: true,
        instructor: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async getSectionById(sectionId) {
    return await prisma.section.findUnique({
      where: { sectionId },
      include: {
        course: true,
        registrations: {
          orderBy: {
            student: {
              user: {
                firstName: "asc",
              },
            },
          },
          include: {
            student: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  }

  async getInstructorTotalStudentSem(instructorId, sem) {
    let result = await prisma.section.aggregate({
      _sum: {
        currentSeats: true,
      },
      where: {
        instructorId: instructorId,
        semester: sem,
      },
    });

    if (result._sum.currentSeats == null) {
      result._sum.currentSeats = 0;
    }
    return result;
  }

  async addSection(section) {
    const regSems = await this.getSemesters();
    section.semester = regSems[regSems.length - 1].semester;
    section.currentSeats = 0;

    return await prisma.section.create({
      data: section,
    });
  }

  async updateSection(sectionId, updatedSection) {
    const { approvalStatus, sectionStatus, currentSeats } = updatedSection;
    return await prisma.section.update({
      where: { sectionId },
      data: {
        approvalStatus,
        sectionStatus,
        currentSeats,
      },
    });
  }

  // ===================== Majors Method =====================

  async getMajors() {
    return await prisma.major.findMany();
  }

  async getMajorById(majorId) {
    if (!majorId) {
      majorId = "N/A";
    }

    const major = await prisma.major.findUnique({ where: { majorId } });

    if (!major) {
      return { error: "Major does not exist" };
    }
    return major;
  }

  async updateMajor(majorId, updatedMajor) {
    return await prisma.major.update({
      where: { majorId: majorId },
      data: { ...updatedMajor },
    });
  }

  async getMajorByCode(majorCode) {
    const major = await prisma.major.findUnique({ where: { majorCode } });

    if (!major) {
      return { error: "Major does not exist" };
    }
    return major;
  }

  // ===================== Course Methods =====================

  async getCourses() {
    return await prisma.course.findMany({ orderBy: { courseName: "asc" } });
  }

  async getCourseByMajorStatus({ majorId, status } = {}) {
    const statusLow = status.toLowerCase();
    if (statusLow === "ongoing") {
      return await prisma.course.findMany({
        where: {
          ...(majorId && { majorId: majorId }),
          isOngoing: true,
        },
      });
    } else if (statusLow === "registration") {
      return await prisma.course.findMany({
        where: {
          ...(majorId && { majorId: majorId }),
          isRegistration: true,
        },
      });
    }
    return await prisma.course.findMany({
      where: {
        ...(majorId && { majorId: majorId }),
        isOngoing: false,
        isRegistration: false,
      },
    });
  }

  async getCourseByMajorId(majorId) {
    return await prisma.course.findMany({
      where: {
        majorId: majorId,
      },
    });
  }

  async getCourseById(id) {
    const course = await prisma.course.findUnique({
      where: {
        id: id,
      },
    });

    if (!course) {
      return { error: "Course does not exist " };
    }

    return course;
  }

  async getCourseByCode(code) {
    const courses = await this.getCourses();
    let comparableCode = code.toLowerCase().replace(/\s+/g, "");
    let course = courses
      .map((c) => c.courseCode.toLowerCase().replace(/\s+/g, ""))
      .includes(comparableCode);
    return course;
  }

  async getCourseByName(name) {
    return await prisma.course.findMany({
      where: {
        courseName: {
          contains: name,
        },
      },
    });
  }

  async getCourseByNameAndMajor(name, majorId) {
    return await prisma.course.findMany({
      where: {
        majorId: majorId,
        courseName: {
          contains: name,
        },
      },
    });
  }

  async addCourse(course) {
    course.isOngoing = course.isOngoing === "on" ? true : false;
    course.isRegistration = course.isRegistration === "on" ? true : false;

    const { prerequisitesCoursesId, ...courseData } = course;

    return await prisma.course.create({
      data: {
        ...courseData,
        creditHour: parseInt(course.creditHour),
        prerequisites: {
          create: prerequisitesCoursesId?.map((prereqId) => ({
            prerequisite: {
              connect: { id: prereqId },
            },
          })),
        },
      },
    });
  }

  async getCoursePrerequisites(id) {
    return await prisma.course.findUnique({
      where: { id },
      include: {
        prerequisites: {
          include: {
            prerequisite: true, // This gets the full Course object for the prerequisite
          },
        },
      },
    });
  }

  async updateCourse(id, updatedStatus) {
    return await prisma.course.update({
      where: { id },
      data: { ...updatedStatus },
    });
  }

  // ===================== Registrations Method =====================

  async getRegistrations(studentId, semester, sectionStatus) {
    const whereOptions = {
      ...(studentId && { studentId }),
      ...(semester || sectionStatus
        ? {
            section: {
              ...(semester && { semester }),
              ...(sectionStatus && { sectionStatus }),
            },
          }
        : {}),
    };

    return await prisma.registration.findMany({
      where: whereOptions,
      include: {
        section: {
          include: {
            course: true,
            instructor: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  }

  async deleteRegistrations(sectionId, studentId) {
    return await prisma.registration.deleteMany({
      where: {
        ...(sectionId && { sectionId }),
        ...(studentId && { studentId }),
      },
    });
  }

  async getStudentCompletedCourses(studentId, courseId) {
    const registration = await prisma.registration.findMany({
      where: {
        studentId,
        ...(courseId && { courseId: courseId }),
        grade: {
          notIn: ["F", ""],
        },
      },
      include: {
        section: {
          include: {
            course: true,
          },
        },
      },
    });

    if (courseId && registration.length !== 0) {
      return registration[0];
    }

    if (courseId && registration.length === 0) {
      return null;
    }

    return registration;
  }

  async hasStudentCompletedCourse(studentId, courseId) {
    const registration = await prisma.registration.findFirst({
      where: {
        studentId,
        courseId,
        grade: {
          notIn: ["F", ""],
        },
      },
    });

    console.log(
      "-----------------------------------------------------" + registration
    );
    console.log(registration !== null);
    return registration !== null;
  }

  async addRegistration(reg) {
    return await prisma.registration.create({ data: reg });
  }

  async searchRegistrations(sectionId, search) {
    const names = search.trim().split(" ");

    return await prisma.registration.findMany({
      where: {
        sectionId,
        student: {
          user: {
            AND: names.map((n) => ({
              OR: [
                { firstName: { contains: n } },
                { lastName: { contains: n } },
              ],
            })),
          },
        },
      },
      orderBy: {
        student: {
          user: {
            firstName: "asc",
          },
        },
      },
      include: {
        student: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async getRegistration(studentId, sectionId) {
    const registration = await prisma.registration.findUnique({
      where: {
        sectionId_studentId: {
          sectionId,
          studentId,
        },
      },
      include: {
        student: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!registration) {
      return { error: "Registration Not Found" };
    }
    return registration;
  }

  async updateRegistration(regId, updatedReg) {
    const { grade } = updatedReg;
    return await prisma.registration.update({
      where: { id: regId },
      data: {
        grade,
      },
    });
  }

  // ===================== Semesters Method =====================

  async getSemesters(removeSem) {
    return await prisma.semester.findMany({
      where: {
        ...(removeSem?.length > 0 && {
          semester: {
            notIn: removeSem,
          },
        }),
      },
    });
  }

  // ===================== Learning Path Methods =====================

  /**
   * Builds categorized lists for the Learning Path dashboard.
   * Rules:
   *  - Completed: grade exists (after trim) AND grade !== "F" (case-insensitive).
   *  - In progress: sectionStatus === "ONGOING" (grade must not be exposed).
   *  - Pending: everything else (includes blank grade and "F"; grade must not be exposed).
   *
   * Returns:
   *  {
   *    user: { userId, firstName, lastName } | null,
   *    student: { userId, gpa, finishedCreditHour } | null,
   *    major: { majorId, majorCode, majorName, totalCreditHour } | null,
   *    categorized: {
   *      completed: [{ courseCode, courseName, days, time, status, grade }],
   *      inProgress: [{ courseCode, courseName, days, time, status, grade: null }],
   *      pending: [{ courseCode, courseName, days, time, status, grade: null }]
   *    }
   *  }
   */
  async getLearningPathByUserId(userId) {
    // 1) User
    const user = await prisma.user.findUnique({
      where: { userId },
      select: { userId: true, firstName: true, lastName: true },
    });

    // 2) Student
    const student = await prisma.student.findUnique({
      where: { userId },
      select: {
        userId: true,
        gpa: true,
        finishedCreditHour: true,
        majorId: true,
      },
    });

    // 3) Major
    const major = student
      ? await prisma.major.findUnique({
          where: { majorId: student.majorId },
          select: {
            majorId: true,
            majorCode: true,
            majorName: true,
            totalCreditHour: true,
          },
        })
      : null;

    // 4) All courses in the student's major (for "remaining"/pending)
    const majorCourses = student
      ? await prisma.course.findMany({
          where: { majorId: student.majorId },
          select: { id: true, courseCode: true, courseName: true },
        })
      : [];

    // 5) Registrations with course + section (to compute completed & inProgress)
    const regs = student
      ? await prisma.registration.findMany({
          where: { studentId: student.userId },
          include: {
            course: {
              select: { id: true, courseCode: true, courseName: true },
            },
            section: {
              select: { days: true, time: true, sectionStatus: true },
            },
          },
        })
      : [];

    const categorized = { completed: [], inProgress: [], pending: [] };
    const completedIds = new Set();
    const inProgressIds = new Set();

    // Build completed & inProgress from registrations
    for (const r of regs) {
      const status = r.section?.sectionStatus ?? null; // COMPLETED | ONGOING | OPEN_REGISTRATION
      const rawGrade = (r.grade ?? "").trim();
      const gradeUpper = rawGrade.toUpperCase();
      const hasValidPassingGrade = rawGrade.length > 0 && gradeUpper !== "F";

      const base = {
        courseCode: r.course?.courseCode ?? "N/A",
        courseName: r.course?.courseName ?? "Unnamed Course",
        days: r.section?.days ?? null,
        time: r.section?.time ?? null,
        status,
      };

      if (hasValidPassingGrade) {
        // ✅ Completed (grade present AND not "F")
        categorized.completed.push({ ...base, grade: rawGrade });
        if (r.course?.id) completedIds.add(r.course.id);
      } else if (status === "ONGOING") {
        // 🔄 In progress (no grade shown)
        categorized.inProgress.push({ ...base, grade: null });
        if (r.course?.id) inProgressIds.add(r.course.id);
      }
      // NOTE: do NOT push pending here; we'll compute it from the major catalog.
    }

    // 6) Pending = all major courses NOT in completed or inProgress
    for (const c of majorCourses) {
      if (!completedIds.has(c.id) && !inProgressIds.has(c.id)) {
        categorized.pending.push({
          courseCode: c.courseCode ?? "N/A",
          courseName: c.courseName ?? "Unnamed Course",
          days: null,
          time: null,
          status: null,
          grade: null,
        });
      }
    }

    return {
      user: user
        ? {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
          }
        : null,
      student: student
        ? {
            userId: student.userId,
            gpa: Number(student.gpa ?? 0),
            finishedCreditHour: Number(student.finishedCreditHour ?? 0),
          }
        : null,
      major: major
        ? {
            majorId: major.majorId,
            majorCode: major.majorCode,
            majorName: major.majorName,
            totalCreditHour: Number(major.totalCreditHour ?? 0),
          }
        : null,
      categorized,
    };
  }

  /**
   * Compute completed credits using your rules:
   *  - Count course.creditHour if (trim(grade) !== "" AND upper(grade) !== "F")
   *  - OR section.sectionStatus === "COMPLETED"
   */
  async computeCompletedCredits(userId) {
    if (!userId) return 0;

    const regs = await prisma.registration.findMany({
      where: { studentId: userId },
      include: {
        course: { select: { creditHour: true } },
        section: { select: { sectionStatus: true } },
      },
    });

    let credits = 0;

    for (const r of regs) {
      const rawGrade = (r.grade ?? "").trim();
      const gradeUpper = rawGrade.toUpperCase();
      const sectionCompleted = r.section?.sectionStatus === "COMPLETED";

      const hasPassingGrade = rawGrade.length > 0 && gradeUpper !== "F";

      if (hasPassingGrade && sectionCompleted) {
        credits += Number(r.course?.creditHour ?? 0);
      }
    }

    return credits;
  }

  // ===================== Statistics =====================

  async getTotalStudentsPerMajor() {
    const grouped = await prisma.student.groupBy({
      by: ["majorId"],
      _count: true,
    });

    const majors = await prisma.major.findMany({
      where: { majorId: { in: grouped.map((g) => g.majorId) } },
      select: { majorId: true, majorName: true },
    });

    const majorMap = new Map(majors.map((m) => [m.majorId, m.majorName]));

    return grouped.map((g) => ({
      label: majorMap.get(g.majorId),
      value: g._count,
    }));
  }

  async getTop3MostEnrolledCourses() {
    const grouped = await prisma.registration.groupBy({
      by: ["courseId"],
      _count: true,
      orderBy: { _count: { courseId: "desc" } },
      take: 3,
    });

    const courses = await prisma.course.findMany({
      where: { id: { in: grouped.map((g) => g.courseId) } },
      select: { id: true, courseName: true },
    });

    const courseMap = new Map(courses.map((c) => [c.id, c.courseName]));

    return grouped.map((g) => ({
      label: courseMap.get(g.courseId),
      value: g._count,
    }));
  }

  async getAverageGPAperMajor() {
    const grouped = await prisma.student.groupBy({
      by: ["majorId"],
      _avg: { gpa: true },
    });

    const majors = await prisma.major.findMany({
      where: { majorId: { in: grouped.map((g) => g.majorId) } },
      select: { majorId: true, majorName: true },
    });

    const majorMap = new Map(majors.map((m) => [m.majorId, m.majorName]));

    return grouped.map((g) => ({
      label: majorMap.get(g.majorId),
      value: Number(g._avg.gpa?.toFixed(2) || 0),
    }));
  }

  async getAvgCompletedCHPerMajor() {
    const grouped = await prisma.student.groupBy({
      by: ["majorId"],
      _avg: { finishedCreditHour: true },
    });

    const majors = await prisma.major.findMany({
      where: { majorId: { in: grouped.map((g) => g.majorId) } },
      select: { majorId: true, majorName: true },
    });

    const majorMap = new Map(majors.map((m) => [m.majorId, m.majorName]));

    return grouped.map((g) => ({
      label: majorMap.get(g.majorId),
      value: Number(g._avg.finishedCreditHour.toFixed(2)),
    }));
  }

  async getTotalStudentsPerSemester() {
    const grouped = await prisma.section.groupBy({
      by: ["semester"],
      _sum: { currentSeats: true },
    });

    return grouped.map((g) => ({
      label: g.semester,
      value: g._sum.currentSeats,
    }));
  }

  async getTop3StudentsByGPA() {
    const students = await prisma.student.findMany({
      orderBy: { gpa: "desc" },
      take: 3,
      include: { user: true },
    });

    return students.map((s) => ({
      label: `${s.user.firstName} ${s.user.lastName}`,
      value: Number(s.gpa.toFixed(2)),
    }));
  }

  async getTop5MostStudentInstructor() {
    const grouped = await prisma.section.groupBy({
      by: ["instructorId"],
      _sum: { currentSeats: true },
      orderBy: { _sum: { currentSeats: "desc" } },
      take: 5,
    });

    const instructors = await prisma.user.findMany({
      where: { userId: { in: grouped.map((g) => g.instructorId) } },
      select: { userId: true, firstName: true, lastName: true },
    });

    const instructorMap = new Map(
      instructors.map((i) => [i.userId, `${i.firstName} ${i.lastName}`])
    );

    return grouped.map((g) => ({
      label: instructorMap.get(g.instructorId),
      value: g._sum.currentSeats,
    }));
  }

  async getAvgClassSizePerCourse() {
    const grouped = await prisma.section.groupBy({
      by: ["courseId"],
      _avg: { currentSeats: true },
      orderBy: { _avg: { currentSeats: "desc" } },
    });

    const courses = await prisma.course.findMany({
      where: { id: { in: grouped.map((g) => g.courseId) } },
      select: { id: true, courseName: true },
    });

    const courseMap = new Map(courses.map((c) => [c.id, c.courseName]));

    return grouped.map((g) => ({
      label: courseMap.get(g.courseId),
      value: Number(g._avg.currentSeats.toFixed(2)),
    }));
  }

  async getFailRatePerCourse() {
    const total = await prisma.registration.groupBy({
      by: ["courseId"],
      _count: true,
      where: {
        NOT: {
          grade: "",
        },
      },
    });

    const fails = await prisma.registration.groupBy({
      by: ["courseId"],
      _count: { _all: true },
      where: { grade: { in: ["F", "f"] } },
    });

    const failMap = new Map(fails.map((f) => [f.courseId, f._count._all]));

    const courses = await prisma.course.findMany({
      where: { id: { in: total.map((t) => t.courseId) } },
      select: { id: true, courseName: true },
    });

    const courseMap = new Map(courses.map((c) => [c.id, c.courseName]));

    return total.map((t) => {
      const failCount = failMap.get(t.courseId);
      const rate = ((failCount ?? 0) / t._count) * 100;
      return {
        label: courseMap.get(t.courseId),
        value: `${Number(rate.toFixed(2))} %`,
      };
    });
  }

  async getPassRatePerCourse() {
    const total = await prisma.registration.groupBy({
      by: ["courseId"],
      _count: true,
      where: {
        NOT: {
          grade: "",
        },
      },
    });

    const passes = await prisma.registration.groupBy({
      by: ["courseId"],
      _count: { _all: true },
      where: {
        NOT: {
          grade: { in: ["F", "f", ""] },
        },
      },
    });

    const passMap = new Map(passes.map((p) => [p.courseId, p._count._all]));

    const courses = await prisma.course.findMany({
      where: { id: { in: total.map((t) => t.courseId) } },
      select: { id: true, courseName: true },
    });

    const courseMap = new Map(courses.map((c) => [c.id, c.courseName]));

    return total.map((t) => {
      const passCount = passMap.get(t.courseId);
      const rate = ((passCount ?? 0) / t._count) * 100;
      return {
        label: courseMap.get(t.courseId),
        value: `${Number(rate.toFixed(2))} %`,
      };
    });
  }
}

export default new AppRepo();
