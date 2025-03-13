export class Major {
    constructor(majorId, majorCode, majorName, allCoursesId, totalCreditHour) {
        this.majorId = majorId;
        this.majorCode = majorCode;
        this.majorName = majorName;
        this.allCoursesId = allCoursesId;
        this.totalCreditHour = totalCreditHour;
    }

    static fromJson(json) {
        return new Major(json.majorId, json.majorCode, json.majorName, json.allCoursesId, json.totalCreditHour);
    }
}
