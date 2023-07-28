const express = require("express");
const morgan = require("morgan");
const path = require("path");
const json = require("./database/data.json");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const handler = (re1, res, next) => {
  console.log("MiddleWare Handler 1");
  next();
};

const handler2 = (req, res, next) => {
  console.log("MiddleWare Handler 2");
  next();
};

const handler3 = (re1, res, next) => {
  console.log("MiddleWare Handler 3");
  //   res.send("Termine");
  next();
};

app.get("/", handler, handler2, handler3, (req, res) => {
  res.send("Termine en la ruta, no en los middlewares");
});

app.get("/prueba", handler2, (req, res) => {
  res.send("Prueba");
});

app.get("/discos", (req, res) => {
  res.send("Estás en discos");
});

app.get("/html", (req, res) => {
  res.status(200).sendFile(__dirname + "/html/index.html");
});

app.get("/users", (req, res) => {
  res.status(200).json(json);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
