# insert_test_data.sql

INSERT INTO employees (employee_id, first_name, last_name) VALUES
	 (1, 'Bob', 'McBob'),
	 (2, 'Fred', 'O\'Freddle'),
	 (3, 'Kathy', 'Kathersen'),
	 (4, 'Michael', 'Michaels');
 
 
 INSERT INTO work_log (employee_id, date, hours, pay_rate) VALUES
	(1, '2018-01-01', 8, 10.50),
    (1, '2018-01-02', 8, 10.50),
    (1, '2018-01-03', 7.5, 11.50),
    (1, '2018-01-05', 6, 10.50),
    (2, '2018-01-01', 8, 11.95),
    (2, '2018-01-02', 8, 11.95),
    (3, '2018-01-07', 3.5, 13.4567),
    (4, '2018-01-05', 8, 10);

	