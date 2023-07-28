"use strict";

// alert, confirm, prompt

alert("Estos es una alerta");
console.log("yo me ejecuto despues del alert");

const result = confirm("Acepta estas condiciones");
if (!result) {
  console.log("No puedes visitar mi pagina");
}
console.log("yo me ejecuto despues del confirm");
console.log(result);

const nombre = prompt("Cual es tu nombre");
const coche = prompt("Cual es tu coche favorito?");
// console.log(resp);
// console.log(typeof resp);
alert(`Hola, mi nombre es ${nombre}, y mi coche favorito es ${coche}`);

const num1 = prompt("Numero 1");
const num2 = prompt("Numero 2");

alert(num1 + num2);

confirm(parseInt(num1) + num2);

// CONDICONALES
const edad = 65;

if (edad >= 18 && edad < 65) {
  console.log("soy mayor de edad");
} else if (edad >= 65) {
  console.log("estoy jubilado y vivo ok");
} else if (edad > 100) {
  console.log("soy muy anciano");
} else {
  console.log("soy menor de edad");
}

const user = prompt("hola usuario, escribe tu nombre");
const edadUser = prompt("Edad");
console.log(user);

if (user) console.log("Tengo user");

if (user) {
  if (edadUser > 18) {
    console.log("dejalo entrar");
  } else {
    console.log("no entra");
  }
} else {
  console.log("no necesito portero");
}

const dia = 9;
switch (dia) {
  case 1:
    // bloque de codigo
    console.log("Hoy es Lunes");
    break;
  case 2:
    // bloque de codigo
    console.log("Hoy es Martes");
    break;
  case 3:
    // bloque de codigo
    console.log("Hoy es Miercoles");
    break;
  case 4:
    // bloque de codigo
    console.log("Hoy es Jueves");
    break;
  case 5:
    // bloque de codigo
    console.log("Hoy es Viernes");
    break;
  default:
    // bloque de codigo
    console.log("Es fin de semana");
    break;
}

let numero = "2";

// hay comparacion estricta en switch
switch (numero) {
  case 1:
    console.log("esto es un 1");
    break;
  case 2:
    console.log("esto es un 2");
    break;
  default:
    console.log("no es un numero");
    break;
}

// Crear funcion que dado un numero aleatorio entre 1 y 5 nos retorna un mensaje de regalo diferente. Y si esta fuera de 1-5, mensaje de error.

// Creamos num aleatorio
const numAleatorio = Math.floor(Math.random() * 7) + 1;

function regaloRandom(num) {
  let regalo;

  switch (num) {
    case 1:
      regalo = "Premio";
      break;
    //   return regalo;
    case 2:
      regalo = "Loteria";
      break;
    //   return regalo;
    case 3:
      regalo = "Pelota";
      break;
    //   return regalo;
    case 4:
      regalo = "Muñeco";
      break;
    //   return regalo;
    case 5:
      regalo = "Linterna";
      break;
    //   return regalo;
    default:
      regalo = "No esta en las posibilidades";
      break;
  }
  return regalo;
}

// Imprimir en la consola el mensaje, que ha sido guardado en una variable tras la ejecucion de la funcion

const resultado = regaloRandom(numAleatorio);
console.log(numAleatorio);
console.log(resultado);

const numeroAleatorio = Math.floor(Math.random() * 7) + 1;
console.log(numeroAleatorio);

let mensajeRandom = (numero) => {
  let mensaje;
  switch (numero) {
    case 1:
      mensaje = "Mensaje 1";
      break;
    case 2:
      mensaje = "Mensaje 2";
      break;
    case 3:
      mensaje = "Mensaje 3";
      break;
    case 4:
      mensaje = "Mensaje 4";
      break;
    case 5:
      mensaje = "Mensaje 5";
      break;
    default:
      return "Error: El número no está entre 1 o 5";
  }
  return mensaje;
};

const mensajeRecibido = mensajeRandom(numeroAleatorio);
console.log(mensajeRecibido);

// Es par o impar
const numeroCualquiera = 8;

if (!(numeroCualquiera % 2)) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

// Dias del mes
let mes = "mayo";

switch (mes) {
  case "enero":
  case "marzo":
  case "mayo":
    console.log("31");
    break;
  case "septiembre":
    console.log("30");
    break;
  case "febrero":
    console.log("28-29");
    break;
  default:
    console.log("este mes no existe");
    break;
}

// Palabra, saber si primera letra es vocal o consonante
let palabra = "Abecedario";

// sacar 1a letra
const primeraLetra = palabra.charAt(0).toLowerCase();
console.log(primeraLetra);

switch (primeraLetra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vocal");
    break;
  default:
    console.log("consonante");
}

let number1 = 10;
let number2 = 3;
let number3 = 7;
let mayor;

const dameElMayor = function (numero1, numero2, numero3) {
  let mayor;
  if (numero1 > numero2 && numero1 > numero3) {
    mayor = numero1;
  } else if (numero2 > numero1 && numero2 > numero3) {
    mayor = numero2;
  } else {
    mayor = numero3;
  }
  return mayor;
};

console.log(dameElMayor(10, 3, 7));

// WHILE, DO-WHILE, FOR, FOR-OF, FOR-IN

let counter = 20;

while (counter < 10) {
  console.log(counter);
  counter++;
}
console.log("el while se termino");

do {
  console.log(counter);
  counter++;
} while (counter < 10);

console.log("el do-while se termino");
console.log(counter);

const arrayDePersonas = [
  { nombre: "Juan", mascota: "Luis" },
  { nombre: "Jorge", mascota: "Marcos" },
  { nombre: "Pedro", mascota: "Alberto" },
  { nombre: "Ana", mascota: "Maria" },
];
console.log(arrayDePersonas.length);

for (let i = 1; i < arrayDePersonas.length; i = i + 2) {
  console.log(arrayDePersonas[i].nombre);
}

// for-of
for (let persona of arrayDePersonas) {
  console.log(persona.mascota);
  // console.log(arrayDePersonas[i].nombre);
}

// for-in
const userObject = { id: 1, name: "David", role: "admin" };

for (let prop in userObject) {
  console.log(`${prop}: ${userObject[prop]}`);
}

// Escribir un bucle for of que imprima caracteres de una palabra "Hola"
const palabras = ["Hola", "Adios"];
for (let palabra of palabras) {
  console.log(palabra.charAt(0));
}

// Solicitar al usuario que introduza un numero mayor que 100. Continuar solocitandolo hasta que lo haga

// creamos una variable
let numeroIntroducido = 0;

while (numeroIntroducido <= 100) {
  numeroIntroducido = parseInt(prompt("Introduzco un numero mayor que 100"));
}

// Solicitar al usuario que adivine un numero aleatorio del 1 al 10. Continuar solicitandole el numero hasta que acierte
// numero random
const numeroRandom = Math.floor(Math.random() * 10) + 1;
console.log(numeroRandom);

// inicializar variable que actualizaremos con el valor de usuario
let guess = 0;

// mientras el usuario no acierte, se le pide que introduzca
while (numeroRandom !== guess) {
  guess = parseInt(prompt("Adivina el numero del 1 al 10"));
}

// acertaste!!
alert("Ganaste el juego");
