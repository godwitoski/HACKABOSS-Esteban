"use strict";

const getDB = require("./db");

//Escribe a partir de aquí el código solicitado
const databaseWeb = async () => {
  try {
    const con = await getDB();
    con.query(
      `
         CREATE DATABASE IF NOT EXISTS web; 
      `
    );
    con.query(
      `
         use web;
      `
    );

    con.query(
      `
             DROP TABLE IF EXISTS likes;
          `
    );

    con.query(
      `
             DROP TABLE IF EXISTS photos;
          `
    );

    con.query(
      `
            DROP TABLE IF EXISTS users;
          `
    );

    con.query(
      `
        CREATE TABLE users(
        id INT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        apellidos VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        registration_date DATETIME,
        active BOOLEAN DEFAULT false
    );

      `
    );
    con.query(
      `
        CREATE TABLE photos(
        id INT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
        user_id INT UNSIGNED NOT NULL,
        photo_id_name VARCHAR(100),
        creation_date DATETIME,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
      `
    );
    con.query(
      `
        CREATE TABLE likes(
        id INT UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
        user_id INT UNSIGNED NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        photo_id INT UNSIGNED NOT NULL,
        FOREIGN KEY (photo_id) REFERENCES photos(id),
        creation_date DATETIME

    );
      `
    );
    con.release();
    console.log("La base de datos se ha creado correctamente");
  } catch (error) {
    console.log(error);
  }
};

databaseWeb();
