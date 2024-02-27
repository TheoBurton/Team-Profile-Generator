// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        if (typeof officeNumber !== 'number') {
            throw new Error('Invalid input type for office number. Expected: number');
        }
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
