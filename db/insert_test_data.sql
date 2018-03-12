# insert_test_data.sql

INSERT INTO employees (employee_id, first_name, last_name) VALUES
	 (1, 'Bob', 'McBob'),
	 (2, 'Fred', 'O\'Freddle'),
	 (3, 'Kathy', 'Kathersen'),
	 (4, 'Michael', 'Michaels');
 
 
 INSERT INTO work_log (employee_id, date, hours) VALUES
	(1, '2018-01-01', 8),
    (1, '2018-01-02', 8),
    (1, '2018-01-03', 4),
    (1, '2018-01-05', 6),
    (2, '2018-01-01', 8),
    (2, '2018-01-02', 8),
    (3, '2018-01-07', 3.5),
    (4, '2018-01-05', 8);

	