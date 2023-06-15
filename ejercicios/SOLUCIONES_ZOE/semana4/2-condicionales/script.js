"use strict";

// Edita el archivo index.js para añadir estas variables similares a las del ejercicio anterior:

// nombre de tipo String y con el valor "Marta"

let nombre = "Marta";

// edad de tipo Number y con el valor 27

let edad = 27;

// A continuación, crea los condicionales necesarios para imprimir por consola la frase correcta

if (edad < 12) {
  console.log(
    `A ${nombre} le corresponde el descuento infantil (menores de 12 años)`
  );
} else if (edad < 30) {
  console.log(
    `A ${nombre} le corresponde el descuento juvenil (menores de 30 años)`
  );
} else if (edad > 60) {
  console.log(
    `A ${nombre} le corresponde el descuento de jubilados (mayores de 60 años)`
  );
} else {
  console.log(`A ${nombre} no le corresponde ningún descuento`);
}
