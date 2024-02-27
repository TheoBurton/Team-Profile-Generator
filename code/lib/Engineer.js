// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        if (typeof github !== 'string') {
            throw new Error('Invalid input type for GitHub username. Expected: string');
          }
        super(name, id, email)
        this.github = gitHub;
    }

    getGitHub(){
        return this.github;
    }


    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
