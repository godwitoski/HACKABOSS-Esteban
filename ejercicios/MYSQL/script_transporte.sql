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

INSERT INTO autobus values(DEFAULT,123,2022,"Iveco","AAA1223456");

INSERT INTO autobus (nro_interno,modelo,marca,patente) values(124,2021,"Renault","AAA789104");
INSERT INTO autobus VALUES(DEFAULT,125,2020,"Mercedes Benz","BBB234567"),
(DEFAULT,126,2019,"Iveco","BBAA54789"),
(DEFAULT,127,2022,"MarcoPolo","CCAA234567"),
(DEFAULT,128,2023,"MarcoPolo","AACC45789")
;
INSERT INTO autobus (modelo,marca,patente,nro_interno) values(2018,"Mercedes","AADD457896",129);


CREATE TABLE mecanico
(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) DEFAULT 'sin direccion',
    nro_interno INT UNSIGNED NOT NULL,
    FOREIGN KEY (nro_interno) REFERENCES autobus(nro_interno)
);

INSERT INTO mecanico VALUES (DEFAULT,"Daniel","457896523","Las dalias 1000",124),
(DEFAULT,"Martin","478965213","Monte cristo 14",124),
(DEFAULT,"Pablo","235478963","Granaderos 1234",127),
(DEFAULT,"Franco","478962358","Algo 123",127)
;
