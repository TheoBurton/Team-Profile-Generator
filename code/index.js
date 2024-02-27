const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Function to prompt user for information
const employees = [];

function promptManager() {
    console.log("Enter the team manager's information:");
    inquirer
        .prompt([
            {
                type: "input",
                message: "Manager's name:",
                name: "name",
            },
            {
                type: "number",
                message: "Manager's ID:",
                name: "id",
            },
            {
                type: "input",
                message: "Manager's email:",
                name: "email",
            },
            {
                type: "number",
                message: "Manager's office number:",
                name: "officeNumber",
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            employees.push(manager);
            promptMenu();
        });
}

function promptEngineer() {
    console.log("Enter the engineer's information:");
    inquirer
        .prompt([
            {
                type: "input",
                message: "Engineer's name:",
                name: "name",
            },
            {
                type: "number",
                message: "Engineer's ID:",
                name: "id",
            },
            {
                type: "input",
                message: "Engineer's email:",
                name: "email",
            },
            {
                type: "input",
                message: "Engineer's GitHub username:",
                name: "github",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            employees.push(engineer);
            promptMenu();
        });
}

function promptIntern() {
    console.log("Enter the intern's information:");
    inquirer
        .prompt([
            {
                type: "input",
                message: "Intern's name:",
                name: "name",
            },
            {
                type: "number",
                message: "Intern's ID:",
                name: "id",
            },
            {
                type: "input",
                message: "Intern's email:",
                name: "email",
            },
            {
                type: "input",
                message: "Intern's school:",
                name: "school",
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            employees.push(intern);
            promptMenu();
        });
}

function promptMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
                name: "choice",
            },
        ])
        .then((answer) => {
            if (answer.choice === "Add Engineer") {
                promptEngineer();
            } else if (answer.choice === "Add Intern") {
                promptIntern();
            } else {
                generateTeamHtml();
            }
        });
}

function generateTeamHtml() {
    const html = render(employees);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, html, (err) => {
        if (err) {
            console.error("Error writing HTML file:", err);
        } else {
            console.log("HTML file generated successfully:", outputPath);
        }
    });
}

promptManager();