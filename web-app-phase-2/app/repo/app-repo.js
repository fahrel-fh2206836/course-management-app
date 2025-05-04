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

}

export default new AppRepo();