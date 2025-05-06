import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AppRepo {
    constructor() {}

    async getUsers() {
        return await prisma.user.findMany();
    }

    async getSemesters() {
      return await prisma.semester.findMany();
    }

    async getMajors() {
      return await prisma.major.findMany();
    }
 
    async getUser(username, password) {
        const user = await prisma.user.findUnique({
            where: {
              username: username,
              password: password
            },
            include: {
              Student: true,
              Instructor: true,
              Admin: true
            }
          });
        
        if(!user) {
            return { error: "Wrong credentials" }
        }
        return user;
    }

    async getMajorById(majorId) {
      if (!majorId) {
        majorId = "N/A";
      }
      
      const major = await prisma.major.findUnique({where: {majorId}});

      if(!major) {
        return { error: "Major does not exist" }
      }
      return major;
    }

    async getRegSecBySem(studentId, sem) {
        return await prisma.registration.findMany({
            where: {
              studentId: studentId,
              section: {
                semester: sem,
              }
            },
            include: {
              section: {
                include: {
                  course: true,
                  instructor: {
                    include: {
                      user: true
                    }
                  }
                }
              }
            }
          }); 
    }

    async getInstructorSecBySem(instructorId, sem, notSem) {
      if(notSem)
      return await prisma.section.findMany({
        where: {
          instructorId: instructorId,
          semester: {
            not: sem
          }
        },
        include: {
          course: true
        },
      });
        return await prisma.section.findMany({
          where: {
            instructorId: instructorId,
            semester: sem
          },
          include: {
            course: true
          },
        });
    }

    async getInstructorTotalStudentSem(instructorId, sem) {
      let result = await prisma.section.aggregate({
        _sum: {
          currentSeats: true
        },
        where: {
          instructorId: instructorId,
          semester: sem
        }
      });

      if(!result) {
        result = 0;
      }
      return result;
    }

    async getSectionBySem(sem) {
      return await prisma.section.findMany({
        where: {
          semester: sem
        }, 
        include: {
          course: true,
          instructor: {
            include: {
              user: true
            }
          }
        }
      });
    }

    async getCourseByStatus(status) {
      const statusLow = status.toLowerCase()
      if(statusLow === "ongoing") {
        return await prisma.course.findMany(
          {
            where: {
              isOngoing: true,
          }
        });
      } else if(statusLow === "registration") {
        return await prisma.course.findMany(
          {
            where: {
              isRegistration: true,
          }
        });
      }
      return await prisma.course.findMany(
        {
          where: {
            isRegistration: false,
            isOngoing: false
        }
      });
    }

    async getCourseByMajorStatus(majorId, status) {
      const statusLow = status.toLowerCase()
      if(statusLow === "ongoing") {
        return await prisma.course.findMany(
          {
            where: {
              majorId: majorId,
              isOngoing: true,
          }
        });
      } else if(statusLow === "registration") {
        return await prisma.course.findMany(
          {
            where: {
              majorId: majorId,
              isRegistration: true,
          }
        });
      }
      return await prisma.course.findMany({
        where: {
          majorId: majorId,
          isOngoing: false,
          isRegistration: false
        }
      });
    }

    async getCourseByMajorId(majorId) {
      return await prisma.course.findMany({
        where: {
          majorId: majorId,
        }
      });
    }
    
    async addCourse(course) {
      course.isOngoing = course.isOngoing === "on" ? true : false;
      course.isRegistration = course.isRegistration === "on" ? true : false;
      return await prisma.course.create({data: {course}});
    }

    async updateMajor(majorId, updatedMajor) {
      return await prisma.major.update({where: {majorId: majorId}, data: {updatedMajor}});
    }
}

export default new AppRepo();