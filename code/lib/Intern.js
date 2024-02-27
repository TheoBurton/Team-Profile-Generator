// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)
        if (typeof school !== 'string') {
            throw new Error('Invalid input type for school. Expected: string');
        }
        
        this.school = school;
    }

    getSchool() {
        return this.school
    }


    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
