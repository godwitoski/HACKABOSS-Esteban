"use strict";

const arr1 = ["rojo", "azul", "verde"];
const arr2 = ["rojo", "azul", "verde"];
const arr3 = ["rojo", "amarillo", "verde"];
const arr4 = ["rojo", "azul", "verde", "amarillo"];

// funcion que recibe dos arrays:
// true --> si tienen exactamente mismo contenido y mismo orden
function compararArrays(array1, array2) {
  // chequear que sean length iguales
  if (array1.length !== array2.length) {
    return false;
  }
  // que cada item sea igual
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(compararArrays(arr1, arr2));
console.log(compararArrays(arr1, arr3));
console.log(compararArrays(arr1, arr4));

// CALLBACKS
const sumar = function (a, b) {
  return a + b;
};
function restar(a, b) {
  return a - b;
}

console.log(sumar(3, 2));
console.log(sumar);
console.log(restar(3, 2));

function calcular(a, b, operacion) {
  return operacion(a, b);
}

console.log(calcular(3, 2, restar));

const miArray = [1, 2, "tres", { animal: "perro" }, 5];

const objetoArray = {
  0: 1,
  1: 2,
  2: "tres",
  3: { animal: "perro" },
  4: 5,
};

const arrayLiteral = [1, "string", , 7 * 2];

const original = [true, 1, "hola"];
let copy = [...original];
copy[0] = 0;
console.log(copy[0]);
console.log(original[0]);

let letters = [..."hello"];
console.log(letters);

// creacion de array
const newArray = Array();
const newArray2 = Array(10);
const newArray3 = Array(10, 10, "treu", true);

console.log(newArray, newArray2, newArray3);

const arrayItem = [12];
console.log(Array.of());
console.log(Array.of(10));
console.log(Array.of(10, 10));

console.log(Array.from("hola"));
const originalFrom = [true, false, 6];
const newOriginalFrom = Array.from(originalFrom);
newOriginalFrom[0] = 0;
console.log(originalFrom, newOriginalFrom);

// cuidado con el length
let nuevoVacio = [];
nuevoVacio[1000] = 0;
console.log(nuevoVacio);

let arrayLength = [1, 2, 3, 4, 5];
arrayLength.length = 3;
console.log(arrayLength);
arrayLength.length = 0;
console.log(arrayLength);
arrayLength.length = 5;
console.log(arrayLength);

// añadir y eliminar elementos
const coloresPush = ["azul", "verde", "rojo"];
coloresPush.push("amarillo");
console.log(coloresPush.push(true));
console.log(coloresPush.push(false));
coloresPush[coloresPush.length] = "nuevo";

console.log(coloresPush);

const carrito = [
  { nombre: "Monitor", precio: 50 },
  { nombre: "TV", precio: 200 },
  { nombre: "Teclado", precio: 700 },
  { nombre: "Raton", precio: 300 },
  { nombre: "Botella", precio: 200 },
  { nombre: "Teléfono", precio: 100 },
];

for (let producto of carrito) {
  //   console.log(producto);
  //   console.log(carrito);
  producto.nombre = "mismo";
}
console.log(carrito);

// forEach
const carritoForEach = carrito.forEach(function (producto) {
  if (producto.precio > 500) {
    console.log("entre");
    producto.nombre = "impagable";
  }
  //   console.log(producto);
});
console.log(carrito);
console.log(carritoForEach);

// Map --> NO modifica el array original
const carritoNuevo = carrito.map(function (producto) {
  // ojo con los objetos
  producto.nombre = "mismo";
  return producto;
});
console.log(carrito);
console.log(carritoNuevo);

// crea nuevo array
const nuevoArray = carrito.map(function (producto) {
  //   producto.nombre = "juanen";
  return producto.precio;
});
console.log(nuevoArray);
console.log(carrito);

// no crea nuevo array
const nuevoArrayForEach = carrito.forEach((producto) => producto.nombre);
console.log(nuevoArrayForEach);

const arrResultados = carrito.map(function (producto, index, array) {
  console.log(producto);
  console.log(index);
  console.log(array);
});

// retornar nombres
const nombreProductos = carrito.map(function (producto) {
  return producto.nombre;
});
console.log(nombreProductos);
const nombreProductosFlecha = carrito.map((producto) => {
  return producto.nombre;
});
console.log(nombreProductosFlecha);
const nombreProductosFlechaDirect = carrito.map((producto) => producto.nombre);
console.log(nombreProductosFlechaDirect);

// array que contenga los precios de cada producto descontados un 10%
const preciosDescontados = carrito.map(function (producto) {
  return producto.precio * 0.9;
});
console.log(preciosDescontados);

// indexOf(item)
const fruits = ["pera", "manzana", "platano", "pera", "naranja"];
console.log(fruits.indexOf("pera"));

// lastIndexOf(item)
const fruits2 = ["pera", "manzana", "platano", "pera", "naranja"];
console.log(fruits2.lastIndexOf("pera"));
console.log(fruits2.lastIndexOf("peras"));

if (fruits2.lastIndexOf("uva") === -1) {
  fruits2.push("uva");
}
console.log(fruits2);

// pop()
const fruitsPop = ["pera", "manzana", "platano", "pera", "naranja"];
console.log(fruitsPop.pop());
console.log(fruitsPop);

// unshift(item)
const fruitsUnshift = ["pera", "manzana", "platano", "pera", "naranja"];
console.log(fruitsUnshift.unshift("papaya"));
console.log(fruitsUnshift);

// shift()
const fruitsShift = ["pera", "manzana", "platano", "pera", "naranja"];
console.log(fruitsShift.shift());
console.log(fruitsShift);

// reverse()
const fruitsReverse = ["pera", "manzana", "platano", "pera", "naranja"];
console.log(fruitsReverse);
console.log(fruitsReverse.reverse());
console.log(fruitsReverse);

// join(separator)
const fruitsJoin = ["m", "a", "n", "z", "a", "n", "a"];
console.log(fruitsJoin.join(""));
console.log(fruitsJoin.join("-"));
console.log(fruitsJoin.join());

// REPORTAR
// splice(index, count, ...items)
const fruitsSplice = ["pera", "manzana", "platano", "pera", "naranja"];
const spliceItems = fruitsSplice.splice(2, 4);
console.log(spliceItems);
console.log(fruitsSplice);

console.log(fruitsSplice.splice(2, 0));
console.log(fruitsSplice);

// slice(start, end)
// no modifica array original
// end no incluido
const fruitsSlice = ["pera", "manzana", "platano", "pera", "naranja"];
console.log(fruitsSlice.slice(2));
console.log(fruitsSlice);
console.log(fruitsSlice.slice(1, 5));

// findIndex(item)
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// con forEach
meses.forEach((mes, index) => {
  if (mes === "Abril") {
    console.log(`Encontrado en el indice ${index}`);
  }
});

const indice = meses.findIndex((mes) => mes === "Abril");
console.log(indice);

// includes(item), some(item)
meses.forEach((mes) => {
  if (mes === "Febrero") {
    console.log("Febrero existe");
  }
});

// includes
const respuestaIncludes = meses.includes("Febrero");
console.log(respuestaIncludes);

// some
const existe = carrito.some(function (producto) {
  return producto.nombre === "Teclado";
});
console.log(existe);

const existeSome = meses.some((mes) => mes === "Febrero");
console.log(existeSome);

// filter y reduce
// const carrito = [
//   { nombre: "Monitor", precio: 50 },
//   { nombre: "TV", precio: 200 },
//   { nombre: "Teclado", precio: 700 },
//   { nombre: "Raton", precio: 300 },
//   { nombre: "Botella", precio: 200 },
//   { nombre: "Teléfono", precio: 100 },
// ];

let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

// filter
let resultadoFilter1 = carrito.filter((producto) => producto.precio > 200);
console.log(resultadoFilter1);

let resultadoFilter2 = carrito.filter((producto) => producto.nombre !== "TV");
console.log(resultadoFilter2);

reduce(acumulador, (iteracion) => funcion, valorInicial);
let resultadoReduce = carrito.reduce((total, producto) => {
  console.log(total);
  return total + producto.precio;
}, 9000);
console.log(resultadoReduce);

const names = ["Jorge", "Danial", "Alberto", "Victor"];
const nombreTodoJunto = names.reduce(function (acumulador, nombre) {
  return acumulador + nombre;
});
console.log(nombreTodoJunto);

// find()
let resultado = "";
carrito.forEach((producto, index) => {
  if (producto.nombre === "TV") {
    resultado = carrito[index];
  }
});
console.log(resultado);

const resultadoFind = carrito.find((producto) => producto.nombre === "TV");
console.log(resultadoFind);

// every
// const carrito = [
//     { nombre: "Monitor", precio: 50 },
//     { nombre: "TV", precio: 200 },
//     { nombre: "Teclado", precio: 700 },
//     { nombre: "Raton", precio: 300 },
//     { nombre: "Botella", precio: 200 },
//     { nombre: "Teléfono", precio: 100 },
//   ];
let cumple = true;
// forEach
carrito.forEach((producto) => {
  if (producto.precio > 700) {
    cumple = false;
  }
});
console.log(cumple);

// every
const resultadoEvery = carrito.every((producto) => producto.precio <= 700);
console.log(resultadoEvery);

const numerosSeguidos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter elementos que sean pares
const numerosPares = numerosSeguidos.filter((numero) => numero % 2 === 0);
console.log(numerosPares);
