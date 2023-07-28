"use strict";
/////////////////////////N  U  M  E  R  O  S////////////////////////////
const entero = 42;

const entero2 = "42"; //integer
// console.log(entero, entero2);

// // console.log(typeof entero, typeof entero2);
const decimal = 42.5; //float
// console.log(entero, decimal);

// const resultado = entero + decimal;
// console.log(resultado);

////OBJETO math
// console.log(Math.sqrt(entero));
// console.log(Math.max(4, 5, 7, 10, 2));
// console.log(Math.min(4, 5, 7, 10, 2));

const random = Math.random(); // //random y redondear abajo
const abajo = Math.floor(5.7);
// console.log(abajo);

// //dado redondeando hacia abajo y sumando 1
Math.random(); //0 - 0.9999
const numeroRandom = Math.floor(Math.random() * 6) + 1;
// console.log(numeroRandom);
//

//

//

//

//

//

//
///////////////////S T R I N G S//////////////////
const saludo = "Hola Pedro";
const saludo2 = `Hola Pedro2`;
const saludo3 = "Hola Pedro3";

const texto = 'hola soy pedro, pero me llaman "juan".';

const texto2 = "hola soy pedro, pero me llaman 'juan'.";
const textoSaltoLinea = "hola soy pedro, pero me llaman \njuan";
//console.log(saludo, saludo2, saludo3, texto, texto2,textoSalto);

const mensaje = "Hola, mundo    "; //contar caracteres, hasta espacio length
//console.log(mensaje.length);

//console.log(mensaje);

//console.log(mensaje.trim()); //Quitar espacios trim

// console.log(mensaje.split(",")); //separar por el valor indicado

// console.log(mensaje.charAt(2)); //mostrar el cararter segun la posicion, empieza en 0(indice)

// console.log(mensaje.indexOf("mundo")); //devolver el indice de donde empieza la palabra la M en este caso.

// console.log(mensaje.substring(0, 4)); //devuelve el subindice de la palabra, excluye el fin

////Interpolar texto con variables ///I M P O R T A N T E
const nombre = "pedro";
const num = 22;
const mensajeConVariables = `Hola me llamo: ${nombre}`;

const mensajeConVariables2 = "Hola me llamo: " + num; //intentar no hacerlo así porque son distinto tipos
// console.log(mensajeConVariables);
// console.log(mensajeConVariables2);
//

//

//

//
/////////////////////////////E J E R C I C I O ///////////////////////////
const misMananas = "Voy a hacer yoga 3 veces por semana.  Yoga, yoga, yoga";
// console.log(misMananas.indexOf("a")); //busca la primera a y te dice donde está
// console.log(misMananas.toUpperCase()); //Transformar en mayusculas

// console.log(misMananas.replaceAll("yoga", "pilates")); //Cambiar todo el texto dicho por otro dado es keysensitive

const actividadMorning = "pasear";
const actividadTarde = "pescar";

const diaDeHoy = `Esta mañana he ido a ${actividadMorning}, y por la tarde me fui a ${actividadTarde}`;

// console.log(diaDeHoy);

//////////////////////////// B O O L E A N ///////////////////////////////
let esMayorDeEdad = true;
let tieneMascota = false;

const truthy = "Hola";
// console.log(!!esMayorDeEdad); //si la constante tiene algo da true  o  false si es 0 o está vacio(si el string es vacio)

let planeta; //undefind
let planeta2 = null;
// console.log(planeta, planeta2);

if (esMayorDeEdad) {
  planeta = "LaTierra";
}
// console.log(planeta);

////////////////////////////////////////

const edad = 18;
let premio = "23432523523523";

//numeros a string
// console.log(edad.toString());
// console.log(typeof edad);
// console.log(typeof edad.toString());

//string a numero - tiene que ser numero si no sale un NaN
console.log(parseInt(premio));

const premioEnNumero = Number(premio);
console.log(typeof premioEnNumero);

/////////////////////// A    R     R     A    Y //////////////////////////////////
const diasDeLaSemana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "sabado",
  "Domingo",
];
console.log(diasDeLaSemana);

////////// E J E R C I C I O   C O N V E R C I Ó N  ///////////////////
const diasFinDeSemana = 2;
const diasFinDeSemanaString = diasFinDeSemana.toString();

console.log("El fin de semana tiene: " + diasDeLaSemana);

const random0_10 = Math.random() * 10;

console.log(random0_10);

const numFloor = Math.floor(random0_10);
console.log(numFloor);

const final = numFloor + 1;
console.log(final);

console.log(Math.floor(Math.random() * 10 + 1));

////////////////////// E J E R C I C I O S  D I V E R S O S //////////////////////////////////

//Crear variable con cadena de texto que represente numero
const numeroTexto = "23.222";
//Convertirlo a entero
const numeroNumero = parseInt(numeroTexto);
//hacer operacion aritmetica y mostrar resultado en consola
const resultFinal = numeroNumero * 2;
console.log(resultFinal);

//Otra manera
let number1 = "16";
number1 = parseInt(number1);

const numeroNuevo = Math.sqrt(number1);
console.log(numeroNuevo, number1);
///////

///////

//////

//////

//////////// Crear variable con numero entero
const numEntero = 20;
//convertir a string/texto sin modificando valor original
let numEnteroString = numEntero.toString();
console.log(numEnteroString);
//añadir texto delante "Es un numero"  variando el valor de la variable anterior y loguearlo en consola
numEnteroString = `Es un número ${numEnteroString}`;
console.log(numEnteroString);
////////////

///////////

////////////

//////////
//escribe variable inmutable con numero entero
const numberInt = 10;
//convertir a booleano
let numberIntBoolean = Boolean(numberInt);
//console.log(numberIntBoolean);
// si el numero es = 0, deberia ser falso, de lo contrario true
if (numberInt === 0) {
  numberIntBoolean = false;
} else {
  numberIntBoolean = true;
}
//mostrar resultado
console.log(numberIntBoolean);
////

/////

////

const textoCadena = "esto es una cadena de texto";

console.log("Comienza con 'esto'?", textoCadena.startsWith("esto"));
