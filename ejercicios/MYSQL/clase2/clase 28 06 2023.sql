CREATE DATABASE comercio3;

USE comercio3;

#creo una nueva tabla
CREATE TABLE IF NOT EXISTS clientes
(
	id INTEGER UNSIGNED,
    nombre VARCHAR(100) NOT NULL DEFAULT 'sin nombre',
    edad INT CHECK (edad > 18)
); 

# edad int check (edad between 18 and 30) --> ENTRE 18 Y 30 AÑOS	

#agrego una nueva columna
ALTER TABLE clientes ADD apellido VARCHAR(100);

#borrar columna
ALTER TABLE clientes DROP apellido;

ALTER TABLE clientes ADD direccion VARCHAR(100);

ALTER TABLE clientes ADD apellido VARCHAR(100) AFTER nombre;

ALTER TABLE clientes MODIFY apellido VARCHAR(50); #modificar el tipo de dato de una col espec.

ALTER TABLE clientes CHANGE apellido apellidos VARCHAR(50); #modificar el nombre del campo

ALTER TABLE clientes RENAME AS cliente;

ALTER TABLE cliente ADD PRIMARY KEY(id);#clave primaria identifica al registro en forma unica

ALTER TABLE cliente MODIFY id INT UNSIGNED AUTO_INCREMENT;



CREATE TABLE deposito
(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(100) NOT NULL UNIQUE,
    turnos ENUM('mañana','tarde','noche')
);

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
