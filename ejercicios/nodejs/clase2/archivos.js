/**
 * MANEJOR DE ARCHIVOS
 * MODULO fs:(crear,leer,modificar y eliminar archivos)
 *
 */

const fs = require("fs");
const path = require("path");

//console.log(fs);

//-----------------------
//--****crear una archivo***** ----el write lo crea si no existe el archivo. Y sobreescribe
// fs.writeFile(nombredearchivo,informacion-mensaje,callback)
// fs.writeFile("prueba.txt", "hola mundo desde NodeJS", (err) => {
//   if (err) {
//     console.log("Erro : ", err);
//   } else {
//     console.log("Archivo creado correctamente");
//   }
// });

//----------------------------
const cb = (error) => {
  //     if (error) {
  //     console.log("Error : ", error);
  //   } else {
  //     console.log("Archivo creado correctamente");
  //   }
  error
    ? console.log("Error : ", error)
    : console.log("Archivo creado correctamente");
};

// const fileName = "prueba2.txt";
// const infor = "otra manera de escribir un archivo";
// fs.writeFile(fileName, infor, cb);
//-----------
//*********************si queremos *** agregar **** algo sin que se sobreescriba. Guardaremos en algun sitio
const datos = require("./database/data.json");
//console.log(datos); //array

const obj = {
  id: 6,
  nombre: "agregado",
  edad: 41,
};
//datos.push(obj); //añadir dato en memoria en el array
//const rutaData = path.join("./database/data.json");
//const infoJSON = JSON.stringify(datos); //json
//fs.writeFile(rutaData, infoJSON, cb); //actualizamos el json, se sobreescribe.

//**************** */

//---*********modificar un regisro************//
const newId = 1; //id existente
const newName = "Juanen";
const newEdad = 415;

datos.forEach((element) => {
  if (element.id === newId) {
    element.nombre = newName;
    element.edad = newEdad;
  }
});

const rutaData = path.join("./database/data.json");
const infoJSON = JSON.stringify(datos); //json
fs.writeFile(rutaData, infoJSON, cb); //actualizamos el json, se
