"use strict";

const emptyArray = [];
// const arrayConParentesis = Array(3)
const arrayNumber2 = [1, 2, 3, 4, 5]; //Lista ordenada de valores , cada valor es un indice
const arrayNumbers2 = [2, 4, 5, 1, 3];

const arrayStrings = ["futbal", "baloncesto", "tenis"];
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
  { nombre: "jorge", rol: "profe" },
];

console.log(arrayRandom);

const superArray = [1, 2, 3, [4, 5, [6, 7]], [8, 9], 10];
console.log(superArray.length);
console.log(superArray[2]);
console.log(superArray[3]);

//-----Sacar array dentro de array ..Acceder al 7. indices.------
const paso1 = superArray[3];
console.log(paso1);

const paso2 = paso1[2];
console.log(paso2);

const paso3 = paso2[1];
console.log(paso3);

//sacar el 7 todo en una
console.log(superArray[3][2][1]);

//

//

/////////////O B J E T O S/////////////////
//Lista desordenada de propiedad valor

const auto = {
  marca: "Toyota",
  ano: 1990,
  isOnSale: true,
  color: "verde",
};
// new Object({})

const nombreGato = "Ahri";
const gato = "Ari";
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
      tipo: "Plata",
    },
  ],
};

//acceder a objetos
console.log(persona.nombre);
console.log(persona["nombre"]); //comillas si es por corchete

//Alicia

console.log(persona["familia"]["madre"]);
console.log(persona.familia.madre);

//gato
console.log(persona.familia["gato"]);

//deporte que está en array
console.log(persona.medallas[0].deporte);

////ACCESO CONDICIONAL A LAS PROPIEADADES///////////////

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
      tipo: "Plata",
    },
  ],
};
//con ? pregunta si hay familia y tira undefined, para no errores
console.log(persona2.familia?.madre);

//

//

//////********FUNCIONES**************////////
//declarar una función global-hosting para utilizar
//declarada
function saludo() {
  //hacemos la operación que necesitemos
  console.log("hola que tal");

  //retornará un valor
}

//no es global y necesitas llamarla antes no puedes
//expresada
const saludo2 = function () {
  console.log("hola soy el saludo 2");
};

//llamar
saludo();
saludo2();

const suma = function (num1, num2) {
  //suma de 2 numeros
  console.log(num1 + num2);
  //retorna un valor
  //   return num1 + num2
  return "No me apetece sumar";
};
const numero1 = 2;
const numero2 = 5;

const resultado = suma(numero1, numero2);
console.log(resultado);

//función con arrow más avanzada
const sumaArrow = (num1, num2) => {
  //suma de 2 numeros
  console.log(num1 + num2);
  //retorna un valor
  return num1 + num2;
  //return "No me apetece sumar";
};
console.log(sumaArrow(numero1, numero2));

//Esto es para ir directo pero solo con una linea de código, sin return, es return directo
const sumaArrowDirect = (num1, num2) => num1 + num2;

const sumaArrowDirectPlus = (num1, num2) => {
  return num1 + num2;
};
console.log(sumaArrowDirect(numero1, numero2));

//

//////////EJERCICIOS//////////
//Objeto estudiante con las propiedades: nombre,edad,cursos(que es array de string),direccion(es objeto con prp ciduad y calle)

const estudiante1 = {
  nombre: "Pepe",
  edad: 23,
  cursos: ["primero", "segundo", "tercero"],
  direccion: {
    ciudad: "Lugo",
    calle: "Avenida américa",
  },
};

const estudiante2 = {
  nombre: "pili",
  edad: 23,
  cursos: ["primero", "segundo", "tercero"],
  //   direccion: {
  //     ciudad: "coruña",
  //     calle: "Avenida américa",
  //   },
};

//acceder al segundo curso del estudiante utilizando conchete
console.log(estudiante1["cursos"][1]);

//crear funcion obtenerCiudadEstudiante que tome un objeto de estudiante como argumento y devuelva la ciudad del estudiante. Utilizar el acceso condicional por si no tiene direccion

const obtenerCiudadEstudiante = function (algo) {
  return algo.direccion?.ciudad;
};
// const obtenerCiudadEstudiante =  (estudiante) => estudiante.direccion?.ciudad;

const ciudadEstudiante = obtenerCiudadEstudiante(estudiante1);
//console.log(obtenerCiudadEstudiante);
console.log(ciudadEstudiante);
const ciudadEstudiante2 = obtenerCiudadEstudiante(estudiante2);
console.log(ciudadEstudiante2);

//

//****OPERACIONES***** */

//Aritmeticos

console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(5 % 3); //resto de la division

let number1 = 4;
let number2 = 6;
//const numberMas1 = number1 ++; ////guarda la variable sin sumar 1
const numberMas1 = ++number1; //hará la suma primero
console.log(numberMas1);

// const numberMenos2 = --number2; //hará la resta primero
const numberMenos2 = number2--;
console.log(numberMenos2);

////Comparación

console.log(3 < 4);
console.log(4 <= 4);
console.log(5 > 4);
console.log(5 <= 4);

const numString = Number("4");
const numNumber = 4;

console.log(numString == numNumber); //comparacion simple
console.log(numString === numNumber); //comparacion compleja para tipo de dato

//concatenacion --> union de cadenas
console.log(5 + "3");
console.log("3" < 2);
console.log("A" > "a");

///////Logicos

//

//

//
//and , se cumplen las dos condiciones
console.log(true && false);
console.log(2 == "2" && true);
console.log(2 === "2" && true);

//or , si se cumple una
console.log(true || false);
console.log(2 === "2" || false);

//negacion
console.log(!(2 === "2")); //es al contrario, esto es false pero la negacion es lo contrario

///

///

////comparacion de objetos en JS
const person1 = { id: 1, coche: "Mercedes" };
const person2 = { id: 1, coche: "Mercedes" };

const user1 = "jorge";
const user2 = "jorge";

const person3 = person1;

console.log(user1 == user2); //true
console.log(person1 == person3); //true , porque comparten espacio de memoria
console.log(person1 == person2); //los array y objetos se compara el espacio de memoria que ocupa

///

//

// ////DESTRUCTURING
//
//
//arrays

const destructureArray = [1, 2, 3, 4, 5, 6, 7, 10];
const [a, b, , , f, , , z] = destructureArray; //variables(constante) que cogen el valor del array segun el indice, z es el 10. Mismas variables para mismos valores
const [indice0, indice1, indice2, indice3, indice4, indice5] = destructureArray;

console.log(a, b, f, z);

const [a2, b2, ...elresto] = destructureArray; //poner constantes y luego guardar todo el resto en un array
console.log(a2, b2, elresto);

const [a3, b3, ...rest] = destructureArray; //acceder al ultimo valor del array
console.log(rest[rest.length - 1]);
//
//
//objetos

const objetoDestructuring = {
  comida: "Arroz",
  alino: "Tomate",
  condimento: "huevo",
  nombreC: "arroz a la cubana",
};

//llamamos con el nombre de las propiedades, no por posicion
const { comida, alino, ...restObject } = objetoDestructuring;
console.log(comida, alino, restObject.condimento);

const objetoDestructuring2 = {
  alino2: "Tomate",
  condimento2: "huevo",
  nombre2: "arroz a la cubana",
  x: {
    ingrediente1: "Arroz",
    ingrediente2: "Salsa",
  },
};

const { nombre2, x: comida2 } = objetoDestructuring2;
console.log(nombre2, comida2);

//
const arratMultiple = ["nombre", "pais", undefined];
const [a4, b4, c4 = "Ebro"] = arratMultiple; //nombre por defecto en el destructuring
console.log(a4, b4, c4);

//

//

//

//
/////Condicionales
const edadJuan = 20;
let puedePasar = false;

//si es mayor de edad
if (edadJuan >= 18) {
  //puede pasar
  console.log("Puede pasar");
} else {
  //no puede pasar
  console.log("No puede pasar");
}

const esMayorEdad_ = function (edad) {
  if (edad >= 18) {
    //puede pasar
    puedePasar = true;
  } else {
    //no puede pasar
    puedePasar = false;
  }
  return puedePasar;
};

const esMayorDeEdad = esMayorEdad_(edadJuan);
console.log(esMayorDeEdad);
