CREATE DATABASE IF NOT EXISTS comercio;

USE comercio;

DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS deposito;
DROP TABLE IF EXISTS producto;

CREATE TABLE cliente
(
	id INTEGER UNSIGNED,
    nombre VARCHAR(100) NOT NULL DEFAULT 'sin nombre',
    edad INT CHECK (edad > 18)
);

#insert de cliente

CREATE TABLE deposito
(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(100) NOT NULL UNIQUE,
    turnos ENUM('mañana','tarde','noche')
);

#insert de deposito

CREATE TABLE producto
(
	productId INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL CHECK(descripcion = upper(descripcion)),
    cantidad_stock INT NOT NULL,
    precio DECIMAL(4,2) DEFAULT 0 ,
    disponible BOOLEAN NOT NULL,
    borrado BOOLEAN NOT NULL,
    depositoId INT UNSIGNED NOT NULL,
    FOREIGN KEY (depositoId) REFERENCES deposito(id)
);

#insert de producto
