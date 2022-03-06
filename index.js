const fs = require('fs');
const inquirer = require('inquirer');
const generateTeamProfile = require('./utils/generateTeamProfile');

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// manager interrogatories 
const managerRogs = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Team manager's name:",
            validate: managerName => {
                if (managerName) {
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
                return `Hello ${data.name}! What your email address?`
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
            validate: managerSchool => {
                if (managerSchool) {
                    return true;
                } else {
                    { return "Please input requested information to continue" }
                }
            }
        },

    ]);
};


// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'How would you like to proceed?',
            choices: ['add intern', 'add engineer', 'finish building my team']
        }
    ])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'add intern':
                    internRogs();
                    break;
                case 'add engineer':
                    engineerRogs();
                    break;
                default:
                    buildTeam();
            }
        })
}
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

const internRogs = () => {
    console.log(`
        =================
        Add a New Intern
        =================
        `);
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
            name: 'school',
            message: "Intern's school:",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    { return "Please input requested information to continue" }
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        promptMenu;
    })
};
   

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const engineerRogs = () => {
    console.log(`
        ==================
        Add a New Engineer
        ==================
        `);
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
            name: 'github',
            message: "Engineer's Github username:",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    { return "Please input requested information to continue" }
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        promptMenu;
    })
};


const buildTeam = () => {
    console.log(`
        ===========================
        Finished building my team!
        ===========================`);

    fs.writeFileSync(outputPath, generateTeamProfile(teamMembers), "utf-8");
}

managerRogs();






// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
