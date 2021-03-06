# build.sql

CREATE DATABASE IF NOT EXISTS payroll;

USE payroll;

CREATE TABLE IF NOT EXISTS employees (
	employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS work_log (
	work_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
	date DATE NOT NULL,
    hours DECIMAL(4,2) NOT NULL,
    pay_rate DECIMAL(13,4) NOT NULL,
    
	FOREIGN KEY (employee_id)
		REFERENCES employees(employee_id)
        ON DELETE CASCADE
);
