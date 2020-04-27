var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {

    name: "username",
    message: "Enter your GitHub username"
  },
  {
   
    message: "Enter your repository name:",
    name: "reponame",
   
  },
  {
    message: "Enter the title of your project: ",
    name: "title",
  },
  {
      message: "Enter a brief description of your project:",
      name: "description"
  }
]).then(function(data) {

  fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});