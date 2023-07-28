//const funciones = require("./src/funciones");
const { getSuma, getResta, getDiv, getMult } = require("./src/funciones");
require("./src/database/db.js"); // --> //requiriendo un modulo propio
//*** */
const { mostrarDatos, getMayor } = require("./src/database/db");
// mostrarDatos();
// console.log(getMayor());
// console.log(getSuma(12, 5));
// console.log(getResta(12, 5));
// console.log(getDiv(12, 5));
// console.log(getMult(12, 5));

// console.log(process.pid); //id del proceso que se está ejecutando
// console.log(process.version); //version instalada de node
// console.log(process.platform); //plataforma de ejecucion, SO

// process.title = "Prueba de process"; //asigna titulo al proceso
// console.log(process.title); //muestra titulo

// if (process.version == "v18.16.0") {
//   console.log("Ultima version");
// } else {
//   console.log("Version desactualizada");
// }

mostrarDatos();
console.log(getMayor());
// process.on("exit", () => console.log("Proceso finalizado"));

// process.on("uncaughtException", (err) => {
//   console.log("Ocurrió un error");
//   console.log(err.stack);
// });

// throw new Error("Mensaje de error");

// console.log(process.env.PATH);

console.log(__dirname);

//------------------------------------------

//CREAR UN PROYECTO DE NODEJS
//1)---Crear una carpeta que va contener el proyecto(nombre del proyecto, MINUSCULAS, SIN ESPACIOS)
//2)---Abrir la carpeta en VSC o abrir terminal de GIT "EN LA CARPETA DEL PROYECTO"
//3)---Ejecutamos (git init) npm init -y (opcional -y) para crear repo de node
//-----Al hacer todo eso - Se crea un proyecto de node con el archivo package.json --> contiene las dependencias del proyecto
//4)---Instalar dependencias que se van a utilizar de npm
