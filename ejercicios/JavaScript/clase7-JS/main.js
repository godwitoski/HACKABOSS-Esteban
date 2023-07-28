"use strict";

console.log(this); //global

let a = 8; //global

function multiplicar(b) {
  //local
  return a * b;
}

console.log(multiplicar(5));

//dasdad;//ESTO ES UN ERROR, VAMOS A MANEJARLO.

console.log(a);
// console.log(b);

let suma = (a, b) => a + b;
const mostrarSuma = (x, y) => {
  let result = suma(x, y);
  console.log(result);
};

mostrarSuma(2, 3);
mostrarSuma(2, 3);

suma = (a, b) => a * b; //se cambia aunque esté en el local
console.log(mostrarSuma(2, 6));
console.log(mostrarSuma(2, 6));

//---------ERRORES

//El objeto error puede tener
//name
//message

//fileNumber
//lineNumber

//--TIPOS:
//Error ---> GENERICO

//SyntaxError : let 111objeto ={}

//ReferenceError: sadsfaas;

//TypeError: const num = 2. num=55

//stack en consola
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
  //prueba a ejecutar el codigo
  console.log(Error);
  throw new Error("los numero introducidos no  son iguales");
} catch (e) {
  //entra si se produce error en el codigo dentro de try
  console.log(e.name);
  console.log(e.message);
  console.log(`Se ha producido el siguiente error: ${e.message}`);
} finally {
  //se ejecuta siempre al final---- poco usado
}

////debugear con los console.log y debbuger
let dia1 = "Lunes";
const dia2 = "domingo";
console.log("Linea 80: he llegado hasta aquí");

// dia1 = "domingo";
console.log("Linea 83: he llegado hasta aquí");
//debugger
const diasDeLaSemana = function (dia1, dia2) {
  console.log(dia1, dia2);
  console.log("Linea 87: he llegado hasta aquí");
  if (dia1 === "Lunes" && dia2 === "domingo") {
    return "Tengo la semana entera para trabajar";
  } else if (dia1 === dia2) {
    return "Tengo que entregarlo hoy";
  } else {
    ("No tengo mucho tiempo para teminarlo");
  }
};
//debugger
//gasdasd
diasDeLaSemana(dia1, dia2);
console.log("Linea 99: he llegado hasta aquí");

const response =
  '{"movies":[{"title": "007","length": 120},{"title": "Harry Potter", "length": 160}], "actors":[{"name": "Dicaprio"},{"name": "Angelina jolie"}]}';

if (response) {
  try {
    throw new Error("es un error");
    console.log(response);
    let dealData = JSON.parse(response);
    console.log(dealData);
  } catch (err) {
    let errorMessage = err.name + " " + err.errorMessage;
    console.log(errorMessage);
  } finally {
    console.log("Esto es el final");
  }
}

//crear funcion dividir que reciba 2 argumentos, Añade codigo personalizado para lanzar un error cuando el divisor sea igual a 0. Luego, utiliza un bloque try catch para capturar el error lanzado y mostrar un mensaje adecuado en consola

function dividir(dividendo, divisor) {
  //grande -- pequeño
  if (divisor === 0) {
    throw new Error("El divisor es igual a cero. No puedo ejecutarlo");
  } else {
    return dividendo / divisor;
  }
}

try {
  console.log(dividir(12, 0));
} catch (err) {
  console.log(err);
}

//crear funcion validarEdad (retorna tru si cumple expectativas)para lanzar un error si la edad no es un numero o si un numero o si es numero negativo.LUEGO, utiliza try,catch para capturar el error y mostrar un mensaje adecuado

function validarEdad(edad) {
  if (typeof edad !== "number") {
    //!number.isInteger(edad)
    throw new Error(`${edad} no es un número`);
  }
  if (edad < 0) {
    throw new Error(`${edad} no es un número mayor que cero`);
  }
  console.log("No hubo errores");
  return true;
}

try {
  //ejecucion de la funcion
  validarEdad(0);
  validarEdad(11);
  validarEdad(3);
  validarEdad("18");
  validarEdad(22);
} catch (e) {
  console.log(`Se produjo un error: ${e.message}`);
}

// ------
// crear funcion sumar, que retorne la suma de 2 numeros introducidos por el usuario. Además lanzaremos un error:
// - alguno de los argumento no es un numero
// - si la suma es mayor a 1000
// usamos try /catch para intetnar ejecutar la funcion correctamente 2veces y loguear mensaje de logo cuando suceda. Capturar el error cuando no se cumplan las condiciones y mostrar el mensaje

function sumar() {
  const num1 = parseInt(prompt("Introduce primer parametro a sumar"));
  const num2 = parseInt(prompt("Introduce segundo parametro a sumar"));
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error(`Alguno de estos argumentos no es un número`);
  }
  if (num1 + num2 > 1000) {
    const result = num1 + num2;
    throw new Error(`${result} esto es un resultado mayor a 1000`);
  }
  return num1 + num2;
}

try {
  sumar();
  sumar();
  console.log("Las operaciones fueron exitosas");
} catch (e) {
  console.log(`Se produjo el siguiente error: ${e.message}`);
}

//----------
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let number of numbers) {
//   console.log(number);
// }

// for (let number of numbers) {
//   if (number === 5) {
//     continue;
//   }
//   console.log(number);
// }

// // loguear solo los numero pares

// for (let number of numbers) {
//   number % 2 !== 0 ? undefined : console.log(number); //if ternario. Da true o false

//   // if (number % 2 !== 0) {
//   //   continue;
//   // }
//   // console.log(number);
// }

// //if ternario
// const number = 3;
// number > 5 ? console.log("Es mayor a 5") : console.log("Es menor a 5");

// if (number > 5) {
//   console.log("Es mayor a 5");
// } else {
//   console.log("Es menor a 5");
// }

// //es lo mismo
// for (let number of numbers) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }

//Ejercicio repaso errores
//crea funcion que dado un array devuelve el numero mas alto y el mas bajo de dicho array. Funcion([1,2,3,4]) y devuelve ([5,1])
//try catch
const array = [12, 6, 7, 33, 5];
const arrayMinMax = (arr = undefined) => {
  if (!arr) throw new Error("Debes un parametro");
  if (arr.length === 0)
    throw new Error("Debes pasar array con al menos 1 item");
  return [Math.max(...arr), Math.min(...arr)];
};
//console.log(arrayMinMax(array));

try {
  arrayMinMax(array);
} catch (e) {
  console.log(`Hay un error:${e.message}`);
}

//---
//--------------JSON: JavaScript Object Notation
//FRONTEND HACE LLAMADA A LA API DEL BACKEND. API: datos ---> formato JSON

const objetoJS = {
  nombre: "Juan",
  edad: 22,
  deportes: ["waterpolo", "tenis"],
  profesion: { titulo: "JS developer", experiencia: "Junior" },
};
console.log(objetoJS);

console.log(JSON);
// console.log("[1,2,3]");

const objetoJSON = JSON.stringify(objetoJS);
console.log(objetoJSON);

const objetoJSTransformado = JSON.parse(objetoJSON);
console.log(objetoJSTransformado);

console.log(JSON.parse("{}"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("string")); //no permite string
// console.log(JSON.parse("undefined"));//ni unde.

console.log(JSON.stringify({}));

fetch("https://rickandmortyapi.com/api/character")
  .then((resp) => resp.json())
  .then((resultado) => console.log(resultado));
