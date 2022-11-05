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
]).then(answers=>{
    fs.writeFileSync("./dist/README.md",`
# ${answers.title}

* Description
it does stuff    
`)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
