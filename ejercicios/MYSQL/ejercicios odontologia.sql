#ejecicios 
#consulta 1
SELECT p.nombre, p.apellido, o.nombre AS "Odontologo"
FROM pacientes p, odontologos o, consultas c
WHERE p.id_paciente = c.id_paciente AND c.id_odontologo = o.id_odontologo
AND c.fecha = "2021-11-10"; 

#1 CON INNER
SELECT p.nombre, p.apellido, o.nombre AS "Odontologo"
FROM pacientes p
INNER JOIN consultas c ON p.id_paciente = c.id_paciente 
INNER JOIN odontologos o ON c.id_odontologo = o.id_odontologo
WHERE c.fecha =  "2021-11-10" ;



#consulta 2
SELECT p.nombre, p.apellido, count(c.id_consulta) AS "total consultas"
FROM pacientes p, consultas c
WHERE p.id_paciente = c.id_paciente
GROUP BY p.id_paciente;

#2 - INNER JOIN 
SELECT p.nombre, p.apellido, count(c.id_consulta) AS "total consultas"
FROM pacientes p 
INNER JOIN consultas c ON p.id_paciente = c.id_paciente
GROUP BY p.id_paciente;




#consulta 3
SELECT sum(pr.precio) AS "TOTAL FACTURADO"
FROM odontologos o,consultas c,practicas pr
WHERE o.id_odontologo = c.id_odontologo AND c.id_practica = pr.id_practica
AND o.id_odontologo = 1128;

#3- INNER JOIN
SELECT sum(pr.precio) AS "TOTAL FACTURADO"
FROM odontologos o 
INNER JOIN consultas c ON o.id_odontologo = c.id_odontologo
INNER JOIN practicas pr ON c.id_practica = pr.id_practica
WHERE o.id_odontologo ="1128";


#3B-CADA ODONTOLOGO
SELECT o.nombre, sum(pr.precio) AS "TOTAL FACTURADO"
FROM odontologos o,consultas c,practicas pr
WHERE o.id_odontologo = c.id_odontologo AND c.id_practica = pr.id_practica
GROUP BY o.id_odontologo;

#3B INNER JOIN
SELECT o.nombre, sum(pr.precio) AS "TOTAL FACTURADO"
FROM odontologos o 
INNER JOIN consultas c ON o.id_odontologo = c.id_odontologo
INNER JOIN practicas pr ON c.id_practica = pr.id_practica
GROUP BY o.id_odontologo;

#Consulta 4
SELECT p.nombre, p.apellido
FROM pacientes p,  odontologos o,consultas c
WHERE p.id_paciente = c.id_consulta 
AND c.id_odontologo = o.id_odontologo
AND o.nombre ="Matzin" AND 
month(c.fecha) = 11 ;

#4CON INNER
SELECT p.nombre, p.apellido
FROM pacientes p
INNER JOIN consultas c ON p.id_paciente = c.id_consulta
INNER JOIN odontologos o ON c.id_odontologo = o.id_odontologo
WHERE o.nombre="Matzin" AND month(c.fecha) = 11;


#5
SELECT count(c.id_consulta) AS "CONSULTAS PAMI MES 11"
FROM consultas c
INNER JOIN cobertura co ON c.id_practica = co.id_practica
INNER JOIN obrasocial os ON co.id_obrasocial = os.id_obrasocial
WHERE os.nombre="PAMI" AND month(c.fecha) = 11;


#6
SELECT p.nombre, p.apellido, pr.nombre AS "Tratamiento"
FROM pacientes p 
INNER JOIN consultas c ON p.id_paciente = c.id_paciente
INNER JOIN practicas pr ON c.id_practica = pr.id_practica
WHERE month(c.fecha)=11 AND pr.precio >150;


#union 
SELECT nombre,apellido FROM pacientes
UNION
SELECT nombre,direccion FROM obrasocial;

#pacientes que tengan obra social
#SELECT nombre FROM pacientes
#INTERSECT
#SELECT nombre FROM obrasocial;
SELECT p.nombre FROM pacientes p, obrasocial os
WHERE p.id_obrasocial = os.id_obrasocial;


#7
SELECT pr.id_practica, pr.nombre, count(pr.id_practica) AS "Cantidad realizada"
FROM practicas pr
INNER JOIN consultas c ON pr.id_practica = c.id_practica 
WHERE year(c.fecha) = 2021 
GROUP BY pr.id_practica
ORDER BY count(pr.id_practica) DESC;


-- 8
SELECT pr.nombre , AVG(pr.precio) AS "COSTE PROMEDIO"
FROM practicas pr 
INNER JOIN consultas c ON c.id_practica = pr.id_practica
GROUP BY pr.id_practica;


-- 9
SELECT DISTINCT os.nombre AS "Obra social", pr.nombre AS "descripcion",
pr.precio AS "precio", co.cobertura AS "cobertura"
from consultas c
INNER JOIN practicas pr ON pr.id_practica = c.id_practica
INNER JOIN cobertura co ON co.id_practica = c.id_practica
INNER JOIN obrasocial os ON os.id_obrasocial = co.id_obrasocial
ORDER BY os.nombre, pr.nombre, pr.precio; 


-- 10

SELECT DISTINCT os.nombre AS "Obra social", pr.nombre AS "descripcion",
((pr.precio * co.cobertura)/100) AS "TOTAL"
from consultas c
INNER JOIN practicas pr ON pr.id_practica = c.id_practica
INNER JOIN cobertura co ON co.id_practica = c.id_practica
INNER JOIN obrasocial os ON os.id_obrasocial = co.id_obrasocial; 


-- 11
SELECT  sum(pr.precio) "Facturado"
from practicas pr
INNER JOIN consultas c ON c.id_practica = pr.id_practica 
INNER JOIN cobertura co ON co.id_practica = pr.id_practica
INNER JOIN  obrasocial os  ON os.id_obrasocial= co.id_obrasocial
WHERE year(c.fecha) = 2021 and month(c.fecha) = 9 AND os.nombre="PAMI" ;


-- 12
SELECT  sum(pr.precio) "Total a pagar"
from practicas pr
INNER JOIN consultas c ON c.id_practica = pr.id_practica 
WHERE c.id_paciente = 103 AND year(c.fecha) = 2021 and month(c.fecha) = 11;


-- 13
SELECT o.nombre 
FROM odontologos o
INNER JOIN consultas c ON c.id_odontologo = o.id_odontologo
INNER JOIN pacientes p ON p.id_paciente = c.id_paciente
WHERE c.id_practica = 4457 AND p.apellido ="Garcia" AND p.nombre = "Martin";

-- 14
SELECT p.nombre,p.apellido
FROM pacientes p
INNER JOIN consultas c ON c.id_paciente = p.id_paciente
INNER JOIN odontologos o ON o.id_odontologo = c.id_odontologo
INNER JOIN obrasocial os ON os.id_obrasocial = p.id_obrasocial
WHERE (os.nombre = "PAMI" OR os.nombre = "OSPIA") AND o.nombre ="Perez";

-- 15 
SELECT o.nombre, count(c.id_consulta) AS "CONSULTAS "
FROM consultas c
INNER JOIN odontologos o ON o.id_odontologo = c.id_odontologo
GROUP BY o.id_odontologo;

-- 16
SELECT os.nombre
FROM obrasocial os, consultas c
INNER JOIN  odontologos o ON o.id_odontologo = c.id_odontologo
INNER JOIN pacientes p ON p.id_paciente = c.id_paciente
 WHERE p.id_obrasocial = os.id_obrasocial AND o.nombre = "Matzin" 
 AND (DAY(c.fecha) >=1 AND DAY(c.fecha) <=10) 
 AND month(c.fecha) =11 AND year(c.fecha) =2021;


-- 17
SELECT pr.nombre, ((pr.precio * co.cobertura)/100) AS "COBERTURA"
FROM practicas pr
INNER JOIN cobertura co ON co.id_practica = pr.id_practica
INNER JOIN obrasocial o ON o.id_obrasocial =co.id_obrasocial
WHERE o.nombre ="PAMI"
ORDER BY ((pr.precio * co.cobertura)/100) DESC;


-- 18
SELECT o.nombre 
FROM odontologos o
JOIN consultas c ON c.id_odontologo = o.id_odontologo
JOIN pacientes p ON p.id_paciente = c.id_paciente
WHERE c.id_practica = 1233 AND p.apellido ="Torres" AND p.nombre ="Jose" ;



-- 19
SELECT os.nombre, count(c.id_odontologo) 
FROM consultas c 
JOIN odontologos o ON o.id_odontologo = c.id_odontologo
JOIN pacientes p ON p.id_paciente = c.id_paciente
JOIN obrasocial os ON os.id_obrasocial = p.id_obrasocial
WHERE o.nombre = "Matzin"
GROUP BY os.id_obrasocial
ORDER BY os.nombre;

-- 20
SELECT pr.nombre, pr.precio, o.nombre , o.apellido
FROM practicas pr
INNER JOIN consultas c ON c.id_practica = pr.id_practica
INNER JOIN odontologos o ON o.id_odontologo = c.id_odontologo
WHERE year(c.fecha) = 2022 AND month(c.fecha) = 4 AND pr.precio > 200
 ;




-- Nombre, apellido de los pacientes que no hicieron ninguna consulta
SELECT p.nombre, p.apellido
FROM pacientes p
WHERE p.id_paciente NOT IN(SELECT id_paciente FROM consultas); -- QUITANDO EL NOT, SERÍA LOS QUE HICIERON CONSULTAS

-- Nombre, apellido de los pacientes que hicieron 2 consultas
SELECT p.nombre, p.apellido
FROM pacientes p
WHERE (SELECT count(c.id_paciente) FROM consultas c 
WHERE p.id_paciente = c.id_paciente) >=2 ; 

#ODONTOLOGOS QUE NO HAYAN REALIZADO CIRUGIA 4457
SELECT o.nombre, o.apellido 
FROM odontologos o
JOIN consultas c on c.id_odontologo = o.id_odontologo
WHERE c.id_practica <> (SELECT id_practica FROM practicas WHERE id_practica=4457)
GROUP BY o.id_odontologo;


