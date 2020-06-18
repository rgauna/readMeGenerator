const fs = require("fs");
const inquirer = require("inquirer");
// const generateWebpage = require("./generateWebpage"); - not sure if a webpage needs to be generated


// questions to be asked
const questions = [
   
    {
      
        type: 'input',
        name: 'repoName',
        message: 'What is name of this application?',
     
    },
   
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',
     
    },
  
    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',
     
    },
  
    {
        type: 'input',
        message: 'How does a user install your application?',
        name: 'installApp',
     
    },
  
    {
        type: 'input',
        message: 'How does a user use your application? Provide instuctions here',
        name: 'appInstructions',
     
    },

    {
        type: 'input',
        message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
        name: 'appIssuesAndCont',
     
    },
 
    {
        type: 'input',
        message: 'What license they would you  like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
        name: 'license',
     
    },
 
    {
        type: 'input',
        message: 'Who else contributed to your application?',
        name: 'contributors',
     
    },

];