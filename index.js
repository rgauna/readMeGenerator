// creating the const vars for the fs and inquierer modules
const fs = require("fs");
const inquirer = require("inquirer");

// questions to be asked
const questions = [
  {
    type: "input",
    name: "repoName",
    message: "What is name of this application?",
  },

  {
    type: "input",
    name: "gitHubName",
    message: "What is your username on Github?",
  },

  {
    type: "input",
    message: "Write a description of this application",
    name: "description",
  },

  {
    type: "input",
    message: "How does a user install your application?",
    name: "installApp",
  },

  {
    type: "input",
    message: "How does a user use your application? Provide instuctions here",
    name: "appInstructions",
  },

  {
    type: "input",
    message:
      "Would you like you users to be able to report issues or contribute to this project? add instructions here.",
    name: "appIssuesAndCont",
  },

  {
    type: "input",
    message:
      'What license they would you  like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
    name: "license",
  },

  {
    type: "input",
    message: "Who else contributed to your application?",
    name: "contributors",
  },
];

// function to initialize the CLI application

function init() {
  inquirer.prompt(questions).then((response) => {
    // this is creating the main header for the github repo
    fs.appendFileSync("README.md", "# " + response.repoName + "\n", function (
      err
    ) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });

    // this is creating the name of the application readME
    fs.appendFileSync(
      "README.md",
      "This application was developed by: " + response.gitHubName + "\n" + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // this is creating the description
    fs.appendFileSync("README.md", response.description + "\n", function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
    // this is creating the installation instructions

    fs.appendFileSync(
      "README.md",
      "## Installation" + "\n" + response.installApp + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // this is creating the how to use instructions
    fs.appendFileSync(
      "README.md",
      "## How to use the Application" + "\n" + response.appInstructions + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // this is creating the section for errors/issues and reporting
    fs.appendFileSync(
      "README.md",
      "## Issue Reporting and Contributing" +
        "\n" +
        response.appIssuesAndCont +
        "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    //  this is creating the section for the contributors
    fs.appendFileSync(
      "README.md",
      "## Other Contibuting Developers:" + "\n" + response.contributors + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    //  this is creating the license section
    fs.appendFileSync(
      "README.md",
      "## Licence(s)" + "\n" + response.license + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
  });
}

//runs the function to creat the file
init();
