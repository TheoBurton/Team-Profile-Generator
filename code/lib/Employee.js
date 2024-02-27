// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {

        if (typeof name !== 'string' || typeof email !== 'string') {
            throw new Error('Invalid input type. Expected: String');
        }

        if (typeof id !== 'number') {
            throw new Error('Invalid input type for office number. Expected: number');
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