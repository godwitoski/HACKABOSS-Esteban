// repaso loops y condicionales
let miNissan;
const coches = [
  { marca: "Toyota", anio: 1995 },
  { marca: "Ford", anio: 2000 },
  { marca: "Nissan", anio: 2013 },
  { marca: "BMW", anio: 1998 },
];

for (let coche of coches) {
  console.log(coche);
  if (coche.marca === "Nissan") {
    // se ejecuta codigo cuando coche.marca es igual a "Nissan"
    miNissan = coche;
  }
}
console.log(miNissan);

// Como lo haríamos con otro loop distinto (for)
for (let i = 0; i < coches.length; i++) {
  if (coches[i].marca === "Nissan") {
    miNissan = coches[i];
  }
}
console.log(miNissan);

const estudiantes = [
  { nombre: "Ana", edad: 20, carrera: "informática" },
  { nombre: "Juan", edad: 16, carrera: "mates" },
  { nombre: "María", edad: 25, carrera: "biología" },
];

// Imprimir consola cada uno del nombre de los estudiantes y si es mayor de edad o no
// bucle para recorrer cada uno de ellos
for (let i = 0; i < estudiantes.length; i++) {
  // ejecuta este codigo
  const estudiante = estudiantes[i];
  const mayorDeEdad = estudiante.edad >= 18;
  console.log(`Nombre: ${estudiante.nombre}`);
  console.log(`Es mayor de edad: ${mayorDeEdad}`);
}

for (let estudiante of estudiantes) {
  // ejecuta este codigo
  console.log(`Nombre: ${estudiante.nombre}`);
  console.log(`Es mayor de edad: ${estudiante.edad >= 18}`);
  console.log("---");
}

// OBJETOS
const objVacio = {};

const persona2 = {
  nombre: "Luis",
  edad: 32,
  altura: 170,
  genero: "Masculino",
  intereses: ["musica", "videojuegos"],
  mascotas: [],
};

console.log(persona2.nombre);
console.log(persona2["edad"]);

persona2.nombre = "Pedro";
console.log(persona2);

persona2.ciudadFavorita = "Prague";
console.log(persona2);

delete persona2.nombre;
console.log(persona2);

const personaConMetodos = {
  nombre: "Gerardo",
  edad: 50,
  saludar: function (apodo) {
    // console.log(this);
    console.log(
      `Hola. Soy ${this.nombre} y tengo ${this.edad} años. Pero me llaman ${apodo}`
    );
  },
};

const apodo = "El Pelucas";
personaConMetodos.saludar(apodo);

// Creacion de objetos

//Objeto literal

let emptyObj = {};

let point = { x: 0 + 4, y: 9 - 4 };
console.log(point);

let libro = {
  "titulo principal": "Aprender JS",
  tituloPrincipal: "Aprender JS",
  "sub-title": "Somos HAB",
};

libro.tituloPrincipal;
libro["titulo principal"];

// new
const objConNew = new Object();
const arrayConNew = new Array();
let date = new Date();
console.log(date);

// Object.create
const objCreate = Object.create({
  nombre: "Adolfo",
  edad: 40,
  saludar: function () {
    console.log("hola");
  },
});
console.log(objCreate);
console.log(objCreate.saludar());

// Enumerar propiedades de los objetos

// Declaramos objeto
const animal = {
  nombre: "Tuco",
  tipo: "pájaro",
  edad: 30,
};
// ejemplo: loguear valor de la propiedad nombre del objeto animal
console.log(animal["nombre"]);

// logueando el array que devuelve Object.keys(animal) con cada una de las propiedades del objeto
console.log(Object.keys(animal));
// lo guardamos en variable propiedades
const propiedades = Object.keys(animal);
console.log(propiedades);

// iteramos por cada elemento del array
for (let propiedad of propiedades) {
  // sacamos el valor de cada propiedad del objeto en cada iteracion
  const valor = animal[propiedad];
  // logueamos propiedad: valor
  console.log(`${propiedad}: ${valor}`);
}

console.log(Object.values(animal));

// REPASO
const methodsObject = {
  ingrediente: "chocolate",
  hacerHelado: function (otroIngrediente) {
    return `Helado de ${this.ingrediente} y ${otroIngrediente}`;
  },
};

console.log(methodsObject.ingrediente);
console.log(methodsObject.hacerHelado("fresa"));

const obj1 = { hola: "hola" };
const obj2 = new Object({ hola: "hello" });
const obj3 = Object.create({ hola: "ciao" });

console.log(obj1, obj2, obj3);
console.log(obj1.hola, obj2.hola, obj3.hola);

// Object.keys y Object.values
const persona3 = {
  nombre: "Luis",
  edad: 32,
  altura: 170,
  //   genero: "Masculino",
  intereses: ["musica", "videojuegos"],
  //   mascotas: [],
};

// console.log(Object.entries(persona3));

for (let entry of Object.entries(persona3)) {
  console.log(entry);
  //   const prop = entry[0];
  //   const valor = entry[1];
  const [prop, valor] = entry;
  console.log(`${prop}: ${valor}`);
}

// Comparacion entre objetos
let primero = {
  a: 1,
};

let segundo = {
  a: 1,
};

console.log(primero === segundo);
segundo = primero;
console.log(primero === segundo);

const aClonar = {
  a: 1,
  b: 2,
  c: 3,
};

const elClon = {
  ...aClonar,
};
console.log(aClonar, elClon);
console.log(aClonar === elClon);

const a = { id: 1, nombre: "Juan" };
const b = a;

b.nombre = "Pedro";
b.price = 30;
console.log(a, b);
console.log(a === b);

// Extension de objetos

// Herencia prototipica:
const objBase = {
  ciudad: "New York",
  habitantes: 10000000,
};

const objExtendido = Object.create(objBase);
console.log(objBase, objExtendido);
console.log(objExtendido.ciudad);

// Al acceder a las propiedades y métodos de un objeto, si no se encuentran en el obj actual, JS lo buscará en el prototipo (obj del cual extiende)

// Object.assign():
const persona4 = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

const empleado = Object.assign({}, persona4, {
  puesto: "Software Developer",
  trabajar: function () {
    // console.log(persona4);
    return `${this.nombre} esta trabajando como`;
  },
});

console.log(empleado.nombre);
console.log(empleado.puesto);
console.log(persona4.puesto);
console.log(empleado.trabajar());

console.log(empleado);

const persona5 = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

// extender persona5 con nueva propiedad ciudad y nuevo metodo presentarse(), que retorne el nombre de la ciudad y de la persona
console.log(persona5.saludar());
const extPersona = Object.assign({}, persona5, {
  ciudad: "Hawai",
  presentarse: function () {
    return `Hola, soy de ${this.ciudad} y me llamo ${this.nombre} `;
  },
});

console.log(extPersona);
console.log(extPersona.presentarse());

const pais = {
  nombre: "España",
  bandera: "rojo y amarillo",
};

const detallesPais = {
  comunidades: 17,
  capital: "Madrid",
};

const paisCompleto = { ...pais, ...detallesPais };
console.log(paisCompleto);

const videojuego = {
  nombre: "Mario Bros",
};

const videoJuegoConPersonajes = { ...videojuego, personajes: "Luigi, Mario" };
console.log(videoJuegoConPersonajes);

// THIS

console.log(this);

const persona6 = {
  nombre: "juan",
  saludo() {
    // console.log(`Hola soy ${this.nombre}`);
    console.log(this);
  },
};
persona6.saludo();

function saludar() {
  console.log(this);
  //   console.log(`Hola. Mi nombre es ${this.nombre}`);
}
saludar();

const persona7 = {
  nombre: "Ana",
};

persona7.saludar = saludar;
persona7.saludar();

// 1. Creación de objetos
// Crea un objeto llamado "persona" con las siguientes propiedades: nombre, edad y profesión. Asigna valores a cada una de las propiedades y muestra el objeto completo por consola.
const persona = {
  nombre: "Jaume",
  edad: 23,
  profesion: "Electricista",
};
console.log(persona);

// 2. Propiedades de objetos - Leer, crear y borrar
// a) A partir del objeto creado en el ejercicio anterior, muestra por consola el valor de la propiedad "nombre".
console.log(persona.nombre);
// b) Agrega una nueva propiedad "hobby" al objeto "persona" y asígnale un valor.
persona.hobby = "Hockey";
// c) Borra la propiedad "edad" del objeto "persona".
delete persona.edad;
console.log(persona);

// 3. Enumerar propiedades de objetos
// Crea una función llamada "mostrarPropiedades" que reciba un objeto como parámetro y muestre por consola todas las propiedades del objeto.
function mostrarPropiedades(user) {
  for (let propiedad in user) {
    console.log(propiedad);
  }
}
mostrarPropiedades(persona);

// 4. Extender objetos
// Crea dos objetos: "objeto1" y "objeto2", cada uno con diferentes propiedades. Utiliza el método de extensión adecuado para combinar las propiedades de ambos objetos en un nuevo objeto llamado "objetoCombinado". Muestra el contenido del objeto combinado por consola. (...)
const objeto1 = {
  color: "rojo",
  numero: 4,
};

const objeto2 = {
  coche: true,
  marca: "Jaguar",
};

const objetoCombinado = { ...objeto1, ...objeto2 };
console.log(objetoCombinado);

// 5. Métodos y "this"
// a) Crea un objeto llamado "coche" con una propiedad "marca" y un método "presentarCoche" que muestre por consola "Este coche es de la marca X", donde "X" es el valor de la propiedad "marca".
const coche = {
  marca: "Lexus",
  presentarCoche() {
    return `Este coche es de la marca ${this.marca}`;
  },
};

console.log(coche.presentarCoche());
// b) Invoca al método "presentarCoche" del objeto "coche" para mostrar el mensaje

// 7. Object.assign
// Crea un objeto llamado "producto" con las siguientes propiedades: nombre, precio y cantidad. Luego, crea un objeto llamado "detalles" con las propiedades: peso y descripción. Utiliza el método Object.assign para combinar las propiedades de "producto" y "detalles" en un nuevo objeto llamado "productoCompleto". Finalmente, muestra el contenido del objeto "productoCompleto" por consola.
const producto = {
  nombre: "Juguete",
  precio: 20,
  cantidad: 2,
};

const detalles = {
  color: "rojo",
  tamanio: "S",
};

const productoCompleto = Object.assign({}, producto, detalles);
console.log(productoCompleto);

// next class
const arrayNumeros = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);
arrayNumeros.shift();
console.log(arrayNumeros);
