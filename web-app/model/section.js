export class Section {
    constructor(sectionId, courseId, instructorId, schedule, 
        currentSeats, totalSeats, semester, location, approvalStatus, sectionStatus) {
            this.sectionId = sectionId;
            this.courseId = courseId;
            this.instructorId = instructorId;
            this.schedule = schedule;
            this.currentSeats = currentSeats;
            this.totalSeats = totalSeats;
            this.semester = semester;
            this.location = location;
            this.approvalStatus = approvalStatus;
            this.sectionStatus = sectionStatus;
        }
    
    static fromJson(json) {
        return new Section(json.sectionId, json.courseId, json.instructorId, json.schedule, 
            json.currentSeats, json.totalSeats, json.semester, json.location, json.approvalStatus, json.sectionStatus);
    }
}