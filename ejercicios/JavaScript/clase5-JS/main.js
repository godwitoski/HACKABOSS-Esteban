"use strict";
// // const persona3 = {
// //   name: "juan",
// //   edad: 24,
// // };
// // //console.log(Object.entries(persona3));

// // for (let entry of Object.entries(persona3)) {
// //   console.log(entry);
// //   //  const prop = entry[0];
// //     //const valor = entry[1];
// //   const [prop, valor] = entry;
// //   //console.log(`${prop}: ${valor}`);
// // }
// //--------------------------*/
// //
// //

// //Arrays
// const arr1 = ["rojo", "azul", "verde"];
// const arr2 = ["rojo", "amarillo", "majenta"];
// const arr3 = ["rojo", "amarillo", "verde"];
// const arr4 = ["rojo", "azul", "verde", "amarillo"];

// //funcion que recibe 2 arrays: devuelve
// //true --> si tienen mismo contenido en mismo orden

// function compararArray(array1, array2) {
//   //chequear que sean lenght iguales
//   if (array1.lenght !== array2.lenght) {
//     return false;
//   }
//   //que cada item sea igual
//   for (let i = 0; i < array1.lenght; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compararArray(arr1, arr2));
// console.log(compararArray(arr1, arr3));
// console.log(compararArray(arr1, arr4));

// //

// //callbacks

// function sumar(a, b) {
//   return a + b;
// }

// function restar(a, b) {
//   return a - b;
// }

// console.log(sumar(3, 2));
// //console.log(restar(3, 2));

// function calcular(a, b, operacion) {
//   return operacion(a, b);
// }

// console.log(calcular(3, 2, restar));

//------------------------

// const miArray = [1, 2, "tres", { animal: "perro" }, 5];

// const objetoArray = {
//   0: 1,
//   1: 2,
//   2: "tres",
//   3: { animal: "perro" },
//   4: 5,
// };

// const arrayListeral = [1, "string", , 7 * 2];

// const original = [true, 1, "hola"];

// let copy = [...original];

// copy[0] = 0;
// console.log(copy[0]);
// console.log(original[0]);

// let letters = [..."hello"];
// console.log(letters);

// const newArray = new Array();
// const newArray2 = new Array(10); //me da 10 indices vacios
// const newArray3 = new Array(10, 10, "trueaea");

// console.log(newArray, newArray2, newArray3);

// console.log(Array.of());
// console.log(Array.of(10)); //con un solo indice con el 10
// console.log(Array.of(10, 10));

// console.log(Array.of("hola"));
// const originalForm = [true, false, 6];
// const newOriginalFrom = Array.from(originalForm); //esto es copia, no posicion de memoria.

// //cuidado con el length

// let nuevoVacio = [];

// nuevoVacio[1000] = 0; //crea 1000 vacios y pone el 0 en el 1001
// console.log(nuevoVacio);

// let arrayLength = [1, 2, 3, 4, 5];
// arrayLength.length = 3; //se queda en 3 y borra todo lo que le sigue
// console.log(arrayLength);
// arrayLength.length = 0; //array vacio, borras hasta el indice
// console.log(arrayLength);
// arrayLength.length = 5; //creas 5 posiciones pero vacias
// console.log(arrayLength);

// //---------

// //añadir  y eliminar elementos
// const coloresPush = ["azul", "verde", "rojo"];
// //añadimos valores
// coloresPush.push("amarillo");
// console.log(coloresPush.push(true)); //retornan las longitudes del array
// console.log(coloresPush.push(false));

// // const longitud = coloresPush.length;
// // coloresPush[longitud] ="nuevo" //coincide longitud e indice

// console.log(coloresPush);

//----------------
///metodos iteradores

// const carrito = [
//   { nombre: "Monitor", precio: 50 },
//   { nombre: "TV", precio: 200 },
//   { nombre: "Teclado", precio: 750 },
//   { nombre: "Raton", precio: 350 },
//   { nombre: "Botella", precio: 250 },
//   { nombre: "Telefono", precio: 1000 },
// ];

// for (let producto of carrito) {
//   // console.log(producto);
//   //console.log(carrito)
//   producto.nombre = "mismo"; //todos pasan a llamarse mismo
// }

// console.log(carrito);

// //forEach iterar

// carrito.forEach(function (producto) {
//   if (producto.precio > 500) {
//     producto.nombre = "impagable"; //cambia el valor
//   }
//   //  producto.nombre ="mismitoo"
//   //  console.log(producto.nombre)
// }); //pasar funcion si o si

// console.log(carrito); //estos bucles modifican el array original

//------

// Map

// const carritoNuevo = carrito.map(function (producto) {
//   //map crea nuevo array y lo guardo en otro array
//   producto.nombre = "mismo";
//   // console.log(producto)
// });

// console.log(carrito, carritoNuevo);

// //crea nuevo array - retorna el nuevo array. no modifica el this pero si el array original
// const nuevoArray = carrito.map((producto) => producto.precio);
// console.log(nuevoArray);
// console.log(carrito);

// // forEach -no crea nuevo array. no retorna nada
// const nuevoArrayForEach = carrito.forEach((producto) => producto.nombre);
// console.log(nuevoArrayForEach);

// const arrResultados = carrito.map(function (producto, index, array) {
//   console.log(producto);
//   console.log(index);
//   console.log(array);
// });
// const carrito = [
//   { nombre: "Monitor", precio: 50 },
//   { nombre: "TV", precio: 200 },
//   { nombre: "Teclado", precio: 750 },
//   { nombre: "Raton", precio: 350 },
//   { nombre: "Botella", precio: 250 },
//   { nombre: "Telefono", precio: 1000 },
// ];

// //retornar nombres
// const nombreProductos = carrito.map(function (producto) {
//   return producto.nombre;
// });
// console.log(nombreProductos);

// const nombreProductosFlecha = carrito.map((producto) => {
//   return producto.nombre;
// });
// console.log(nombreProductos);

// const nombreProductosFlechaDirect = carrito.map((producto) => producto.nombre);
// console.log(nombreProductos);

// //nuevo array que contenga los precios de cada producto descontados un 10%

// const precioDescontado = carrito.map(function (producto) {
//   return producto.precio * 0.9;
// });
// console.log(carrito, precioDescontado);

// //-----------

// //indexOf(item)
// const fruits = ["pera", "manzana", "platano", "pera", "naranja"];
// console.log(fruits.indexOf("pera")); //te da el index contando desde la izq

// //lastIndexOf(item)
// console.log(fruits.lastIndexOf("pera")); //te da el index contando desde la derecha
// console.log(fruits.lastIndexOf("peras")); //si no hay da -1

// const fruits2 = ["pera", "manzana", "platano", "pera", "naranja"];

// if (fruits2.lastIndexOf("uva") === -1) {
//   fruits2.push("uva");
// }
// console.log(fruits2);

// //-------

// //pop()
// const fruitsPop = ["pera", "manzana", "platano", "pera", "naranja"];
// console.log(fruitsPop.pop()); //te da el ultimo y se lo quita al original
// console.log(fruitsPop);

// //unshift(item)
// const fruitsUnshift = ["pera", "manzana", "platano", "pera", "naranja"];
// console.log(fruitsUnshift.unshift("papaya")); //añade el item en el primer indice
// console.log(fruitsUnshift);

// //shift()
// const fruitsshift = ["pera", "manzana", "platano", "pera", "naranja"];
// console.log(fruitsshift.shift()); //elimina el primer indice
// console.log(fruitsshift);

// //reverse()
// const fruitsreverse = ["pera", "manzana", "platano", "pera", "naranja"];
// console.log(fruitsreverse);
// console.log(fruitsreverse.reverse()); //cambia el orden de
// console.log(fruitsreverse);

// //join(separator)
// const fruitsJoin = ["m", "a", "N", "Z", "a", "n", "a"];
// console.log(fruitsJoin.join(""));
// console.log(fruitsJoin.join("-"));
// console.log(fruitsJoin.join());

// //splice(index,count,...items) //emepzamos en un indice y decimos cuantos queremos que quite
// const fruitsplice = ["pera", "manzana", "platano", "pera", "naranja"];
// // const spliceItems = fruitsplice.splice(2, 4); //nos devuelve los eliminados
// // console.log(spliceItems);
// // console.log(fruitsplice);//tendrá lo no eliminado

// fruitsplice.splice(1, 0, "uva", "cereza"); //posicion,elementos a eliminar,lo que quiero añadir
// console.log(fruitsplice);

//

// // slice(start,end)
// const fruitsSlice = ["pera", "manzana", "platano", "pera", "naranja"];
// console.log(fruitsSlice.slice(2)); //no modifica el original
// console.log(fruitsSlice);
// console.log(fruitsSlice.slice(1, 3)); //no se incluye el end

// //findIndex(item)
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "mayo"];

// //con forEach
// meses.forEach((mes, index) => {
//   if (mes === "Abril") {
//     console.log(`${mes}, Encontrado en el indice ${index}`);
//   }
// });

// const indice = meses.findIndex(function (mes) {
//   return mes === "Abril";
// });

// console.log(indice);

// //includes(items) , some(items)

// meses.forEach((mes) => {
//   if (mes === "Febrero") {
//     console.log(`${mes}, Existe`);
//   }
// });

// //includes
// const respuestaIncludes = meses.includes("Febrero");
// console.log(respuestaIncludes);

// //some - alguno- es como includes para objeto
// const existe = carrito.some(function (producto) {
//   return producto.nombre === "Teclado";
// });
// console.log(existe);

// const existeSome = meses.some((mes) => {
//   return mes === "Febrero";
// });
// console.log(existeSome);

//--------------------------

//filter y reduce
const carrito = [
  { nombre: "Monitor", precio: 50 },
  { nombre: "TV", precio: 200 },
  { nombre: "Teclado", precio: 700 },
  { nombre: "Raton", precio: 350 },
  { nombre: "Botella", precio: 250 },
  { nombre: "Telefono", precio: 100 },
];

let total = 0;
carrito.forEach((producto) => (total += producto.precio));

console.log(total);

//filter
// let productosCarosFilter = carrito.filter((producto) => producto.precio > 200);
// console.log(productosCarosFilter);

// let resultadoFilter2 = carrito.filter(
//   (producto) => producto.nombre !== "Botella"
// );
// console.log(resultadoFilter2);

//reduce (acomulador,iteracion =>funcion,Valor inicial)
let resultadoReduce = carrito.reduce(
  (total, producto) => total + producto.precio,
  0 //0, es el valor inicial que se pasa al acomulador, producto es cada iteracion del carrito. la suma se guarda en el total para la siguiente iteracion
);
console.log(resultadoReduce);

const names = ["Jorge", "Daniel", "Alberto", "Victor"];
let namesJuntos = names.reduce((acumulador, nombres) => acumulador + nombres);
console.log(namesJuntos);

//find()
//nuevo array en basse al primer true

let resultado = "";

carrito.forEach((producto, index) => {
  if (producto.nombre === "TV") {
    resultado = carrito[index];
  }
});
console.log(resultado);

const resultadoFind = carrito.find((producto) => producto.nombre === "TV");
console.log(resultadoFind);

//every -true-false
let cumple = true;
carrito.forEach((producto) => {
  if (producto.precio > 700) {
    cumple = false;
  }
});
console.log(cumple);

const resultadoEvery = carrito.every((producto) => producto.precio <= 700);
console.log(resultadoEvery);

//-----------------

//

const numerosSeguidos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter . filtra todos los pares
const numerosPares = numerosSeguidos.filter((numero) => numero % 2 === 0);
console.log(numerosPares);
