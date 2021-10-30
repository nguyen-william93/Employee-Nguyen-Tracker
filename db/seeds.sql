INSERT INTO departments (name) VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO roles (title, salary, department_id) VALUES 
("Sales Lead", 100000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
("Jane", "Doe", 1, null),
("Norah", "Rios", 2, 1),
("Kate", "Mellor", 3, 2),
("Shiv", "Betts", 4, 3),
("Leen", "Hurst", 5, null),
("Gary", "Leer", 2, null),
("Tom", "Cruise", 4, 5),
("Daisy", "Hooper", 1, 2);
