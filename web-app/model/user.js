// Acts like an abstract class.
export class User {
    #password;
    constructor(userId, firstName, lastName, username, password,role) {
        if (this.constructor == User) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.role = role;
        this.#password = password;
    }

    get password() {
        return this.#password;
    }
}

export class Admin extends User {
    constructor(userId, firstName, lastName, username, password) {
        super(userId, firstName, lastName, username, password, "ADMIN");
    }

    static fromJson(json) {
        return new Admin(json.userId, json.firstName, json.lastName, json.username, json.password);
    }
}

export class Student extends User {
    constructor(userId, firstName, lastName, username, password, majorId, gpa, finishedCreditHour) {
        super(userId, firstName, lastName, username, password, "STUDENT");
        this.majorId = majorId;
        this.gpa = gpa;
        this.finishedCreditHour = finishedCreditHour;
    }

    static fromJson(json) {
        return new Student(json.userId, json.firstName, json.lastName, json.username, 
            json.password, json.majorId, json.gpa, json.finishedCreditHour
        );
    }

    // calculateGPA() {}
}

export class Teacher extends User {
    constructor(userId, firstName, lastName, username, password, majorId) {
        super(userId, firstName, lastName, username, password, "INSTRUCTOR");
        this.majorId = majorId;
    }

    static fromJson(json) {
        return new Teacher(json.userId, json.firstName, json.lastName, json.username, json.password, json.majorId);
    }

    // getTotalCurrentStudents() {}
}
