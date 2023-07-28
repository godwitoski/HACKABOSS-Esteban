const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fileUpload = require("express-fileupload"); //traemos el fileupload para las img

//llamamos a la funcion para crear directorio estatico si no está
const createStaticDir = require("../src/service/createStaticDir");

//creamos servidor
const server = express();

//requerimos el enrutador de user
const UserRouter = require("../src/router/userRouter");

//requerimos el entrirouter
const entryRouter = require("../src/router/entriesRouter");

//----
//Middleware -- recaudar todo los datos que vienen psor formulario
server.use(express.urlencoded({ extended: false }));
//Middleware --para parsear lo que venia por body-->express.json()
server.use(express.json());
//Middleware -- morgan
server.use(morgan("dev"));
//Middleware para subida de imagenes ---> instalado desde npm
server.use(fileUpload());

//seteamos/creamos un directorio estatico, no se modifican nunca
const staticDir = path.join(__dirname, "uploads");
server.use(express.static(staticDir));
createStaticDir(staticDir);

//---Pagina principal
server.get("/", (req, res) => {
  res.send("<h3>Estoy acá</h3>");
});

//---Enrutadores
//userRouter
server.use(UserRouter);

//entries
server.use(entryRouter);

//gestion errores
server.use((err, req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || err;

  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
