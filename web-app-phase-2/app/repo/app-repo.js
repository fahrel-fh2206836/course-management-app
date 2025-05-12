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

  async getCourseByMajorStatus(majorId, status) {
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

  async getStudentById(userId) {
    return await prisma.user.findUnique({
      where: { userId },
      include: {
        Student: true,
      },
    });
  }

  async getRegistrationsByStudentId(studentId) {
    return await prisma.registration.findMany({
      where: { studentId },
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

  async getCoursesByMajor(majorId) {
    return await prisma.course.findMany({
      where: { majorId },
    });
  }

  async getMajorById(majorId) {
    return await prisma.major.findUnique({
      where: { majorId },
    });
  }

  async getLearningPathData(userId) {
    const user = await this.getStudentById(userId);

    if (!user || !user.Student) {
      return { error: "User not found or not a student" };
    }

    const studentInfo = user.Student;
    const major = await this.getMajorById(studentInfo.majorId);

    if (!major) {
      return { error: "Major not found" };
    }

    const courses = await this.getCoursesByMajor(studentInfo.majorId);
    const registrations = await this.getRegistrationsByStudentId(user.userId);

    return {
      student: {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        gpa: studentInfo.gpa,
        finishedCreditHour: studentInfo.finishedCreditHour,
        majorId: studentInfo.majorId,
      },
      major,
      courses,
      registrations,
    };
  }

  // ===================== Statistics =====================

  async getTotalStudentsPerMajor() {
  const grouped = await prisma.student.groupBy({
    by: ["majorId"],
    _count: true,
  });

  const majors = await prisma.major.findMany({
    where: { majorId: { in: grouped.map(g => g.majorId) } },
    select: { majorId: true, majorName: true },
  });

  const majorMap = new Map(majors.map(m => [m.majorId, m.majorName]));

  return grouped.map(g => ({
    label: majorMap.get(g.majorId) || "Unknown",
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
    where: { id: { in: grouped.map(g => g.courseId) } },
    select: { id: true, courseName: true },
  });

  const courseMap = new Map(courses.map(c => [c.id, c.courseName]));

  return grouped.map(g => ({
    label: courseMap.get(g.courseId) || "Unknown",
    value: g._count,
  }));
}

async getAverageGPAperMajor() {
  const grouped = await prisma.student.groupBy({
    by: ["majorId"],
    _avg: { gpa: true },
  });

  const majors = await prisma.major.findMany({
    where: { majorId: { in: grouped.map(g => g.majorId) } },
    select: { majorId: true, majorName: true },
  });

  const majorMap = new Map(majors.map(m => [m.majorId, m.majorName]));

  return grouped.map(g => ({
    label: majorMap.get(g.majorId) || "Unknown",
    value: Number(g._avg.gpa?.toFixed(2) || 0),
  }));
}

async getAvgCompletedCHPerMajor() {
  const grouped = await prisma.student.groupBy({
    by: ["majorId"],
    _avg: { finishedCreditHour: true },
  });

  const majors = await prisma.major.findMany({
    where: { majorId: { in: grouped.map(g => g.majorId) } },
    select: { majorId: true, majorName: true },
  });

  const majorMap = new Map(majors.map(m => [m.majorId, m.majorName]));

  return grouped.map(g => ({
    label: majorMap.get(g.majorId) || "Unknown",
    value: Number(g._avg.finishedCreditHour?.toFixed(2) || 0),
  }));
}

async getStudentsPerSemester() {
  const grouped = await prisma.section.groupBy({
    by: ["semester"],
    _sum: { currentSeats: true },
  });

  return grouped.map(g => ({
    label: g.semester,
    value: g._sum.currentSeats || 0,
  }));
}

async getTop3StudentsByGPA() {
  const students = await prisma.student.findMany({
    orderBy: { gpa: "desc" },
    take: 3,
    include: { user: true },
  });

  return students.map(s => ({
    label: `${s.user.firstName} ${s.user.lastName}`,
    value: Number(s.gpa?.toFixed(2) || 0),
  }));
}

async getMostActiveInstructor() {
  const grouped = await prisma.section.groupBy({
    by: ["instructorId"],
    _sum: { currentSeats: true },
    orderBy: { _sum: { currentSeats: "desc" } },
    take: 5,
  });

  const instructors = await prisma.user.findMany({
    where: { userId: { in: grouped.map(g => g.instructorId) } },
    select: { userId: true, firstName: true, lastName: true },
  });

  const instructorMap = new Map(
    instructors.map(i => [i.userId, `${i.firstName} ${i.lastName}`])
  );

  return grouped.map(g => ({
    label: instructorMap.get(g.instructorId) || "Unknown",
    value: g._sum.currentSeats || 0,
  }));
}

async getAvgClassSizePerCourse() {
  const grouped = await prisma.section.groupBy({
    by: ["courseId"],
    _avg: { currentSeats: true },
    orderBy: { _avg: { currentSeats: "desc" } },
  });

  const courses = await prisma.course.findMany({
    where: { id: { in: grouped.map(g => g.courseId) } },
    select: { id: true, courseName: true },
  });

  const courseMap = new Map(courses.map(c => [c.id, c.courseName]));

  return grouped.map(g => ({
    label: courseMap.get(g.courseId) || "Unknown",
    value: Number(g._avg.currentSeats?.toFixed(2) || 0),
  }));
}

async getFailRatePerCourse() {
  const total = await prisma.registration.groupBy({
    by: ["courseId"],
    _count: true,
  });

  const fails = await prisma.registration.groupBy({
    by: ["courseId"],
    _count: { _all: true },
    where: { grade: { in: ["F", "f"] } },
  });

  const failMap = new Map(fails.map(f => [f.courseId, f._count._all]));

  const courses = await prisma.course.findMany({
    where: { id: { in: total.map(t => t.courseId) } },
    select: { id: true, courseName: true },
  });

  const courseMap = new Map(courses.map(c => [c.id, c.courseName]));

  return total.map(t => {
    const failCount = failMap.get(t.courseId) || 0;
    const rate = (failCount / t._count) * 100;
    return {
      label: courseMap.get(t.courseId) || "Unknown",
      value: `${Number(rate.toFixed(2))} %`,
    };
  });
}

async getPassRatePerCourse() {
  const total = await prisma.registration.groupBy({
    by: ["courseId"],
    _count: true,
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

  const passMap = new Map(passes.map(p => [p.courseId, p._count._all]));

  const courses = await prisma.course.findMany({
    where: { id: { in: total.map(t => t.courseId) } },
    select: { id: true, courseName: true },
  });

  const courseMap = new Map(courses.map(c => [c.id, c.courseName]));

  return total.map(t => {
    const passCount = passMap.get(t.courseId) || 0;
    const rate = (passCount / t._count) * 100;
    return {
      label: courseMap.get(t.courseId) || "Unknown",
      value: `${Number(rate.toFixed(2))} %`,
    };
  });
}
}

export default new AppRepo();
