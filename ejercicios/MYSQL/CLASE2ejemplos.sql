CREATE DATABASE comercio_2;

use comercio_2;

#Nueva tabla
CREATE TABLE IF NOT EXISTS cliente(
	id INTEGER UNSIGNED,
	nombre VARCHAR(100)  not null DEFAULT "sin nombre",
    edad int CHECK(edad>18)
);
#edad int CHECK(edad between 18 and 30)


#AGREGO UNA NUEVA COLUMNA . agrega al final
ALTER TABLE cliente ADD apellido VARCHAR(100); 

#borrar columna
ALTER TABLE cliente DROP apellido;

#columna
ALTER TABLE cliente ADD direccion VARCHAR(100); 

#añadimos apellido en una posicion espefícica
ALTER TABLE cliente ADD apellido varchar(70) AFTER nombre;

#modificar algo espeficico. En este caso en tipo de dato
ALTER TABLE cliente MODIFY apellido VARCHAR(50);

#modificar el nombre de la columna
ALTER TABLE cliente CHANGE apellido apellidos VARCHAR(50);

#modificar nombre de la tabla
alter table cliente rename as clienteN;

alter table clienteN rename as cliente;

#modificamos la columna para poner clave primaria- indentifica al registro de forma UNICA
ALTER TABLE cliente add PRIMARY KEY(id);

alter TABLE cliente MODIFY id INT UNSIGNED AUTO_INCREMENT; #autoincremental


create table deposito(
	id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(100) not null UNIQUE ,
    turnos enum("mañana","tarde","noche")

);

#nueva tabla
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






