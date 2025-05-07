import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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

    async getUserByEmail(username){
      const user = await prisma.user.findUnique({
        where: {
          username: username
        },
        include:{
          Student: true,
          Instructor: true,
          Admin: true
        }
      });

      if (!user){
        return { error: "Wrong credentials" }
      }
      return user;
    }


    // ===================== Sections Methods ===================== 

      async getSections(instructorId, sem, notSem = false) {
        const whereClause = {};
      
        if (instructorId) {
          whereClause.instructorId = instructorId;
        }
      
        if (sem) {
          whereClause.semester = notSem ? { not: sem } : sem;
        }
      
        return await prisma.section.findMany({
          where: whereClause,
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

      async getSectionById(sectionId) {
        return await prisma.section.findUnique({
          where: {
            sectionId: sectionId
          }, include: {
            course: true
          }
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
  
        if(result._sum.currentSeats == null) {
          result._sum.currentSeats = 0;
        }
        return result;
      }


    // ===================== Majors Method =====================

      async getMajors() {
        return await prisma.major.findMany();
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

      async updateMajor(majorId, updatedMajor) {
        return await prisma.major.update({where: {majorId: majorId}, data: {updatedMajor}});
      }


    // ===================== Course Methods =====================

      async getCourses() {
        return await prisma.course.findMany();
      }

      async getCourseByMajorStatus(majorId, status) {
        const statusLow = status.toLowerCase()
        if(statusLow === "ongoing") {
          return await prisma.course.findMany(
            {
              where: {
                ...(majorId && { majorId: majorId }),
                isOngoing: true,
            }
          });
        } else if(statusLow === "registration") {
          return await prisma.course.findMany(
            {
              where: {
                ...(majorId && { majorId: majorId }),
                isRegistration: true,
            }
          });
        }
        return await prisma.course.findMany({
          where: {
            ...(majorId && { majorId: majorId }),
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

      async getCourseById(id) {
        const course = await prisma.course.findUnique({
          where: {
            id: id
          }
        })

        if(!course) {
          return { error: "Course does not exist "}
        }

        return course;
      }
      
      async addCourse(course) {
        course.isOngoing = course.isOngoing === "on" ? true : false;
        course.isRegistration = course.isRegistration === "on" ? true : false;
        return await prisma.course.create({data: {course}});
      }




    // ===================== Registrations Method =====================

      async getRegistrations() {
        return await prisma.registration.findMany();
      }

      async getStudentRegSecBySem(studentId, sem) {
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

    // ===================== Semesters Method =====================

      async getSemesters(removeSem) {
        return await prisma.semester.findMany({
          where: {
            ...(removeSem?.length > 0 && {
              semester: {
                notIn: removeSem
              }
            })
          }
        });
      }

    // ===================== Learning Path Methods =====================

      async getStudentById(userId) {
        return await prisma.user.findUnique({
          where: { userId },
          include: {
            Student: true,
            Instructor: true,
            Admin: true
          }
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
                    user: true
                  }
                }
              }
            }
          }
        });
      }

      async getCoursesByMajor(majorId) {
        return await prisma.course.findMany({
          where: { majorId }
        });
      }

      async getMajorById(majorId) {
        return await prisma.major.findUnique({
          where: { majorId }
        });
      }

      async getLearningPathData(userId) {
        const student = await this.getStudentById(userId);
        if (!student || !student.Student) {
          return { error: "Not a student or user not found" };
        }

        const studentId = student.userId;
        const majorId = student.majorId;

        const major = await this.getMajorById(majorId);
        if (!major) {
          return { error: "Major not found" };
        }

        const courses = await this.getCoursesByMajor(majorId);
        const registrations = await this.getRegistrationsByStudentId(studentId);

        return {
          student,
          major,
          courses,
          registrations
        };
      }
}

export default new AppRepo();