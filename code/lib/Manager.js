// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        
        super(name, id, email)
        if (typeof officeNumber !== 'number') {
            throw new Error('Invalid input type for office number. Expected: number');
          }
          
          
        this.officeNumber = officeNumber;
    }


    getOfficeNumber() {
        return this.officeNumber;
      }


    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
