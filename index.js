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
    name: "installation"
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
    message:"Include step by step guide to use your project:",
    name: "Usage"
    }
]).then(data => {

    let InfoStr = "";

    //Project info

    if(data.title){
    InfoStr += `# ${data.title} \n ${data.description} \n`
    }
    
    //Installation
    if(data.installation){
        InfoStr += data.installation + "\n"
    }

    //Testing
    if(data.testing){
        InfoStr += data.testing + "\n"
    }

  fs.writeFile("README.md", InfoStr , function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});

//JSON.stringify(data, null, '\t')