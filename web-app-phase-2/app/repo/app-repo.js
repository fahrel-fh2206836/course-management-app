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

    async getInstructors() {
      return await prisma.user.findMany({
        where: { role: 'Instructor' },
        orderBy: { firstName: 'asc' },
        include: {
          Instructor: {
            include: {
              major: true
            }
          }
        }
      });
    }


    // ===================== Sections Methods ===================== 
    
      async getSections(instructorId, sem, notSem = false, courseId, approvalStatus, sectionStatus) {
        const whereClause = {};
      
        if (instructorId) {
          whereClause.instructorId = instructorId;
        }
      
        if (sem) {
          whereClause.semester = notSem ? { not: sem } : sem;
        }

        if(courseId) {
          whereClause.courseId = courseId;
        }

        if(approvalStatus) {
          whereClause.approvalStatus = approvalStatus;
        }

        if(sectionStatus) {
          whereClause.sectionStatus = sectionStatus;
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

      async addSection(section) {
        const regSems = await this.getSemesters();
        section.semester = regSems[regSems.length-1].semester;
        section.currentSeats = 0;
  
        return await prisma.section.create({
          data: section
        })
      }

      async updateSection(sectionId, updatedSection) {
        const {approvalStatus, sectionStatus, currentSeats} = updatedSection;
        return await prisma.section.update({
        where: { sectionId },
        data: {
          approvalStatus,
          sectionStatus,
          currentSeats
        }
      })
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
        return await prisma.major.update({where: {majorId: majorId}, data: {...updatedMajor}});
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

      async getCourseByCode(code) {
        const courses = await this.getCourses();
        let comparableCode = code.toLowerCase().replace(/\s+/g, '');
        let course = courses.map(c => c.courseCode.toLowerCase().replace(/\s+/g, '')).includes(comparableCode);
        return course;
      }

      async getCourseByName(name) {
        return await prisma.course.findMany({
          where: {
            courseName: {
              contains: name,
            }
          }
        });
      }

      async getCourseByNameAndMajor(name, majorId) {
        return await prisma.course.findMany({
          where: {
            majorId: majorId,
            courseName: {
              contains: name,
            }
          }
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
                    create: prerequisitesCoursesId?.map(prereqId => ({
                        prerequisite: {
                            connect: { id: prereqId }
                        }
                    }))
                }
            }
        });
    }

    async getCoursePrerequisites(id){
      return await prisma.course.findUnique({
        where: { id },
        include: {
          prerequisites: {
            include: {
              prerequisite: true  // This gets the full Course object for the prerequisite
            }
          }
        }
      });
    }

    async updateCourse(id, updatedStatus) {
      return await prisma.course.update({
        where: { id },
        data: {...updatedStatus}
      })
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

      async deleteRegsBySecId(sectionId) {
        return await prisma.registration.deleteMany({
          where: { sectionId }
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
          Student: true
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
          majorId: studentInfo.majorId
        },
        major,
        courses,
        registrations
      };
    }
  


  // ===================== Students Statistics =====================

  

        async getTotalStudentsPerMajor() {
        return await prisma.student.groupBy({
          by: ['majorId'],
          _count: true
        });
      }


      async getTop3MostEnrolledCourses() {
        return await prisma.registration.groupBy({
          by: ['courseId'],
          _count: true,
          orderBy: {
            _count: {
              courseId: 'desc'
            }
          },
          take: 3
        });
      }


      async getPassFailRatePerCourse() {
        const passes = await prisma.registration.groupBy({
          by: ['courseId'],
          _count: {
            _all: true
          },
          where: {
            NOT: {
              grade: {
                in: ["F", "f", ""]
              }
            }
          }
        });

        const fails = await prisma.registration.groupBy({
          by: ['courseId'],
          _count: {
            _all: true
          },
          where: {
            grade: {
              in: ["F", "f"]
            }
          }
        });

        return { passes, fails };
      }


      async getAverageGPAperMajor() {
        return await prisma.student.groupBy({
          by: ['majorId'],
          _avg: {
            gpa: true
          }
        });
      }


      async getAverageGradePerCourse() {
        return await prisma.registration.groupBy({
          by: ['courseId'],
          _avg: {
            gradeNumeric: true 
          }
        });
      }


      async getCompletionRateByCourse() {
        return await prisma.registration.groupBy({
          by: ['courseId'],
          _count: {
            _all: true
          }
        });
      }


      async getHighestFailRateCourses() {
        return await prisma.registration.groupBy({
          by: ['courseId'],
          _count: {
            _all: true
          },
          where: {
            grade: {
              in: ["F", "f"]
            }
          },
          orderBy: {
            _count: {
              courseId: 'desc'
            }
          },
          take: 5
        });
      }


      async getStudentsPerSemester() {
        return await prisma.section.groupBy({
          by: ['semester'],
          _sum: {
            currentSeats: true
          }
        });
      }


      async getTop3StudentsByGPA() {
        return await prisma.student.findMany({
          orderBy: {
            gpa: 'desc'
          },
          take: 3,
          include: {
            user: true
          }
        });
      }

      async getAverageCreditsPerMajor() {
        return await prisma.student.groupBy({
          by: ['majorId'],
          _avg: {
            finishedCreditHour: true
          }
        });
}}

export default new AppRepo();