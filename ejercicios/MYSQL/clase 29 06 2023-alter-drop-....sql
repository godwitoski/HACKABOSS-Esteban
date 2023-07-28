use transporte;

#insert datos;
#INSERT INTO <nombre_tabla> [(campo1,campo2,campoN...)] values(val1,val2,valN);
INSERT INTO autobus values(DEFAULT,123,2022,"Iveco","AAA1223456");

INSERT INTO autobus (nro_interno,modelo,marca,patente) values(124,2021,"Renault","AAA789184");

INSERT INTO autobus VALUES(DEFAULT,125,2020,"Mercedes Benz","BBB234567"),
(DEFAULT,126,2019,"Iveco","BBAA54789"),
(DEFAULT,127,2022,"MarcoPolo","CCAA234567"),
(DEFAULT,128,2023,"MarcoPolo","AACC45789")
;

INSERT INTO autobus (modelo,marca,patente,nro_interno) values(2018,"Mercedes","AADD457896",129);


#PARA MECANICO;

INSERT INTO mecanico VALUES (DEFAULT,"Daniel","457896523","Las dalias 1000",124),
(DEFAULT,"Martin","478965213","Monte cristo 14",124),
(DEFAULT,"Pablo","235478963","Granaderos 1234",127),
(DEFAULT,"Franco","478962358","Algo 123",127)
;

INSERT INTO mecanico VALUES (DEFAULT,"Prueba2","457896523",NULL,128);

#MODIFICACION
#UPDATE <tabla> SET <dato/datos a modificar = valor nuevo> WHERE <condicion de actualizacion>

UPDATE mecanico 
SET nombre = "Maaartin"
WHERE id = 2;

UPDATE mecanico
SET nombre ="Julio", direccion ="Junta 1200"
where id=6;

INSERT INTO autobus (nro_interno,modelo,marca,patente) values(130,2005,"MarcoPolo","DDRR123128");

UPDATE autobus
SET marca = "Reno"
WHERE modelo =2000 AND marca="Renault";


#Borrar registro de tabla
#DELETE FROM <tabla> WHERE condicion/es
#DELETE FROM <tabla>  -->borra todos los registros
DELETE FROM autobus
WHERE modelo =2000 AND marca="Reno";


