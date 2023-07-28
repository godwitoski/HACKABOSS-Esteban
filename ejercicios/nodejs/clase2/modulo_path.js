const path = require("path");

//-------------RUTAS RELATIVAS

// const ruta = path.join("/helpers", "js", "script.js");
// const data = path.join("/database", "data.json");

// const ruta2 = path.join("/src", "interfaces", "js", "inteface.js");
// //se crean las rutas a esos archivos, pero habria que tenerlas creadas en el directorio
// console.log(ruta);
// console.log(data);
// console.log(ruta2);

//const ruta = path.join("/src/interfaces/js/interfaces.js"); //ruta para acceder a un recurso
// console.log(ruta);

// --------RUTA ABSOLUTA---NO USAR----------------------
//devuelve el nombre del directorio donde se encuentra el archivo/en ABSOLUTE
// console.log(__dirname);

// const rutaAbsoluta = path.resolve("helpers", "algo", "algo.txt");
// // const rutaAbsoluta = path.resolve(__dirname,"helpers", "algo", "algo.txt");
// console.log(rutaAbsoluta); //me da una ruta absoluta

const rutaAb = path.join(__dirname, "helpers", "alguito.txt");
console.log(rutaAb);

const arch = path.basename(rutaAb);
console.log(arch);

const extArch = path.extname(rutaAb);
console.log(extArch);

const dirImgUser = path.join("/public", "img", "user");
// const dirImg = path.join("/public/img");
const dirImgProd = path.join("/public", "img", "productos");
