"use strict";

////////F U N C I O N E S - R E S E R V A D A S////////
//alert - confirm -prompt = meter datos, no es muy usado

// alert("Esto es una alerta");
// console.log("Yo me ejecuto despues del alert");

// const result = confirm("Acepta estas condiciones"); //devuelve boolean.

// if (!result) {
//   console.log("No puede visitar mi pagina");
// }
// console.log("Yo me ejecuto despues del confirm");
// console.log(result);

// const nombre = prompt("Cual es tu nombre");
// const resp = prompt("Cual es tu coche favorito?"); //pregunta al usuario. Retorna el valor que se le ponga

// //console.log(resp, typeof resp);
// alert(`Hola, mi nombre es ${nombre} y mi coche favorito ${resp}`);

// const num1 = prompt("Numero 1");
// const num2 = prompt("Numero 2"); //pregunta al usuario. Retorna el valor que se le ponga

// alert(num1 + num2); //devuelve string, porque no es numero

// confirm(parseInt(num1) + parseInt(num2));

// ---------------------------------------------

///////

//*******CONDICIONALES */

// //IF - ELSE

// const edad = 105;
// if (edad >= 18 && edad < 65) {
//   console.log("Soy mayor de edad");
//   // bloque de codigo
// } else if (edad >= 65) {
//   console.log("Estoy jubilado y vivo dpm");
// } else if (edad > 100) {
//   console.log("Soy muy anciano");
// } else {
//   console.log("Soy menos de edad");
// }

// const user = prompt("Hola usuario, escribe el nombre");
// const edad = prompt("Edad");
// console.log(user);
// if (!user) {
//   //si no tengo user haz esto
//   console.log("No user" + user);
// }

// //
// if (user) console.log("Tengo user");
// //
// //

// if (user) {
//   if (edad >= 18) {
//     console.log("dejalo entrar");
//   } else {
//     console.log("No entra");
//   }
// } else {
//   console.log("No necesito portero");
// }

// // //Switch - case
// const dia = 6;
// switch (
//   dia //se le pasa variable y se hace cada caso
// ) {
//   case 1:
//     //bloque de codigo
//     console.log("Hoy es Lunes");
//     break; //siempre se pone break
//   case 2:
//     //Bloque
//     console.log("Hoy es Martes");
//     break;
//   case 3:
//     //Bloque
//     console.log("Hoy es Miercoles");
//     break;
//   case 4:
//     //Bloque
//     console.log("Hoy es Jueves");
//     break;
//   case 5:
//     //Bloque
//     console.log("Hoy es Viernes");
//   default:
//     //Bloque codigo
//     console.log("Fin de semana");
//     break;
// }

// let numero = "2";

// switch (
//   numero //ahace comparacion estricta en switch
// ) {
//   case 1:
//     console.log("esto en un 1");
//     break;
//   case 2:
//     console.log("esto en un 2");
//     break;
//   default:
//     console.log("no es numero");
// }

//

//crear una funcion que da un numero aleatorio entre 1 y 5, nos retorna un mensaje de fortuna diferente, y si esta fuera de 1-5, mensaje de error.

const randomNum = Math.floor(Math.random() * 7) + 1;
const regaloAleatoria = function (num) {
  //el valor de la funcion es el mismo el switch
  //   switch (num) {
  //     case 1:
  //       return "Que poca suerte, es un 1";

  //     case 2:
  //       return "Casi, es un 2";

  //     case 3:
  //       return "Casi lo tienes, es un 3";

  //     case 4:
  //       return "Tienes buena suerte, es un 4";

  //     case 5:
  //       return "Lo has clavao";

  //     default:
  //       return "Está fuera del rango, Error";
  //   }
  ///**********OTRA MANERA**************** */
  let regalo;
  switch (num) {
    case 1:
      regalo = "Que poca suerte, es un 1";
      break;

    case 2:
      regalo = "Casi, es un 2";
      break;

    case 3:
      regalo = "Casi lo tienes, es un 3";
      break;

    case 4:
      regalo = "Tienes buena suerte, es un 4";
      break;

    case 5:
      regalo = "Lo has clavao";
      break;

    default:
      regalo = "Error ,Está fuera del rango";
      break;
  }
  return regalo;
};

const resultado = regaloAleatoria(randomNum);
console.log(randomNum);
console.log("Ha sido guardado en variable aleatoria");
console.log(resultado);

//

//
//usando el resto, decir si un numero es par o impar

const randomNumber = 457;
if (randomNumber % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

if (!(randomNumber % 2)) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

//escribir un programa(switch) que dia cuantos dias tiene el mes

let mes = "marzo";
switch (mes) {
  case "enero":
  case "marzo":
  case "mayo":
    console.log(`${mes} tiene 31`);
    break;
  case "abril" || "septiembre":
    console.log(`${mes} tiene 30`);
    break;
  case "febrero":
    console.log(`${mes} tiene 28 - 29`);
    break;
  default:
    console.log("Este mes no existe");
    break;
}

//Tomar palabra en variable y que determine si la primera letra es vocal o consonante
let palabra = "Ala";

//sacar letra
const letra = palabra.charAt(0).toLocaleLowerCase();
switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Es una vocal");
    break;
  default:
    console.log("Es consonante");
    break;
}

//funcion ver que numero es mayor

let mayor;

const dameElMayor = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    mayor = num1;
  } else if (num2 > num1 && num2 > num3) {
    mayor = num3;
  } else {
    mayor = num3;
  }
  return mayor;
};

console.log(dameElMayor(3, 4, 8));

//--------------------------
///L O O P S*//
//-------------------------
//WHILE - DO-WHILE, FOR, FOR-OF, FOR-IN

let counter = 0;

//---------

while (counter < 2) {
  console.log(counter);
  counter++;
}
console.log("*********el while se termino");

//----------

do {
  //se ejecuta una vez y luego hace el while
  console.log(counter);
  counter++;
} while (counter < 2);
console.log("*************el do-while se termino*********");

//----------
const arrayDeNum = ["perro", 2, 3, 4, [], 6, "coche", 8, 9, 10];
console.log(`La longitud es: ${arrayDeNum.length}`);

for (let i = 0; i < arrayDeNum.length; i++) {
  console.log(arrayDeNum[i]); //ejecuta esto cuando llegue a la condicion que es recorrer array y luego hace la accion i++
}

console.log("************El for se termino***************");

//

//--------for-of - para array - string

const arrayPersonas = [
  { nombre: "Juan", mascota: "luis" },
  { nombre: "pedro", mascota: "gato" },
  { nombre: "marco", mascota: "perro" },
];
for (let a of arrayPersonas) {
  //a es el parámetro que queramos y se convierte en arrayPersonas
  console.log(a.mascota);
}
console.log("*****************el for-of se termino***************");

//

//-------for in - para array -string
const user = { id: 1, name: "David", rol: "Admin" };

for (let prop in user) {
  console.log(user[prop]);
  console.log(`${prop}: ${user[prop]}`);
}
console.log("**************el for-in termino**********************");

//-*-------------EJERCICIOS

//escribir un bucle for-of que imprima los caracteres de una palabra "hola"
const palabraBucle = "Hola";
for (let caracter of palabraBucle) {
  console.log(caracter);
}

//solicitar mediante prompt que introduzca un numero mayor que 100. Continuar solicitardolo hasta que lo haga

//let solicitudNum = 0;

// while (solicitudNum <= 100) {
//   solicitudNum = parseInt(prompt("Numero Mayor que 100"));
// }
// console.log(solicitudNum);

//solicitar al user que adivine un numero aleatorio del 1 al 10. Y continuar solicitandole hasta que acierte
//numero random
const adivinaNumero = Math.floor(Math.random() * 10) + 1;
//inicializar variable que actualizaremos con el valor del usuario
let solicitudNum = 0;
//mientras no acierte, se le pide que introduzca
while (parseInt(solicitudNum) !== adivinaNumero) {
  solicitudNum = prompt("Introduce numero del 1 al 10");
}

//acertaste!!
alert(`Acertaste,era el ${solicitudNum}`);
