// modulo OS
const os = require("os");

//devuelve cantidad de memoria RAM
const memoria = os.totalmem();
console.log("Total RAM: ", memoria);

//total memoria libre(disponible)
const memoriaDisp = os.freemem();
console.log("RAM DISPONIBLE: ", memoriaDisp);

//retornar el nombre del host donde se encuentra el proceso
console.log("Hostname: ", os.hostname());

//Retornar el directorio donde se ejecuta el proceso
console.log("Directorio ", os.homedir());

//directorio donde se encuentran los archivos temporales
console.log("Directorio temporal:", os.tmpdir());

//arquitecto cpu
console.log("CPU :", os.arch());

//informacion sobre el/los cpu/s
console.log("CPUs :", os.cpus());

//Informacion de las redes
console.log("INTERFACES DE RED: ", os.networkInterfaces());

//TODO EL OS
// console.log(os)

//PLATAFORMA OS
console.log(os.platform());
