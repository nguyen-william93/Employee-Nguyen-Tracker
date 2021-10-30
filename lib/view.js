const app = require('../index');
const db = require('../db/connection');
require('console.table');

exports.viewDepartments = () => {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
        if(err){
            console.log(err);
        }
        console.table(rows);
        app.start();
    });
};

exports.viewRoles = () => {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if(err){
            console.log(err);
        }
        console.table(rows);
        app.start();
    });
};

exports.viewEmployees = () => {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if(err){
            console.log(err);
        }
        console.table(rows);
        app.start();
    });
};
