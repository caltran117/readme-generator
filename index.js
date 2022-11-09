// TODO: Include packages needed for this application
const inquirer = require("inquirer") 
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
        name:"title",
        message:"What is the title of your project?",
        type:"input",

    },
    {
        name:"description",
        message:"What is the description of your project?",
        type:"input",

    },
    {
        name:"Installation",
        message:"What are installation instruction for this program?",
        type:"input",

    },
    {
        name:"Usage",
        message:"What are the uses of this program?",
        type:"input",

    },
    {
        name:"License",
        message:"What license does this project use, if any?",
        type:"input",

    },
    {
        name:"Contributing",
        message:"List any contribution guidelines.",
        type:"input",

    },
    {
        name:"Tests",
        message:"How do you run test for this program, if any?",
        type:"input",

    },
    {
        name:"Questions",
        message:"Anything else?",
        type:"input",

    },
]).then(answers=>{
    fs.writeFileSync("./dist/README.md",`
# ${answers.title}

## Description
${answers.description}


`)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
