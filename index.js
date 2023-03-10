const fs = require ('fs');
const inquirer = require ('inquirer');


const questions = [
    {
        type: "input",
        name: "repositoryName",
        message: "Enter the name/title of application! (Required)",
        validate: (repoNameInput) => {
            if (repoNameInput) {
            return true;
            } else {
            console.log("Enter the name of app!");
            return false;
            }
        },
    },

    {
        type: "input",
        name: "githubUser",
        message: "Enter your GitHub username. (Required)",
        validate: (githubUserInput) => {
            if (githubUserInput) {
                return true;
        }   else {
                console.log("Enter your GitHub username.");
                return false;
          }
        },
    },

    {
        type: "input",
        name: "description",
        message: "Enter your description of the application.",
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log("Enter your description of the application.");
                return false;
            }
        },
    },

    {
        type: "input",
        name: "installation",
        message: "Enter your installation for the application.",
        validate: (instalInput) => {
            if (instalInput) {
                return true;
            } else {
                console.log("Enter your installation for the application.");
                return false;
            }
        },
    },


    {
        type: "input",
        name: "usage",
        message: "Enter your usage for the application.",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
        }   else {
            console.log("Enter your usage for the application.");
            return false;
            }
        },
    },  


    {
        type: "list",
        name: "license",
        message: "Enter your license for the application.",
        choices: ["MIT", "ISC", "None"],
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Enter your license for the application.");
                return false;
            }
        },
    },


    {
        type: "confirm",
        name: "confirmIssues",
        message: "Would you like to people to report issues?",
        default: false, 
    },
    
    {
        type: "input",
        name: "issues",
        message: "Provide a method for other users to contact you.",
        when: ({ confirmIssues }) =>confirmIssues,
    },

    {
        type: "input",
        name: "contributors",
        message: "List of contributors, if none type 'NA'.",
        validate: (contributorsInput) => {
            if (contributorsInput) {
            } else {
                console.log("List of contributors, if none type 'NA'.");
                return false;
            }
        },
    },

    {
        type: "input",
        name: "tests",
        message: "List of tests, if none type 'NA'.",
        validate: (testsInput) => {
            if (testsInput) {
                return true;
            }   else {
                console.log("List test complete.");
                return false;
            }
        },
    },


    {
        type: "input",
        name: "contact",
        message: "Enter an email address for users to contact you.",
        validate: (contactInput) => {
        if (contactInput) {
            return true;
        }   else {
            console.log("contact info added.");
            return false;
            }
        },
    },

]