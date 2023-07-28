CREATE DATABASE IF NOT EXISTS bootcamp;
USE bootcamp;

/* pega a continuación el CREATE TABLE completo que hiciste ejercicio anterior */

CREATE TABLE students(
    id INTEGER UNSIGNED UNIQUE AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(100),
    email VARCHAR(50) UNIQUE,
    telefono VARCHAR(13),
    dni VARCHAR(11) UNIQUE,
    pais VARCHAR(80),
    codigo_postal CHAR(5),
    direccion VARCHAR(100),
    ciudad VARCHAR(50)
);

/* Escribe a continuación el código SQL solicitado: */

CREATE TABLE addresses(
    idAdd INTEGER UNSIGNED UNIQUE,
   pais VARCHAR(50),
   codigo_postal CHAR(5),
   direccion VARCHAR(100),
   ciudad VARCHAR(50),
   id_student INTEGER UNSIGNED,
   FOREIGN KEY (id_student) REFERENCES students(id)
);

ALTER TABLE students 
            DROP pais,
            DROP codigo_postal,
            DROP direccion,
            DROP ciudad;
            
            
INSERT INTO students VALUES(1,"Irvin","Lethem","ilethem0@google.com.au","993870144","279948941-9"),
(2,"Kylie","Mungan","kmungan1@howstuffworks.com","497494899","748551874-7"),
(3,"Yul","Dibbert","ydibbert2@businesswire.com","776631050","215649413-4"),
(4,"Tamra","Mc Gorley","tmcgorley3@studiopress.com","921948685","617064473-7"),
(5,"Elmira","Imbrey","eimbrey4@cpanel.net","304168000","178988896-4")
;

INSERT INTO addresses VALUES
(01,"Indonesia",83297,"98339 Loftsgordon Road","Babakanbandung",1),
(02,"Philippines",44455,"74641 Dwight Avenue","Bilar",2),
(03,"Indonesia",62965,"9510 Milwaukee Street","Sumberejo",3),
(04,"Norway",54756,"8902 Doe Crossing Alley","Steinkjer",4),
(05,"United States",51471,"8616 Stephen Hill","Charleston",5)
;

SELECT nombre AS "Nombre", apellidos AS "Apellido", telefono AS "Teléfono" FROM students 
ORDER BY apellidos;
SELECT COUNT(*) AS "Usuarios por país" FROM addresses GROUP BY pais;