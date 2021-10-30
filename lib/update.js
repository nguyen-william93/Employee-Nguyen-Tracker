const app = require('../index');
const db = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');

exports.updateEmployee = () => {
    // inquirer.prompt(
    //     [
    //         {

    //         }
    //     ]
    // ).then(response => update ())
    getAllEmployee();
};

async function getAllEmployee() {
    const sql = `SELECT * FROM employees`;

    const data = await db.query(sql);
    console.log(data);

    const employeeList = data.map(employee => {
        console.log(employee);
        return {
            name: employee.first_name + ' ' + employee.last_name,
            value: {
                id: employee.id,
                first_name: employee.first_name,
                last_name: employee.last_name
            }
        }
    })
    console.log (employeeList);
};








        // const employeeList = rows.map(employee => {
        //     return { 
        //         name: employee.first_name + ' ' + employee.last_name,
        //         value: {
        //             id: employee.id,
        //             first_name: employee.first_name,
        //             last_name: employee.last_name
        //         }
        //     }
        // })