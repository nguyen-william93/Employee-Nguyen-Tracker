const db = require('./db/connection');
const inquirer = require('inquirer');
const view = require('./lib/view');
const add = require('./lib/add');
const update = require('./lib/update');

db.connect(err => {
    if (err) throw err;
    console.log('database connected');
    exports.start();
});

exports.start = () => {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'choices',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    }).then(response => {
        let choice = response.choices;
        switch(choice){
            case 'View all departments':
                view.viewDepartments();
                break;
            case "View all roles":
                view.viewRoles();
                break;
            case "View all employees":
                view.viewEmployees();
                break;
            case 'Add a department':
                add.addDepartment();
                break;
            case 'Add a role':
                add.addRole();
                break;
            case 'Add an employee':
                add.addEmployee();
                break;
            case 'Update an employee role':
                update.updateEmployee();
                break;
            case 'Exit':
                db.end();
                return;
        }
    });
};
