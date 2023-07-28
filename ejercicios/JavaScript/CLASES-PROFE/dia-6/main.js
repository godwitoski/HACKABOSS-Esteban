"use strict";

// REPASO
const carrito = [
  { nombre: "Monitor", precio: 50 },
  { nombre: "TV", precio: 200 },
  { nombre: "Teclado", precio: 700 },
  { nombre: "Raton", precio: 300 },
  { nombre: "Botella", precio: 200 },
  { nombre: "Teléfono", precio: 100 },
];

const carritoNuevo = carrito.map(function (producto) {
  // ojo con los objetos
  // referencia por espacio de memoria, crear un shallow copy si queremos manipularlo sin modificar el original
  const nuevoObjeto = { ...producto };
  nuevoObjeto.nombre = "mismo";
  return nuevoObjeto;
});
console.log(carrito);
console.log(carritoNuevo);

const arrayDeNumeros = [1, 2, 3, 4, 5, 6];

// Map no altera el array original
const arrayDeNumerosNuevo = arrayDeNumeros.map((numero) => {
  numero = 3;
  return numero;
});
console.log(arrayDeNumeros);
console.log(arrayDeNumerosNuevo);

// podiamos cambiar propiedades de objetos
const objeto = {
  nombre: "Luis",
};
console.log(objeto);
objeto.nombre = "Pedro";
console.log(objeto);

// FUNCIONES //
// Reutilizar bloques de codigo
function sumar(numero1, numero2) {
  numero1 + numero2;
}
const num_1 = 7;
const num_2 = 10;

// function que chequee si los numeros son primos
// primo = divisible por sí mismo y por 1
function esPrimo(numero) {
  // empezamos en 2 porque asumimos que todos son divisibles por 1
  for (let i = 2; i < numero; i++) {
    console.log(i);
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

const calc1 = esPrimo(4);
console.log(esPrimo(10000000000000000000));
console.log(calc1);
console.log(esPrimo(num_2));
console.log(esPrimo(15));

// funciones que se invocan nada mas comenzar
(function sayHello() {
  console.log("Hola!");
})();

(function () {
  console.log("Como estas?");
})();

(function (nombre) {
  console.log(`Hola ${nombre}`);
})("Jorge");

//---- Motor JS y su contexto de ejecución ----//
const myVariable = "Yo estoy declarada en el contexto global";
console.log("Contexto global: estamos en el contexto global");

function first() {
  console.log("Contexto Local 1: estamos dentro de first()");
  second();
  console.log("Contexto Local 1: otra vez dentro de first()");
}

function second() {
  console.log("Contexto Local 2: estamos dentro de second()");
  third();
  console.log("Contexto Local 2: otra vez dentro de second()");
}

function third() {
  console.log("Contexto Local 3: estamos dentro de third()");
  console.log("Contexto Local 3: Termina third()");
}

first();
console.log("Regresamos al contexto global");

// Fases del contexto de ejecución
console.log(this);
console.log(this === window);

window.color = "blue";
console.log(this);

function testThisInsideFunctions() {
  console.log(this);
}

const animal = {
  legs: 4,
  thisFunction: function () {
    console.log(this);
  },
  dog: {
    sound: "Guau, guau!",
    thisFunction: function () {
      console.log(this);
    },
    otrafuncion() {
      console.log(this);
    },
  },
};

console.log(this); // global
animal.thisFunction(); // contexto animal
animal.dog.thisFunction(); // contexto dog
animal.dog.otrafuncion(); // contexto dog

// ojo con arrow functions. No actualizan this
// ---------------
// Creación de espacios en memoria
ladrar();
// ladrar2();
console.log(ladrar3);
// Funcion declarada
function ladrar() {
  console.log("guau");
}
// funcion expresada
const ladrar2 = function () {
  console.log("guau2");
};

const ladrar3 = "guau";

function hola(string, cb2) {
  console.log("hola");
  console.log(string);
  cb2();
}

function adios() {
  console.log("adios");
}

function comiendo() {
  //   console.log("estoy comiendo");
  return "estoy comiendo";
}
// const adios = function() {
//     console.log("adios");
// }

// Diferencia entre pasar una funcion o su ejecucion
console.log(adios);
console.log(adios());
const resultadoCb = hola(adios);
const queHaces = comiendo();
console.log(hola(queHaces, adios));

// CALLBACKS

function sayHello(nombre) {
  alert(`Hello ${nombre}`);
}
const welcome = function (myCallback) {
  const myName = prompt("Por favor ingresa tu nombre");
  myCallback(myName);
};
welcome(sayHello);

// se puede declarar la funcion directamente al pasarla como argumento
const welcome2 = function (callBack) {
  const myName = prompt("Por favor ingresa tu nombre");
  callBack(myName);
};

welcome2(function (nombre) {
  alert(`Hello ${nombre}`);
});

welcome2((nombre) => alert(`Hello ${nombre}`));

// SORT
const names = ["Jorge", "Alvaro", "Pedro", "Luis", "Alfonso"];
const namesSorted = names.sort();
console.log(namesSorted);
console.log(names); // modifica original

// "no funciona" con numeros
const numbers = [21, 110, 54, 33, 99, 8];
const numbersSorted = numbers.sort();
console.log(numbersSorted);

// ordenar numeros de menor a mayor
const sort_1 = numbers.sort((a, b) => a - b);
console.log(sort_1);

// ordenar numeros de mayor a menor
const sort_2 = numbers.sort((a, b) => b - a);
console.log(sort_2);

// valores por default
const calculo = (num1 = 20, num2 = 10, num3 = 20, num4 = 10) => {
  return num1 + num2 + num3 - num4;
};
const resultado = calculo(9, 45, 9, 10);
console.log(resultado);

const resultado2 = calculo(9, 45, 9);
console.log(resultado2);

const resultado3 = calculo();
console.log(resultado3);

//----- CLOSURES en funciones -----//
function functionExterna() {
  let variableExterna = "Soy del ámbito externo";

  function functionInterna() {
    console.log(variableExterna);
  }

  return functionInterna;
}

let clausura = functionExterna();
console.log(clausura);

clausura();

// hacer una funcion que mediante closure (una funcion va a retornar otra funcion para ser usada en el contexto global) gener un contador. Cada vez que llamamos a la funcion el contador se va a incrementar

// Crear funcion
function generaContador() {
  let contador = 0;

  function incrementaContador() {
    contador++;
    return contador;
  }
  // retornar funcion que incremente
  return incrementaContador;
}
// ejecutar funcion y guardar en una variable
const contador1 = generaContador();
const contador2 = generaContador();

// console.log(tiraError);
// ejecutar funcion guardada en esa variable

// cada funcion va a tener una referencia distinta a las variables que existieron durante su contexto de ejecucion
contador1();
contador1();
contador2();
contador2();
contador2();
contador2();
contador1();
contador2();
contador1();
console.log(contador1());
contador2();
contador2();
console.log(contador2());

// loguear en consola
