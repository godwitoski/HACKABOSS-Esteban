use odontologos;

# cantidad de pacientes por obra social mostrar el nombre de la OS
SELECT os.nombre, count(p.id_paciente)
FROM obrasocial os, pacientes p
WHERE os.id_obrasocial = p.id_obrasocial
GROUP BY os.nombre
ORDER BY os.nombre DESC;

#mostrar los nombre de las obras sociales con mas de dos pacientes
SELECT os.nombre, count(p.id_paciente)
FROM obrasocial os, pacientes p
WHERE os.id_obrasocial = p.id_obrasocial GROUP BY os.nombre
HAVING count(p.id_paciente) > 2;

#mostrar los nombres de las obras sociales que comienzan con la letra O 
SELECT os.nombre
FROM obrasocial os 
WHERE os.nombre LIKE 'O%';

#mostrar los pacientes nombre y apellido que pertenezcan a las obras sociales PARTICULAR y PAMI
SELECT p.nombre, p.apellido
FROM pacientes p, obrasocial os
WHERE p.id_obrasocial = os.id_obrasocial AND os.nombre NOT IN ('PARTICULAR','PAMI');

#mostrar los pacientes que no tienen direccion decalrada
select * from pacientes where direccion is null;

#mostrar todas las practicas con precio entre 200 y 500
SELECT * FROM practicas WHERE precio BETWEEN 200 AND 500;


#union
SELECT nombre, apellido FROM pacientes
UNION
SELECT nombre, direccion FROM obrasocial;

SELECT p.nombre FROM pacientes p, obrasocial os
WHERE p.id_obrasocial = os.id_obrasocial;

