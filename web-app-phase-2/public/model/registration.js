export class Registration {
    constructor(sectionId, studentId, grade) {
        this.sectionId = sectionId;
        this.studentId = studentId;
        this.grade = grade;
    }

    static fromJson(json) {
        return new Registration(json.sectionId, json.studentId, json.grade);
    }
}