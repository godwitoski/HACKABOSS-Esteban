"use strict";
// Escribe aquí tu código

// const nombre = "Marta";
// const edad = 27;
// const color = "púrpura";

// console.log(
//   `Hola, me llamo ${nombre}, tengo ${edad} años y mi color favorito es el ${color}.`
// );

// nombre de tipo String y con el valor "Marta"
// edad de tipo Number y con el valor 27
// A continuación, crea los condicionales necesarios para imprimir por consola la frase correcta de la siguientes:
// A Marta le corresponde el descuento infantil (menores de 12 años)
// A Marta le corresponde el descuento juvenil (menores de 30 años)
// A Marta le corresponde el descuento de jubilados (mayores de 60 años)
// A Marta no le corresponde ningún descuento

// if (edad <= 12) {
//   console.log(`A ${nombre} le corresponde el descuento infantil`);
// } else if (edad <= 30) {
//   console.log(`A ${nombre} le corresponde el descuento juvenil`);
// } else if (edad > 60) {
//   console.log(`A ${nombre} le corresponde el descuento de jubilados`);
// } else {
//   console.log(`A ${nombre} no le corresponde ningún descuento`);
// }

///-----------------
// //Bucle para ir de las 0 a las 23H, añadiendo cucu si está entre las 8 y las 22
// for (let i = 0; i < 24; i++) {
//   if (i < 8 || i > 22) {
//     console.log(`Son las ${i}:00`);
//   } else {
//     console.log(`Son las ${i}:00, CUCÚ!`);
//   }
// }

//---------------------------------------
// Partiendo del código del ejercicio anterior haz que la cantidad de veces que aparezca "CUCÚ!" entre las 8 y las 22 sea correspondiente a la hora, por ejemplo a las 10 de la mañana debería poner:

// "Son las 10:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"

// Con una dificultad extra: el número de cucús debe ser siempre en correspondiente a las horas en formato 12h y no 24h, por lo que a las 5 de la tarde (17:00) debe poner solo 5 "CUCÚ!" y no 17:

// "Son las 17:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"

for (let i = 0; i < 24; i++) {
  if (i < 8 || i > 22) {
    console.log(`Son las ${i}:00`);
  } else {
    let hora12 = i; //definimos una variable y damos valor i, luego decimos que para mayor que 12 reste, porque si ponemos que sea 12 quedaría 0. Si no se cumple tendría valor i.
    if (i > 12) {
      hora12 = hora12 - 12;
    }
    console.log(`Son las ${i}:00, ${"CUCÚ! ".repeat(hora12)}`); //repetimos cucú ese numero de veces que nos da la variable
  }
}
