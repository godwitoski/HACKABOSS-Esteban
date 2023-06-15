"use strict";

// Edita el archivo index.js para añadir tres variables:

//nombre de tipo String y con el valor "Marta"

let nombre = "Marta";

//edad de tipo Number y con el valor 27

let edad = 27;

//color de tipo String y color "púrpura"

let color = "púrpura";

// Después usa esas variables para que por la consola imprima un texto:

//Opción 1, concatenando:
console.log(
  "Hola, me llamo " +
    nombre +
    ", tengo " +
    edad +
    " años y mi color favorito es el " +
    color +
    "."
);

//Opción 2, template string:
console.log(
  `Hola, me llamo ${nombre}, tengo ${edad} años y mi color favorito es el ${color}.`
);
