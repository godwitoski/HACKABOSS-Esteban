"use strict";

// const carrito = [
//   { nombre: "Monitor", precio: 50 },
//   { nombre: "TV", precio: 200 },
//   { nombre: "Teclado", precio: 750 },
//   { nombre: "Raton", precio: 350 },
//   { nombre: "Botella", precio: 250 },
//   { nombre: "Telefono", precio: 1000 },
// ];

// const carritoNuevo = carrito.map(function (producto) {
//   //ojo con los objetos
//   const nuevoObjetoCarrito = { ...producto }; //para no modificar el valor del objeto hay que crear otro. Pero recuerda que no modifica el array original
//   nuevoObjetoCarrito.nombre = "mismo";
//   return nuevoObjetoCarrito;
// });

// console.log(carrito);
// console.log(carritoNuevo);

const objeto = {
  nombre: "luis",
};

//--------------Funciones

//Reutilizar bloques de codigos

function sumar(numero1, numero2) {
  numero1 + numero2;
}

const num_1 = 7;
const num_2 = 10;

//funcion que chequee si los numeros son primos

// function esPrimo(num1) {
//   for (let i = 2; i < num1; i++) {
//     if (num1 % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const calc1 = esPrimo(num_1);
// console.log(calc1);
// const calc2 = esPrimo(num_2);
// console.log(calc2);

//----

// //Funciones autoIncovadas
//--
// (function sayHello() {
//   console.log("Hola!");
// })();

// (function () {
//   console.log("Como estás?");
// })();

// (function (nombre) {
//   console.log(`Hola, ${nombre}`);
// })("Jorgitoo");

//------------------

//Motor JS Y SU CONTEXTO DE EJECUCION

//----------

/*motor v8 de google, 
1-chequean que todo está bien
2-crea estructura de datos y traduce a codigo máquina de bajo nivel
3-Serán instrucciones que pueden ser ejecutados por navegador
4-Ejecuta

-----

Contexto de ejecucion por defecto es el Global. Ejecuta todo lo que no está en una funcion, si no pues este codigo perteneceria al contexto funcion.
---Al llamar a la funcion, se crea un el contexto por encima del contexto global .Pila de ejecucion
---Si se llama a otra funcion dentro de otra, esta ultima se pondrá encima y así sucesivamente. Se ejecuta todo y se va deshaciendo la pila

*/

// //ejemplo
// const myVariable = "Yo estoy declarada en el Contexto Global";
// console.log("Estamos en el contexto GLOBAL");

// function first() {
//   console.log("Contexto local 1:Dentro de first()");
//   second();
//   console.log("Contexto local 1:Otra vez dentro de first()");
// }

// function second() {
//   console.log("Contexto local 2:Dentro de second()");
//   third();
//   console.log("Contexto local 2:Otra vez dentro de second()");
// }

// function third() {
//   console.log("Contexto local 3:Dentro de third()");
//   console.log("Contexto Local 3:Termina third()");
// }

// first();
// console.log("Regresamos al contexto GLOBAL");

// //---------------
// Fases del contexto de ejecucion
//---------------
//creacion y ejecucion. 2 fases

//creacion 3 fases:1---Crea objeto GLOBAL(entorno de desarrollo). 2---SE CREA THIS, que apunta al objeto anterior/actual. 3---SE crea espacio de memoria para variables y funciones declaradas.

//console.log(this);
// console.log(this === window);

// window.color = "AAAAAAAazul";
// console.log(this);

// function testThisInsideFunctions() {
//   console.log(this);
// }
// const animal = {
//   legs: 3,
//   thisFunction: function () {
//     console.log(this);
//   },

//   dog: {
//     sound: "Guau, guau!",
//     thisFunction: function () {
//       console.log(this);
//     },
//     otraFunction() {
//       console.log(this);
//     },
//   },
// };

// console.log(this); //GLOBAL
// animal.thisFunction(); //CONTEXTO ANIMAL
// animal.dog.thisFunction(); //CONTEXTO DOG
// animal.dog.otraFunction(); //

// //creacion espacio de memoria. Se colocan en la parte mas alta
// ladrar();
// //ladrar2()

// //DECLARACION FUNCION
// function ladrar() {
//   console.log("Guauuu");
// }

// //FUNCION EXPRESADA
// const ladrar2 = function () {
//   console.log("Guauuu");
// };

// //const ladrar3 ="guau"

// function hola(cb, cb2) {
//   console.log("hola");
//   console.log(cb);
//   cb2();
// }

// function adios() {
//   console.log("adios");
//   // return "adios"
// }

// function angel() {
//   // console.log("A ver si me entero");
//   return "A ver si me entero";
// }

// // console.log(adios); //Da la funcion
// // console.log(adios()); //Da el resultado de la funcion . un string

// // const resultado = hola(adios);
// // console.log(resultado);

// console.log(hola(angel(), adios));

//---------

// CALLBACKS

//---------
// function sayHola(nombre) {
//   alert(`Hello ${nombre}`);
// }

// const welcome = function (myCallback) {
//   const myName = prompt(`Por favor ingresa tu nombre`);
//   myCallback(myName);
// };

// welcome(sayHola);

const welcome2 = function (callback) {
  const myName = prompt(`Por favor ingresa tu nombre`);
  callback(myName);
};

// welcome2(function (nombre) {
//   alert(`Hello ${nombre}`);
// });

//welcome2((nombre)=> alert(`Hello ${nombre}`));

//------------

// SORT .Ordena los elementos del array y lo devuelve en un nuevo array
//---
//String de la A-Z
// const names = ["Jorge", "Alvaro", "Pedro", "Luis", "Alfonso"];
// const namesSorted = names.sort();

// console.log(names); //Modifica original
// console.log(namesSorted);

// //---
// //Numeros hay que decir como quiero con una funcion
// const numbers = [12, 222, 333, 0, 12, 4, 98, 6];
// const numbersSorted = numbers.sort();
// console.log(numbersSorted);

// //menor a mayor
// const sort_1 = numbers.sort((a, b) => a - b);
// console.log(sort_1);

// //mayor a menor
// const sort_2 = numbers.sort((a, b) => b - a);
// console.log(sort_2);

// //valores por defecto funciones
// const calculo = (num1 = 20, num2 = 10, num3 = 20, num4 = 10) => {
//   return num1 + num2 + num3 - num4;
// };
// const resultado = calculo(9, 45, 9, 10);
// console.log(resultado);

// const resultado2 = calculo(9, 45, 9);
// console.log(resultado2);

// const resultado3 = calculo();
// console.log(resultado3);

//---------------

//-------------

//clausura en funciones . funciona en JS porque retiene en la memoria la informacion, Pero no deberia tener acceso segun la logica de lo CONTEXTO.

// function funcionExterna() {
//   let myVariableExterna = "Soy del ambito externo";

//   function funcionInterna() {
//     console.log(myVariableExterna);
//   }
//   return funcionInterna;
// }
// let clausura = funcionExterna();
// console.log(clausura);

// clausura();

//---------
//ejercicio

//---

//hacer una funcion que mediante closure(una funcion va a retornar otra funcion para ser usada en el contexto global)
//genera un contador.Cada vez que llamamos a la funcion, el contador se va incrementar

function funcionRetorno() {
  let contador = 0;

  function incrementarcont() {
    contador += 1;
    return contador;
  }
  return incrementarcont;
}

let resultado = funcionRetorno();
console.log(resultado);

resultado();
resultado();
resultado();
resultado();
console.log(resultado());

//
// Otro metodo
//

function generaContador() {
  let contador = 0;

  function incrementaContador() {
    contador++;
    return contador;
  }
  return incrementaContador;
}

let contador1 = generaContador();
let contador2 = generaContador();

contador1();
contador1();
contador1();
contador1();
contador1();
contador1();

contador2();
contador2();
contador2();
contador2();
contador2();
contador2();
contador2();
contador2();

console.log(contador1());
console.log(contador2());
