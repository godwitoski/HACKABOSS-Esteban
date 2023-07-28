#consultas a una sola tabla
SELECT * FROM autobus;

SELECT nro_interno, marca FROM autobus; 

SELECT marca AS Marca, patente AS 'Chapa Patente' FROM autobus;

SELECT nro_interno AS 'Numero Interno', patente AS 'Chapa Patente' FROM autobus;

SELECT nro_interno, modelo, patente FROM autobus WHERE marca = 'marcopolo' AND modelo >= 2020;

SELECT count(*) FROM autobus;

SELECT count(*) FROM autobus WHERE marca = 'marcopolo' AND modelo >= 2020;

SELECT sum(nro_interno) AS 'Total de ventas' FROM autobus;

SELECT sum(nro_interno) AS 'Total de ventas' FROM autobus WHERE modelo >= 2022; 

#consultas a multiples tablas
SELECT mecanico.nombre, autobus.marca
FROM mecanico, autobus
WHERE mecanico.nro_interno = autobus.nro_interno;

#uso de alias
SELECT m.nombre AS 'Mecanico', a.marca AS 'Autobus'
FROM mecanico m, autobus a
WHERE m.nro_interno = a.nro_interno;

SELECT min(modelo) FROM autobus;#minimo valor encontrado
SELECT MAX(modelo) FROM autobus;#maximo valor encontrado
SELECT AVG(modelo) FROM autobus;#media aritmética o promedio

SELECT m.nombre AS 'Mecánico', a.marca AS 'Autobús', a.modelo
	FROM  mecanico m, autobus a	
    WHERE m.nro_interno = a.nro_interno AND a.modelo = (SELECT min(a.modelo) FROM autobus);

SELECT a.marca FROM autobus a, mecanico m
WHERE  a.nro_interno = m.nro_interno and  m.nro_interno > (SELECT sum(id) from autobus);

SELECT autobus.marca
FROM mecanico, autobus
WHERE mecanico.nro_interno = autobus.nro_interno  group by autobus.marca;

SELECT  mecanico.nombre, autobus.marca
FROM mecanico, autobus
WHERE mecanico.nro_interno = autobus.nro_interno ORDER BY mecanico.nombre asc;

SELECT  mecanico.nombre, autobus.marca
FROM mecanico, autobus
WHERE mecanico.nro_interno = autobus.nro_interno ORDER BY mecanico.nombre ASC, autobus.marca DESC;
