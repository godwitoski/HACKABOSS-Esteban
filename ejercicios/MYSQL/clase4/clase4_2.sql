#1
SELECT p.nombre, p.apellido, o.nombre AS 'Odontologo'
FROM pacientes p, odontologos o, consultas c
WHERE p.id_paciente = c.id_paciente AND 
c.id_odontologo = o.id_odontologo AND
c.fecha = "2021-11-10";

#1 con inner join
SELECT p.nombre, p.apellido, o.nombre AS 'Odontologo'
FROM pacientes p
INNER JOIN consultas c ON c.id_paciente = p.id_paciente
INNER JOIN odontologos o ON c.id_odontologo = o.id_odontologo
WHERE c.fecha = '2021-11-10';

#2
SELECT p.nombre, p.apellido, count(c.id_consulta) AS 'Cantidad de Consultas'
FROM pacientes p, consultas c 
WHERE p.id_paciente = c.id_paciente
GROUP BY p.id_paciente;

#2 con inner join
SELECT p.nombre, p.apellido, count(c.id_consulta) AS 'Cantidad de Consultas'
FROM pacientes p
INNER JOIN consultas c ON c.id_paciente = p.id_paciente
GROUP BY p.id_paciente;

#3
SELECT sum(pr.precio) AS 'Total Facturado'
FROM odontologos o, practicas pr, consultas c
WHERE o.id_odontologo = c.id_odontologo AND
c.id_practica = pr.id_practica AND
o.id_odontologo = 1128;

#3 con inner join
SELECT sum(pr.precio) AS 'Total Facturado'
FROM odontologos o
INNER JOIN consultas c ON c.id_odontologo = o.id_odontologo
INNER JOIN practicas pr ON pr.id_practica = c.id_practica
WHERE o.id_odontologo = 1128;

#3b cada odontologo
SELECT o.nombre, sum(pr.precio) AS 'Total Facturado'
FROM odontologos o, practicas pr, consultas c
WHERE o.id_odontologo = c.id_odontologo AND
c.id_practica = pr.id_practica
GROUP BY o.id_odontologo;

#3b con inner join
SELECT o.nombre,  sum(pr.precio) AS 'Total Facturado'
FROM odontologos o
INNER JOIN consultas c ON c.id_odontologo = o.id_odontologo
INNER JOIN practicas pr ON pr.id_practica = c.id_practica
GROUP BY o.id_odontologo;

#4
SELECT p.nombre, p.apellido
FROM pacientes p, odontologos o, consultas c
WHERE p.id_paciente = c.id_paciente AND
c.id_odontologo = o.id_odontologo AND
o.nombre = 'Matzin' AND
month(c.fecha) = 11;

#4 con inner join
SELECT p.nombre, p.apellido
FROM pacientes p
INNER JOIN consultas c ON c.id_paciente = p.id_paciente
INNER JOIN odontologos o ON o.id_odontologo = c.id_odontologo
WHERE o.nombre = 'Matzin' AND month(c.fecha) = 11;

#5
SELECT count(c.id_consulta) AS 'Consultas PAMI mes 11'
FROM consultas c
INNER JOIN cobertura co ON co.id_practica = c.id_practica
INNER JOIN obrasocial os ON os.id_obrasocial = co.id_obrasocial
WHERE os.nombre = 'PAMI' AND month(c.fecha) = 11;

#6
SELECT p.nombre, p.apellido, pr.nombre
FROM pacientes p
INNER JOIN consultas c ON c.id_paciente = p.id_paciente
INNER JOIN practicas pr ON pr.id_practica = c.id_practica
WHERE month(c.fecha) = 11 AND pr.precio > 150;

#7
SELECT pr.id_practica, pr.nombre, count(pr.id_practica) AS 'Cantidad realizadas'
FROM practicas pr 
INNER JOIN consultas c ON c.id_practica = pr.id_practica
WHERE year(c.fecha) = 2021
GROUP BY pr.id_practica;