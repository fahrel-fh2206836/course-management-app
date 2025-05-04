import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AppRepo {
    constructor() {}

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

}

export default new AppRepo();