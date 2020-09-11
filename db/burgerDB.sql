### Schema

CREATE DATABASE burgerDB;
USE burgerDB;

CREATE TABLE burgers
(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false
);

