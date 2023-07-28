use odontologos;

#          GROUP BY   -  HAVING   - ORDER BY
#cantidad de paciente por obra social, mostrar el nombre de la obra social
SELECT os.nombre, count(p.id_paciente)
FROM obrasocial os, pacientes p
WHERE os.id_obrasocial = p.id_obrasocial 
GROUP BY os.nombre 
ORDER BY os.nombre ;

#mostrar los nombre de las os con 2 o más pacientes
SELECT os.nombre, count(p.id_paciente)
FROM obrasocial os, pacientes p
WHERE os.id_obrasocial = p.id_obrasocial 
GROUP BY os.nombre
HAVING count(p.id_paciente) >=2;


#               LIKE 
#MOSTRAR LOS NOMBRE DE LAS OBRAS SOCIALES QUE COMIENZAN POR O
SELECT os.nombre 
FROM obrasocial os
WHERE os.nombre LIKE "O%";

#MOSTRAR LOS NOMBRE DE LAS OBRAS SOCIALES QUE termine POR s
SELECT os.nombre 
FROM obrasocial os
WHERE os.nombre LIKE "%S";

#MOSTRAR LOS NOMBRE DE LAS OBRAS SOCIALES QUE termine POR s PERO QUE TENGA 5 CARACTERES ANTES
SELECT os.nombre 
FROM obrasocial os
WHERE os.nombre LIKE "_____S";
 
 #           IN  -  NOT - NULL
#MOSTRAR LOS PACIENTES NOMBRE Y APELLIDO QUE PERTENEZCAN A LAS OBRAS SOCIALES "PARTICULAR Y PAMI"
SELECT p.nombre, p.apellido
FROM pacientes p,obrasocial os
WHERE p.id_obrasocial = os.id_obrasocial 
AND os.nombre IN("PARTICULAR","PAMI","APROSS");

#MOSTRAR LOS PACIENTES NOMBRE Y APELLIDO QUE NOOOO PERTENEZCAN A LAS OBRAS SOCIALES "PARTICULAR Y PAMI"
SELECT p.nombre, p.apellido
FROM pacientes p,obrasocial os
WHERE p.id_obrasocial = os.id_obrasocial 
AND os.nombre NOT IN("PARTICULAR","PAMI");

#MOSTRAR LOS PACIENTES QUE NO TIENEN DIRECCION DECLARADA
SELECT * FROM pacientes WHERE direccion is not null;

#               BETWEEN
#MOSTRAR PRECIOS ENTRE 200 Y 500
SELECT * FROM practicas WHERE precio BETWEEN 200 AND 500;