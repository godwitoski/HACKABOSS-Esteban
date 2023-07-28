const express = require("express");
const morgan = require("morgan");

//importamos el router
const userRouter = require("./router/userRouter");

const server = express();

server.get("/", (req, res) => {
  res.status(200).send("Servidor escuchando. ..");
});
//middleware - generales de
server.use(morgan("dev"));
server.use(express.json());

//llamamos al enrutador como middleware global
server.use(userRouter);
// server.use("/api", userRouter);

//llamar a las rutas de:usuario, producto, comercio...
server.use((req, res) => {
  res.status(404).send("Not found");
});

//gestion errores
server.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status.send(message));
});

module.exports = server;
