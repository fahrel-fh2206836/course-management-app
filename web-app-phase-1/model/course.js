export class Course {
    constructor(courseId, courseCode, majorId, creditHour, courseName, prerequisitesCoursesId, 
        isOngoing, isRegistration) {
        this.courseId = courseId;
        this.courseCode = courseCode;
        this.majorId = majorId;
        this.creditHour = creditHour;
        this.courseName = courseName;
        this.prerequisitesCoursesId = prerequisitesCoursesId;
        this.isOngoing = isOngoing;
        this.isRegistration = isRegistration;
    }

    
    static fromJson(json) {
            return new Course(json.courseId, json.courseCode, json.majorId, json.creditHour, 
                json.courseName, json.prerequisitesCoursesId, json.isOngoing, json.isRegistration);
    }
}