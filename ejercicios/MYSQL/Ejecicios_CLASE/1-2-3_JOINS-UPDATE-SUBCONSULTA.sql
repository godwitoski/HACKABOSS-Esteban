/* Escribe a continuación el código SQL solicitado: */
USE bootcamp;
SELECT * FROM students s
INNER JOIN addresses a ON a.id_student = s.id;

SELECT s.name, s.lastname, s.email 
FROM students s 
INNER JOIN addresses a ON a.id_student = s.id
WHERE country = "Indonesia";
-- /**********************/
ALTER TABLE students  ADD age INT UNSIGNED ;
UPDATE students SET age = 50 WHERE id = 1;
UPDATE students SET age = 18 WHERE id = 2;
UPDATE students SET age = 42 WHERE id = 3;
UPDATE students SET age = 20 WHERE id = 4;
UPDATE students SET age = 15 WHERE id = 5;

/*
UPDATE students SET age = CASE
    WHEN id = 1 THEN 20
    WHEN id = 2 THEN 15
    WHEN id = 3 THEN 45
    WHEN id = 4 THEN 70
    WHEN id = 5 THEN 25
    END
    WHERE id>0;

*/
-- ----------------------
SELECT name, age FROM students
WHERE age = (SELECT max(age) FROM students);