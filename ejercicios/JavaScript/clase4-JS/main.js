"use strict";
// // // loops y condicionales
// let miNissan;
// const coches = [
//   { marca: "Toyota", anio: 1995 },
//   { marca: "Ford", anio: 2000 },
//   { marca: "Nissan", anio: 2013 },
//   { marca: "BMW", anio: 1998 },
// ];

// for (let coche of coches) {
//   console.log(coche);
//   if (coche.marca === "Nissan") {
//     // ejecuta codigo cuando coche.marca es igual a nissan
//     miNissan = coche;
//   }
// }
// console.log(miNissan);

//------------------------------
// //como lo haríamos con otro loop distinto(for)
// for (let i = 0; i < coches.length; i++) {
//   console.log(coches[i]);
//   if (coches[i].marca === "Nissan") {
//     miNissan = coches[i];
//   }
//   console.log(miNissan);
// }

//------------------
// // //imprime por pantalla, el nombre de los estudiantes y si es mayor de edad o no

// const estudiantes = [
//   { nombre: "Ana", edad: 20, carrera: "informática" },
//   { nombre: "juan", edad: 16, carrera: "mates" },
//   { nombre: "maria", edad: 25, carrera: "biologia" },
//   { edad: 25, carrera: "biologia" },
// ];

// for (let i = 0; i < estudiantes.length; i++) {
//   let nombre = estudiantes[i].nombre;
//   if (nombre) {
//     if (estudiantes[i].edad <= 18) {
//       console.log(`Nombre: ${nombre}`);
//       console.log(`Soy mayor de edad`);
//     } else {
//       console.log(`Nombre: ${nombre}`);
//       console.log(`Soy menor de edad`);
//     }
//   }
// }

// // otra manera
// for (let estudiante of estudiantes) {
//   console.log(`Nombre: ${estudiante.nombre}`);
//   console.log(`Es mayor de edad: ${estudiante.edad >= 18}`);
// }

// ----------- Teoria - ------------------
//Objetos. contenedor de datos con propiedades y valor
// const objvacio = {};

// const persona = {
//   nombre: "Luis",
//   edad: 32,
//   altura: 170,
//   genero: "Masculino",
//   intereses: ["musica", "videojuegos"],
//   mascotas: [],
// };

// console.log(persona.nombre);
// console.log(persona["edad"]);

// persona.nombre = "Pedro";
// console.log(persona);

// persona.ciudadFavorita = "prague";
// console.log(persona);

// delete persona.nombre;
// console.log(persona);

// const personaConMetodos = {
//   //Funcion dentro de un objeto es metodo
//   nombre: "Gerardo",
//   edad: 50,
//   saludar: function (apodo) {
//     console.log(
//       `Hola. Soy ${this.nombre} y tengo ${this.edad} años. Pero me llaman (${apodo})`
//     ); //this .Accede al objeto
//   },
// };

// const apodo = "El pelucas";
// personaConMetodos.saludar(apodo);

//------------------Creacion objetos --------------------

//objeto literal

// let emptyObj = {};

// let point = { x: 0 + 4, y: 9 - 4 };
// console.log(point);

// let libro = {
//   tituloPrincipal: "Aprende JS",
//   "sub-title": "Somos HAB",
// };
// libro.tituloPrincipal;

// //New
// const objConNew = new Object();
// const arrayConNew = new Array();

// let date = new Date();
// console.log(date);

// //Object.create
// const objCreate = Object.create({
//   nombre: "Adolfo",
//   edad: 40,
//   saludar: function () {
//     console.log("Hola");
//   },
// });
// console.log(objCreate);
// console.log(objCreate.saludar());

//-----------------
// // Enumerar propiedad de los objetos

// Declaramos objeto
// const animal = {
//   nombre: "Tuco",
//   tipo: "Pájaro",
//   edad: 30,
// };
// //Ejemplo logueando el arrat que devuelve Object.Keys(animal) con cada una de las propiedades del objeto
// console.log(Object.keys(animal)); //Saca las propiedades en array

// //lo guardadmos en variable propiedades
// const propiedades = Object.keys(animal);
// console.log(propiedades);

// //iteramos por cada elemento del array
// for (let propiedad of propiedades) {
//   //propiedad es cada valor del array.
//   // sacamos el valor de cada propiedad del objeto en cada iteracion
//   const valor = animal[propiedad]; //como poner animal.nombre etc.
//   // logueamos propiedad y valor
//   console.log(`${propiedad}:${valor}`);
// }

// console.log(Object.values(animal)); //valores en array

//-------------
//Object entries

// const persona = {
//   nombre: "Luis",
//   edad: 32,
//   altura: 170,
//   // genero: "Masculino",
//   intereses: ["musica", "videojuegos"],
//   // mascotas: [],
// };

// console.log(Object.entries(persona)); //coge clave- valor en array

// for (let entry of Object.entries(persona)) {
//   // const prop = entry[0];
//   // const valor = entry[1];
//   const [prop, valor] = entry;
//   console.log(`${prop}: ${valor}`);
// }

//-----------------
// // comparacion entre objetos
// let primero = {
//   a: 1,
// };

// let segundo = {
//   a: 1,
// };

// console.log(primero === segundo); //false, distinto sitio de memoria
// segundo = primero; //segundo hace referencia al primero
// console.log(primero === segundo); //true, hace referencia al primero

// const aClonar = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const elClon = {
//   ...aClonar,//asignamos mismo objeto pero no el mismo sitio de memoria
// };

// console.log(aClonar, elClon);
// console.log(aClonar === elClon);

// const a = { id: 1, nombre: "Juan" };
// const b = a;

// b.nombre = "Pedro";
// b.price = 30;
// console.log(a, b);
// console.log(a === b);

//------Extension de objetos-----

//**Herencia prototipica

//Al acceder a las propiedades y métodos de un objeto, si no se encuentran en el obj actual, JS lo buscará en el prototipo(objeto del cual extiende)
// const objBase={
//   ciudad:"New York",
//   habitantes:10000000
// }

// const objExtendido = Object.create(objBase);
// console.log(objBase , objExtendido)
// console.log(objExtendido);

//**Object.assign() */

// const persona={
//   nombre :"juan",
//   edad:30,
//   saluda:function(){
//     console.log(`Hola sot ${this.nombre}, tengo ${this.edad}`)
//   }
// }
// const empleado = Object.assign({}, persona,{
//   puesto:"Software Developer",
//   trabajar:function(){
//     return `${this.nombre} esta trabajando`
//   }
// });
// console.log(empleado.nombre);
// console.log(empleado.puesto);
// console.log(empleado.trabajar());

// const persona = {
//   nombre: "Juan",
//   edad: 30,
//   saluda: function () {
//     console.log(`Hola sot ${this.nombre}, tengo ${this.edad}`);
//   },
// };

// //extender el obj con nueva propiedad ciudad y nuevo metodo presentarse() que retorne el nombre de la ciudad y de la persona

// const extPersona = Object.assign({}, persona, {
//   ciudad: "Hawai",
//   presentarse: function () {
//     return `Hola, soy de ${this.ciudad} y me llamo ${this.nombre}`;
//   },
// });

// console.log(extPersona.presentarse());

// const pais = {
//   nombre: "España",
//   bandera: "Rojo y amarillo",
// };

// const detalles = {
//   comunidades: 17,
//   capital: "Madrid",
// };

// const paisCompleto = { ...pais, ...detalles }; //unimos los dos
// console.log(paisCompleto);

// //******** */
// const videoJuego = {
//   nombre: "Mario Bross",
// };
// const videoJuegoConPersonajes = { ...videoJuego, personajes: "Luigi, mario" };
// console.log(videoJuegoConPersonajes);

//**-----THIS------

// console.log(this); //objecto goblal, es el window(navegador - todo JS)

// const persona = {
//   nombre: "juan",
//   saludo() {
//     console.log(`Hola soy ${this.persona}`); //dentro del metodo
//     console.log(this);
//   },
// };

// persona.saludo();

// //--------------

// function saludar() {
//   console.log(this); //objeto global si se llama en global, si se llama en objeto, será referencia de ese objeto
//   //console.log(`Hola. Mi nombre es ${this.nombre}`);
// }

// saludar(); //se llama en el objeto global

// const persona2 = {
//   nombre: "ANA",
// };

// persona2.saludar = saludar; //añadimos funcion al objeto
// persona2.saludar();

// //1 creacion de objetos
const persona = {
  nombre: "jaime",
  edad: 23,
  profesion: "Electricista",
};
console.log(persona);

// //2
//A
console.log(persona.nombre);

//B
persona.hobby = ["Leer", "Deporte"];

//C
delete persona.edad;
console.log(persona);

// //3. Funcion
function mostrarPropiedades(user) {
  for (let propiedad in user) {
    console.log(propiedad);
  }
}
mostrarPropiedades(persona);

// //4. Extensiones
const objeto1 = {
  color: "Rojo",
  numero: 4,
};
const objeto2 = {
  coche: true,
  marca: "Jaguar",
};

const objetoCombinado = { ...objeto1, ...objeto2 };
console.log(objetoCombinado);

// //5Metodo y this

const coche = {
  marca: "Lexus",
  presentarCoche() {
    console.log(`Este coche es de la marca ${this.marca}`);
  },
};

coche.presentarCoche();

// 6 assign
const producto = {
  nombre: "juguete",
  precio: 20,
  cantidad: 2,
};

const detalles = {
  color: "rojo",
  tamaño: "S",
};

const productoCompleto = Object.assign({}, producto, detalles);
console.log(productoCompleto);
