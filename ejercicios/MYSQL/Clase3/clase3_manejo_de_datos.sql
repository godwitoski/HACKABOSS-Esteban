USE transporte;

#insertar datos
# INSERT INTO <nombre_tabla> [(campo1, campo2, campoN....)] VALUES (val1,val2, valN);
 INSERT INTO autobus VALUES (DEFAULT,123,2022,'IVECO','AAA123456');
 
 INSERT INTO autobus (nro_interno, modelo, marca, patente) VALUES (124,2021,'Renault','AAA789104');
 
 INSERT INTO autobus VALUES (DEFAULT, 125,2020,'Mercedes Benz','BBB234567'),
 (DEFAULT, 126,2019,'Iveco','BBAA54789'),
 (DEFAULT, 127,2022,'Marcopolo','CCAA234567'),
 (DEFAULT, 128,2023,'Marcopolo','AACC45789');
 
 INSERT INTO autobus (modelo, marca, patente,nro_interno) VALUES (2018,'Mercedes','AADD457896',129);
 
 INSERT INTO mecanico VALUES (DEFAULT,'Daniel','457896523','Las dalias 1000',124),
 (DEFAULT,'Martin','478965213','Monte cristo 14',124),
 (DEFAULT,'Pablo','235478963','Granaderos 1234',127),
 (DEFAULT,'Franco','478962358','Algo 123',127);
 
 INSERT INTO mecanico VALUES (DEFAULT,'Prueba 2','457896523',NULL,128);
 
 #modificar datos
 #UPDATE <nombre_tabla> SET <dato/datos a modificar = valor nuevo> WHERE <condicion de actualizacion>
 #
 UPDATE mecanico
 SET nombre = 'Maaaartin'
 WHERE id = 2;
 
 UPDATE mecanico
 SET nombre = 'Julio', direccion = 'Junta 1200'
 WHERE id = 6;
 
 INSERT INTO autobus (nro_interno, modelo, marca, patente) VALUES (130,2005,'Marcopolo','DDRR123789');
 
 UPDATE autobus
 SET marca = 'Reno'
 WHERE modelo=2000 AND marca='Renault';
 
 #borrar un/unos registro/s de tabla
 # DELETE FROM <tabla> WHERE condicion/s
 # DELETE FROM <tabla> --> borra todos los registros de la tabla
 
 DELETE FROM autobus
 WHERE modelo=2000 AND marca='Reno';
 
 