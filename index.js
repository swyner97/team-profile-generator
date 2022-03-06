const inquirer = require('inquirer');
const generateTeamProfile = require('./utils/generateTeamProfile')
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// manager interrogatories 
const managerRogs = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Team manager's name:",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    { return "Please input requested information to continue" }
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message(answers) {
                return `Hello ${answer.name}! What your email address?`
            },
            validate: managerID => {
                if (managerID) {
                    return true;
                } else {
                    { return "Please input requested information to continue" }
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    { return "Please input requested information to continue" }
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Office number:',
            validate: managerOfficeNumber => {
                if (managerOfficeNumber) {
                    return true;
                } else {
                    { return "Please input requested information to continue" }
                }
            }
        },

        // WHEN I enter the team manager’s name, employee ID, email address, and office number
        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

        {
            type: 'checkbox',
            name: 'employees',
            message: 'Who would you like to add to your team?',
            choices: ['Intern', 'Engineer'],
        },
    ]);

    const internRogs = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Intern name:',
                validate: internName => {
                    if (internName) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            },

            {
                type: 'input',
                name: 'ID',
                message: 'Intern ID:',
                validate: internID => {
                    if (internID) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'Intern email:',
                validate: internEmail => {
                    if (internEmail) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            },

            {
                type: 'input',
                name: 'office',
                message: 'Intern office number:',
                validate: internOfficeNumber => {
                    if (internOfficeNumber) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            }
        ])
    }

    const engineerRogs = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Engineer name:',
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            },
    
            {
                type: 'input',
                name: 'ID',
                message: 'Engineer ID:',
                validate: engineerID => {
                    if (engineerID) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            },
    
            {
                type: 'input',
                name: 'email',
                message: 'Engineer email:',
                validate: engineerEmail => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            },
    
            {
                type: 'input',
                name: 'office',
                message: 'Engineer office number:',
                validate: engineerOfficeNumber => {
                    if (engineerOfficeNumber) {
                        return true;
                    } else {
                        { return "Please input requested information to continue" }
                    }
                }
            }
        ])
    }

    module.exports = {managerRogs, internRogs, engineerRogs}
    
    



// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
