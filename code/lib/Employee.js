// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        
            if (typeof name !== 'string' || typeof id !== 'number' || typeof email !== 'string') {
              throw new Error('Invalid input type. Expected: (string, number, string)');
            }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;