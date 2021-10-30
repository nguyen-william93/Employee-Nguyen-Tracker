const app = require('../index');
const db = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');


exports.addDepartment = () => {
    inquirer.prompt({
        type: 'input',
        name: 'table',
        message: 'what is the name of the department?'
    }).then(response => insert(response, `departments`))
};

exports.addRole = () => {

    db.query(`SELECT * FROM departments`, (err, rows) => {
        if (err) throw err;
        console.log('');
        console.table(rows);

        inquirer.prompt(
            [{
                type: 'input',
                name: 'title',
                message: 'What is the title of the role?'
            },
            {
                type: 'number',
                name: 'salary',
                message: 'How much is the salary for this role?',
            },
            {
                type: 'number',
                name: 'departmentID',
                message: 'What is the department ID for this role?'
            }]
        ).then(response => insert(response, `roles`))
    });
};

exports.addEmployee = () => {

    inquirer.prompt(
        [{
            type: 'input',
            name: 'firstName',
            message: 'What is the first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name?'
        },
        {
            type: 'number',
            name: 'roleID',
            message: 'What is the role ID for this employee?'
        },
        {
            type: 'number',
            name: 'managerID',
            message: "What is the manager ID for this employee? (Press enter if employee doesn't have a manager",
        }]
    ).then(response => insert(response, `employees`));
}

function insert(data, tableName) {
    let sql = ``;
    const params = [];

    switch (tableName) {
        case 'departments':
            sql = `INSERT INTO ${tableName} (name) VALUES (?)`
            params.push(data.table);
            break;
        case 'roles':
            sql = `INSERT INTO ${tableName} (title, salary, department_id) VALUES (?,?,?)`
            params.push(data.title, data.salary, data.departmentID);
            break;
        case 'employees':
            sql = `INSERT INTO ${tableName} (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
            if (!data.managerID) {
                params.push(data.firstName, data.lastName, data.roleID, null);
            } else {
                params.push(data.firstName, data.lastName, data.roleID, data.managerID);
            }
            break;
    };

    db.query(sql, params, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log('Sucessfully added');
        app.start();
    });
};