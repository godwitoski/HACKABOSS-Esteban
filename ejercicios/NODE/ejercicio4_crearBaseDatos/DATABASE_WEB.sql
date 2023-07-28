CREATE DATABASE IF NOT EXISTS web;

USE web;

DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    apellidos VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    registration_date DATETIME,
    active BOOLEAN DEFAULT false
);

CREATE TABLE photos(
    id INT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    photo_id_name VARCHAR(100),
    creation_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes(
    id INT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
    photo_id INT UNSIGNED NOT NULL,
      FOREIGN KEY (photo_id) REFERENCES photos(id),
    creation_date DATETIME
  
);

/*
likes

id (number)

user_id (number)

photo_id (number)

creation_date (datetime)

Establecer las relaciones entre
 las tablas que consideres necesarias usando SQL.

Antes de crear estas tablas el programa de node debe borrar 
cualquier otra tabla con el mismo nombre pre-existente en la base de datos.

*/