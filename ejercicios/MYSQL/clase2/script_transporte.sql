CREATE DATABASE IF NOT EXISTS transporte;

USE transporte;

DROP TABLE IF EXISTS mecanico;
DROP TABLE IF EXISTS autobus;

CREATE TABLE autobus
(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nro_interno INT UNSIGNED UNIQUE NOT NULL,
    modelo INT UNSIGNED NOT NULL,
    marca VARCHAR(100) NOT NULL,
    patente VARCHAR(50) NOT NULL
);

CREATE TABLE mecanico
(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) DEFAULT 'sin direccion',
    nro_interno INT UNSIGNED NOT NULL,
    FOREIGN KEY (nro_interno) REFERENCES autobus(nro_interno)
);
