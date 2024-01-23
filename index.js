const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("./src/page-template.js");

const team = [];
const menuOption = "";

const createManager = () => {
    inquirer
    .prompt([
        {
            type:"input",
            message: "Name:",
            name: "name"
        },
        {
            type:"input",
            message: "Employee ID:",
            name: "id"
        },
        {
            type:"input",
            message: "Email Address:",
            name: "email"
        },
        {
            type:"input",
            message: "Office Number:",
            name: "officeNumber"
        }
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
    });
    menuOption = showMenu();
};

const showMenu = () => {
    inquirer
    .prompt([
        {
            type:"list",
            message: "Select next action",
            name: "option",
            choices:[
                "Add an engineer",
                "Add an intern",
                "Finish building the team",
            ]
        }
    ])
    .then((data) => {
        return data.option;
    });
};

const createEngineer = () => {
    inquirer
    .prompt([
        {
            type:"input",
            message: "Engineer's Name:",
            name: "name"
        },
        {
            type:"input",
            message: "Employee ID:",
            name: "id"
        },
        {
            type:"input",
            message: "Email Address:",
            name: "email"
        },
        {
            type:"input",
            message: "GitHub Username:",
            name: "github"
        }
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer)
    })
};

const createIntern = () => {
    inquirer
    .prompt([
        {
            type:"input",
            message: "Intern's Name:",
            name: "name"
        },
        {
            type:"input",
            message: "Employee ID:",
            name: "id"
        },
        {
            type:"input",
            message: "Email Address:",
            name: "email"
        },
        {
            type:"input",
            message: "School:",
            name: "school"
        }
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id,data.email, data.school);
        team.push(intern)
    })
};


const init = () => {
    console.log(`Welcome to Aggregateam, a program that generates a webpage that displays contact card of your team members.
Enter the team's manager details.`);
    createManager();

    // switch (option) {
    //     case "Add an engineer":
    //         createEngineer();            
    //         break;
                    
    //     case "Add an intern":
    //         createIntern(); 
    //         break;
    //     default:
    //         break;
    // }
};

// Initialise programm
init();