// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email)
        if (typeof gitHub !== 'string') {
            throw new Error('Invalid input type for GitHub username. Expected: string');
        }
        
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }


    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
