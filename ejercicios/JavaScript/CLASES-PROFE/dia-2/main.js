"use strict";

// ARRAYS
const emptyArray = [];
const arrayNumbers = [1, 2, 3, 4, 5];
const arrayNumbers2 = [2, 4, 5, 1, 3];

const arrayStrings = ["futbol", "baloncesto", "tenis"];
const arrayBooleans = [true, true, false];
const arrayBooleans2 = [true, "true", false];

const arrayDeSumas = [3, 5, 9];
const nombre = "Juan";
const arrayDeSumas2 = [nombre, 2 + 3, 5 + 8 - 4];
console.log(arrayDeSumas2);

const arrayRandom = [
  1,
  "Pedro",
  [1, 2, 3 + 4],
  true,
  { nombre: "Jorge", rol: "profe" },
];
console.log(arrayRandom);

const superArray = [1, 2, 3, [4, 5, [6, 7]], [8, 9], 10];
console.log(superArray.length);
console.log(superArray[2]);
console.log(superArray[3]);

// sacar el valor 7
const paso1 = superArray[3];
console.log(paso1);

const paso2 = paso1[2];
console.log(paso2);

const paso3 = paso2[1];
console.log(paso3);

// sacar el valor 7 de una
console.log(superArray[3][2][1]);

const posicion1 = superArray[0];
// const posicion2 = superArray[6];
console.log(posicion1);

// OBJETOS
const auto = {
  marca: "Toyota",
  ano: 1990,
  isOnSale: true,
  color: "verde",
};

const nombreGato = "Ari";
const gato = "Ahri";

const persona = {
  nombre: "Juan",
  edad: 25,
  hobbies: ["lectura", "deporte", "musica"],
  familia: {
    hermano: "Jose",
    padre: "Lucas",
    madre: "Alicia",
    gato: gato,
  },
  medallas: [
    {
      deporte: "Atletismo",
      tipo: "Oro",
    },
    {
      deporte: "Tenis",
      tipo: "plata",
    },
  ],
};
console.log(persona.nombre);
console.log(persona["nombre"]);

// Alicia
console.log(persona.familia.madre);

// gato
console.log(persona.familia["gato"]);

// deporte
console.log(persona.medallas[0].deporte);
console.log(persona["medallas"][0].deporte);

// Acceso condicional

const persona2 = {
  nombre: "Juan",
  edad: 25,
  hobbies: ["lectura", "deporte", "musica"],
  medallas: [
    {
      deporte: "Atletismo",
      tipo: "Oro",
    },
    {
      deporte: "Tenis",
      tipo: "plata",
    },
  ],
};

console.log(persona2.familia?.madre);

// FUNCIONES

saludo(); // funciona
// saludo2(); // no funciona

// declarado
function saludo() {
  // hacemos la operaciones que necesitemos
  console.log("hola que tal");
  // retornara un valor
}

// expresada
const saludo2 = function () {
  console.log("hola soy el saludo 2");
};

saludo(); // funciona
saludo2(); // funciona

const suma = function (num1, num2) {
  // suma de dos numeros
  console.log(num1 + num2);
  // retorna un valor
  //   return num1 + num2
  return "No me apetece sumar";
};

const numero1 = 2;
const numero2 = 5;

const resultado = suma(numero1, numero2);
console.log(resultado);

// funcion flecha
const sumaArrow = (num1, num2) => {
  // suma de dos numeros
  console.log(num1 + num2);
  // retorna un valor
  return num1 + num2;
};
console.log(sumaArrow(numero1, numero2));

const sumaArrowDirect = (num1, num2) => {
  return num1 + num2;
};
const sumaArrowDirectPlus = (num1, num2) => num1 + num2;
console.log(sumaArrowDirect(numero1, numero2));

// objeto estudiante, props nombre, edad, cursos(array de strings), direccion (objeto con props ciudad y calle)
const estudiante1 = {
  nombre: "Pili",
  edad: 27,
  cursos: ["HTML", "CSS", "JS"],
  direccion: {
    ciudad: "A Coruña",
    calle: "Mi calle",
  },
};
const estudiante2 = {
  nombre: "Maria",
  edad: 27,
  cursos: ["HTML", "CSS", "JS"],
};

// accede al segundo curso del estudiante utilizando la notificacion corchetes
console.log(estudiante1["cursos"][1]);

// funcion obtenerCiudadEstudiante que tome un objeto de estudiante como argumento y devuelva la ciudad del estudiante. Utilizar el acceso condicional por si no tiene direccion

const obtenerCiudadEstudiante = function (estudiante) {
  return estudiante.direccion?.ciudad;
};
// funcion flecha
const obtenerCiudadEstudianteFlecha = (estudiante) =>
  estudiante.direccion?.ciudad;

const ciudadEstudiante = obtenerCiudadEstudiante(estudiante1);
console.log(ciudadEstudiante);

const ciudadEstudiante2 = obtenerCiudadEstudianteFlecha(estudiante2);
console.log(ciudadEstudiante2);

// OPERADORES

// Aritmeticos
console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(5 % 3); //nos da el resto

let number1 = 4;
let number2 = 6;
// const number1Mas1 = number1++;
const number1Mas1 = ++number1;
console.log(number1Mas1);

const number2Menos1 = number2--;
// const number2Menos1 = --number2;
console.log(number2Menos1);

// Comparación
console.log(3 < 4);
console.log(4 <= 4);
console.log(5 > 4);
console.log(5 >= 4);

const numString = "4";
const numStringConverted = Number("4");
const numNumber = 4;

console.log(numString == numNumber);
console.log(numStringConverted == numNumber);
console.log(numString === numNumber);

// Concatenacion de strings --> union de cadenas de texto
console.log(5 + "3");
console.log("3" > 2);
console.log("3" < 5);
console.log("aloha" > "anoha");
console.log("A" > "a");

// Logicos
console.log(true && true);
console.log(2 === "2" && true);

console.log(false || true);
console.log(2 === "2" || false);

console.log(!(2 === "2"));

// Comparacion de objetos en JS --> Referencia
const person1 = { id: 1, coche: "Mercedes" };
const person2 = { id: 1, coche: "Mercedes" };

const user1 = "Jorge";
const user2 = "Jorge";

const person3 = person1;

console.log(user1 == user2); // true

console.log(person1 == person2); //false
console.log(person1 == person3); //true

// DESTRUCTURING
const destructureArray = [1, 2, 3, 4, 5, 6, 7, 10];
const [a, b, f, d, r, , , z, last] = destructureArray;
console.log(a, b, f, z, last);

const [a2, b2, ...elresto] = destructureArray;
console.log(a2, b2, elresto);

const array2 = [3, 4, 5, 6];
const [a3, b3, ...rest] = array2;
console.log(a3, b3, rest[rest.length - 1]);

const objetoDestructuring = {
  nombre: "Arroz a la cubana",
  alino: "Tomate",
  condimento: "huevo",
  comida: "Arroz",
};

const { comida, alino, ...restObject } = objetoDestructuring;
console.log(comida, alino, restObject.condimento);

const objetoDestructuring2 = {
  nombre2: "Arroz a la cubana",
  alino2: "Tomate",
  condimento2: "huevo",
  x: {
    ingrediente_1: "Arroz",
    ingrediente_2: "Salsa de soja",
  },
};

const { nombre2, x: comida2 } = objetoDestructuring2;
console.log(nombre2, comida2);

const arrayMultiple = ["nombre", "pais", "Tajo"];
const [a4, b4, c4 = "Ebro"] = arrayMultiple;
console.log(a4, b4, c4);

// Condicionales
const edadJuan = 20;
// let puedePasar = false;

// si es mayor de edad
const esMayorDeEdad_ = function (edad) {
  let puedePasar = false;
  if (edad >= 18) {
    // puede pasar
    puedePasar = true;
  } else {
    //  no puede pasar
    puedePasar = false;
  }
  console.log(puedePasar);
  return puedePasar;
};

const esMayorDeEdad = esMayorDeEdad_(edadJuan);
console.log(esMayorDeEdad);
// console.log(puedePasar); //va a fallar
