"use strict";

console.log(this);

let a = 8;

function multiplicar(b) {
  return a * b;
}

console.log(multiplicar(5));

// dfdsf;

console.log(a);
// console.log(b);

let suma = (a, b) => a + b;
const mostrarSuma = (x = 2, y = 4) => {
  let result = suma(x, y);

  console.log(result);
};

mostrarSuma(2, 3);
mostrarSuma(2, 3);

suma = (a, b) => a * b;
console.log(mostrarSuma(2, 3));
console.log(mostrarSuma(2, 3));

// ERRORES
// name
// message

// fileNumber
// lineNumber

// Error --> generico
// SyntaxError
// let 1objeto = {}

// ReferenceError
// sfdsfsd;

// TypeError
// const num = 3;
// num = 5;

// Stack en consola
function first() {
  debugger;
  second();
  debugger;
  return 1;
  function second() {
    debugger;
    third();
    debugger;
    return 2;
    function third() {
      return 3;
    }
  }
}

first();

try {
  // prueba a ejecutar el codigo
  //   console.log(Error);
  throw new Error("los numeros introducidos no son iguales");
} catch (e) {
  // si se produce un error en el codigo dentro de try
  console.log(e.name);
  console.log(e.message);
  console.log(`Se ha producido el siguiente error: ${e.message}`);
} finally {
  // se va a ejecutar siempre al final
}

// sdfdsffd;
let dia1 = "lunes";
const dia2 = "domingo";
console.log("Linea 80: he llegado hasta aquí");

// dia1 = "domingo";
console.log("Linea 83: he llegado hasta aquí");
// debugger;

const diasDeLaSemana = function (dia1, dia2) {
  console.log(dia1, dia2);
  console.log("Linea 86: he llegado hasta aqui");
  if (dia1 === "lunes" && dia2 === "domingo") {
    return "Tengo la semana entera para trabajar";
  } else if (dia1 === dia2) {
    return "Tengo que entregarlo hoy";
  } else {
    ("No tengo mucho tiempo para terminarlo");
  }
};
// debugger;
// sadsad;
diasDeLaSemana(dia1, dia2);
console.log("Linea 98: he llegado hasta aqui");

// JSON --> JavaScript Object Notation
const response =
  ' {"movies": [{"title": "007", "length": 120}, {"title": "Harry Potter", "length": 160}], "actors": [{"name": "DiCaprio"},{"name": "Angeline Jolie"}]}';

if (response) {
  try {
    console.log(response);
    let dealData = JSON.parse(response);
    if (typeof dealData !== "object") {
      throw new Error("Debemos convertirlo a JS");
    }
    console.log(dealData);
  } catch (err) {
    let errorMessage = err.name + " " + err.message;
    console.log(errorMessage);
  } finally {
    console.log("Esto es el final");
  }
}

// Crear una funcion dividir que reciba 2 argumentos. Añade codigo para lanzar un error personalizado cuando el divisor (dividendo/divisor) sea igual a cero. Luego, utiliza un bloque try catch para capturar el error lanzado y mostrar un mensaje adecuado en consola
function dividir(num1, num2) {
  if (num2 === 0) {
    throw new Error("No se puede dividir por 0");
  }
  return num1 / num2;
}

try {
  const resultado = dividir(1, 0);
  console.log(resultado);
} catch (e) {
  console.log(`Se produjo un error: ${e.message}`);
}

// Crear una funcion validarEdad (retorna true si cumple expectativas) para lanzar un error si la edad no es un numero o si es un numero negativo. Luego, utiliza bloque try/catch para capturar el error y mostrar un mensaje adecuado
function validarEdad(edad) {
  // if(isNaN(edad)) {
  //   if (!Number.isInteger(edad)) {
  if (typeof edad !== "number") {
    throw new Error(`${edad} no es un número`);
  }
  if (edad < 0) {
    throw new Error(`${edad} debe ser un número mayor o igual a 0`);
  }
  console.log("no hubo errores");
  return true;
}

try {
  validarEdad(18);
  validarEdad(23);
  validarEdad("45");
  validarEdad(42);
  validarEdad(18);
} catch (e) {
  console.log(`Se produjo un error: ${e.message}`);
}

// Crea una funcion sumar que retorne la suma de 2 numeros introducidos por el usuario. Lanzar un error si:
// - alguno de los argumentos no es un numero
// - si la suma es mayor a 1000
// Luego try/catch para intentar ejecutar la funcion correctamente 2 veces, y loguear mensaje de logro cuando esto suceda. Capturar el error cuando no se cumplan las condiciones y mostrar mensaje

/*
Comentario
Multilínea
*/

function sumar() {
  const num1 = parseInt(prompt("Introduce el primer número"));
  const num2 = parseInt(prompt("Introduce el segundo número"));
  console.log(num1, num2);
  console.log(typeof num1);
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error(`Ambos argumentos deben ser números`);
  }
  if (num1 + num2 > 1000) {
    throw new Error(`El resultado es mayor a 1000`);
  }

  return num1 + num2;
}

try {
  sumar();
  sumar();
  console.log("Las operaciones fueron exitosas");
} catch (e) {
  console.log(`Se ha producido un error: ${e.message}`);
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  console.log(number);
}
for (let number of numbers) {
  if (number === 5) {
    break;
  }
  console.log(number);
}
for (let number of numbers) {
  if (number === 5) {
    continue;
  }
  console.log(number);
}

// loguear solo los numeros pares
for (let number of numbers) {
  if (number % 2 !== 0) {
    continue;
  }
  console.log(number);
}
// If ternario
const number = 3;
number > 5 ? console.log("Es mayor a 5") : console.log("Es menor a 5");

// hace lo mismo
if (number > 5) {
  console.log("Es mayor a 5");
} else {
  console.log("Es menor a 5");
}

// Ejercicio repaso errores
// Crea funcion que dado un array devueve el numero mas alto y el mas bajo de dicho array. function([1,2,5,3,4]) devuelve ([5,1])
// try catch
const array = [12, 6, 9, 33, 5];

const arrayMinMax = (arr = undefined) => {
  if (!arr) throw new Error("debes pasar un parametro");
  if (arr.length === 0)
    throw new Error("debes pasar un array on al menos un item");

  return [Math.max(...arr), Math.min(...arr)];
};
// console.log(arrayMinMax());

try {
  arrayMinMax(array);
} catch (e) {
  console.log(`hay un error: ${e.message}`);
}

// JSON: JavaScript Object Notation
// API: datos --> JSON

const objetoJS = {
  nombre: "Juan",
  edad: 22,
  deportes: ["waterpolo", "tenis"],
  profesion: { titulo: "JS developer", experiencia: "junior" },
};
console.log(objetoJS);

console.log(JSON);

const objetoJSON = JSON.stringify(objetoJS);
console.log(objetoJSON);

const objetoJSTranformado = JSON.parse(objetoJSON);
console.log(objetoJSTranformado);

console.log(JSON.parse("{}"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("string"));
// console.log(JSON.parse("undefined"));

console.log(JSON.stringify({}));

// Para que se usa JSON
fetch("https://rickandmortyapi.com/api/character")
  .then((resp) => console.log(resp))
  .then((resultado) => console.log(resultado));
