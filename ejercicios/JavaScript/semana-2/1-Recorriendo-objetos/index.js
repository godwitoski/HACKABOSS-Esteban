"use strict";
const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

// Escribe aquí tu código
let nombre;
let edad;
function mayoriaEdad(name, age) {
  if (age >= 18) {
    console.log(`${name} es mayor de edad`);
  } else {
    console.log(`${name} es menor de edad`);
  }
}

for (let prop in people) {
  nombre = prop;
  edad = people[prop];
  mayoriaEdad(nombre, edad); //necesitamos llamar la funcion dentro del bucle para que no nos saque el ultimo solo
  //console.log(nombre, edad);
}
