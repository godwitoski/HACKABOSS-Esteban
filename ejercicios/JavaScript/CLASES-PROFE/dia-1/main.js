"use strict";

// NUMBERS //
const entero = 42;
const decimal = 42.5;

// suma
const suma = entero + decimal;
console.log(suma);

// raiz cuadrada
const raizCuadrada = console.log(Math.sqrt(entero));
// máximo valor
console.log(Math.max(4, 7, 10, 2));
// mínimo valor
console.log(Math.min(4, 7, 10, 2));

// número random
const randomNumber = Math.random();
// redondeo hacia abajo
const redondeoAbajo = Math.floor(5.74);
console.log(redondeoAbajo);
// redondeo hacia arriba
const redondeoArriba = Math.ceil(5.74);
console.log(redondeoArriba);

// Hacemos un dado
Math.random(); // 0 - 0.999999
const resultadoDado = Math.floor(Math.random() * 6) + 1;
console.log(resultadoDado);

// STRINGS //
const saludo = "Hola Pedro";
const saludo2 = 'Hola Pedro2';
const saludo3 = `Hola Pedro3`;
console.log(saludo, saludo2, saludo3);

const textoConComillas = "Hola soy Pedro, pero me llaman 'Juan'";
const textoConComillas2 = 'Hola soy Pedro, pero me llaman "Juan"';
const textoConComillas3 = `Hola soy Pedro, pero me llaman 'Juan'`
const textoConComillas4 = 'Hola soy Pedro, pero me llaman \'Juan\''

console.log(textoConComillas);
console.log(textoConComillas2);
console.log(textoConComillas3);
console.log(textoConComillas4);

const textoConSaltoDeLinea = "Hola soy Pedro, pero me llaman \nJuan";
console.log(textoConSaltoDeLinea);

const holaMundo = "Hola, mundo";
console.log(holaMundo.length);
console.log(holaMundo);
console.log(holaMundo.trim());
console.log(holaMundo.charAt(0));
console.log(holaMundo.indexOf("mundo"));
console.log(holaMundo.substring(0, 4));
console.log(holaMundo.toUpperCase());
console.log(holaMundo.toLowerCase());

const nombre = "Pedro";

const mensajeConVariables = "Hola me llamo: " + num;
console.log(mensajeConVariables);

const misMananas = "Voy a hacer yoga 3 veces por semana. Yoga, yoga, yoga";
console.log(misMananas.indexOf("a"));
console.log(misMananas.toUpperCase());

console.log(misMananas.replaceAll("yoga", "pilates"));


const actividadMorning = "pasear";
const actividadTarde = "pescar";

const diaDeHoy = `Esta mañana me fui a ${actividadMorning}, y por la tarde, me fui a ${actividadTarde}`;

console.log(`En el dia de hoy hice lo siguiente: ${diaDeHoy}`);

console.log(diaDeHoy);

// BOOLEAN //
let esMayorDeEdad = true;
let tieneMascota = false;

const truthy = 0;
console.log(!!esMayorDeEdad);


// UNDEFINED - NULL //
let planeta;
if(true) {
    planeta = "La Tierra"
}
console.log(planeta);

let noHayPlaneta = null
console.log(noHayPlaneta);

const edad = 18;
let premio = "8";

console.log(edad.toString());
console.log(edad);

console.log(typeof edad);
console.log(typeof edad.toString());

console.log(parseInt(premio));

const premioEnNumero = Number(premio);

console.log(typeof premioEnNumero);


const diasFinDeSemana = 2;
const diasFinDeSemanaString = diasFinDeSemana.toString();

console.log("El fin de semana tiene: " + diasFinDeSemana);

const random0_10 = Math.random() * 10;
console.log(random0_10);
const numFloor = Math.floor(random0_10);
console.log(numFloor);

const final = numFloor + 1;
console.log(final);

console.log(Math.floor(Math.random() * 10) + 1);

// Crear variable cadena de texto que represente numero
let edadString = "64";
// Convertirlo a numero entero
const edadNumero = parseInt(edadString);
console.log(edadNumero);
// Hacer operacion aritmetica
const resultado = Math.sqrt(edadNumero);
edadString = Math.sqrt(edad);
// mostrar resultado en consola
console.log(edadString, edadNumero, resultado);

// Crear variable con numero entero
const numEntero = 20;
// Convertirlo a string/cadena texto sin modificar valor de la variable original
let numEnteroString = numEntero.toString();
console.log(numEnteroString);
// Añadir texto delante "es un numero" variando el valor de la variable anterior
numEnteroString = `es un número ${numEnteroString}`;
// loguearlo en consola
console.log(numEnteroString);

// Escribe variable inmutable con numero entero
const num = 15;
// convertimos a booleano
const valorBooleano = Boolean(num);
// si el numero = 0 , deberia ser false
// de lo contrario, true
// mostrar resultado
console.log(valorBooleano);

const texto = "esto es una cadena de texto";
console.log("Comienza con 'esto'?", texto.startsWith("esto"));


