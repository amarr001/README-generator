var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
    name: "username",
    message: "Enter your GitHub username"
    },
    {
    message: "Enter the title of your project: ",
    name: "title",
    },
    {
    message: "A little info about your project:",
    name: "description"
    },
    { 
    message: "Explain how to run the automated tests for this system",
    name: "testing"
    },
    {
    message: "How would you install this project?",
    name: "instalation"
    },
    {
    type: 'checkbox',
    name: 'license',
    message: "Choose the project license:",
    choices: [
            "MIT", "ISC", "Other"
        ],
    initial: 1
    },
    {
    message: "Give details of your code of conduct, and the process for submitting pull requests",
    name: "contributing"
    },
    {
    message:"Include step by step guide to use your project:",
    name: "Usage"
    }
]).then(function(data) {

  fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});