CREATE DATABASE IF NOT EXISTS comercio;

USE comercio;

DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS deposito;
DROP TABLE IF EXISTS producto;

CREATE TABLE cliente(
	id INTEGER UNSIGNED not null PRIMARY KEY,
	nombre VARCHAR(100) not null DEFAULT "sin nombre",
    apellidos VARCHAR(100) ,
    edad int CHECK(edad>18)
    
);
#INSERT cliente

CREATE TABLE deposito(
	id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(100) not null UNIQUE ,
    turnos enum("mañana","tarde","noche")

);
#INSERT deposito

CREATE TABLE producto(
	ProductId INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	descripcion varchar(100) NOT NULL CHECK(descripcion=upper(descripcion)),
	cantidad_stock INT not NULL,
	precio DECIMAL(4,2) DEFAULT 0,
    disponible BOOLEAN NOT NULL,
    borrado BOOLEAN not null,
    depositoId INT UNSIGNED not null,
    FOREIGN KEY (depositoId) REFERENCES deposito(id)
)
#INSERT producto
#agregar los insert