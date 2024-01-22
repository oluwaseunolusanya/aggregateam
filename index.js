const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = [];

const init = () => {
    console.log("Welcome to Aggregateam, a program that generates a webpage that displays contact card of your team members.")
    inquirer.
    prompt([
        {
            type:"input",
            message: "Provide your email to address questions about the project.",
            name: "email"
        },
        {
            type:"input",
            message: "Author:",
            name: "author"
        },

    ])
    .then((response) => {

    });
};

// Initialise programm
init();