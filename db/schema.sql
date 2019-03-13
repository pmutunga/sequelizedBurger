-- Schema

DROP DATABASE IF EXISTS sequelizedburger_db;
CREATE DATABASE sequelizedburger_db;
USE sequelizedburger_db_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name,devoured) 
VALUES ('Beef', FALSE),
        ('Cheese', TRUE),
        ('Grandma', FALSE),
		('Sushi', FALSE),
		('Tacco', FALSE),
        ('Grandpa', TRUE);

SELECT * FROM burgers;