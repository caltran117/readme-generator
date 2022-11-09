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
        name:"installation",
        message:"What are installation instruction for this program?",
        type:"input",

    },
    {
        name:"usage",
        message:"What are the uses of this program?",
        type:"input",

    },
    {
        name:"license",
        message:"What license does this project use, if any? ",
        type:"list",
        choices: ["MIT","PGN", "GH", "NONE"]

    },
    {
        name:"contributing",
        message:"List any contribution guidelines.",
        type:"input",

    },
    {
        name:"tests",
        message:"How do you run test for this program, if any?",
        type:"input",

    },
    {
        name:"questions",
        message:"Anything else?",
        type:"input",

    },
    {
        name:"github",
        message:"What is your GitHub username?",
        type:"input",

    },
    {
        name:"email",
        message:"What is your email?",
        type:"input",

    },
]).then(answers=>{
    fs.writeFileSync("./dist/README.md",`
# ${answers.title}

[![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://github.com/caltran117/readme-generator)


## Description

${answers.description}
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}
https://github.com/${answers.github}
if you have any questions you can email me at ${answers.email}
`)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
