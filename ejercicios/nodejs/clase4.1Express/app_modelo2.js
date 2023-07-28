const express = require("express");
const morgan = require("morgan");
const json = require("./database/data.js"); //es js, necesitamos un module.exports

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("dev"));

/**Crear rutas =endpoints */
app.get("/", (req, res) => {
  // res.statusCode = 200;
  // res.send("Estas en pagina principal");
  res.status(200).send("Estás en pagina principal");
  //  res.status(401).send({
  //   "message":"Bad",
  //   "data":"No autorizado"
  //  })
});

app.get("/users", (req, res) => {
  res.status(200).send({
    message: "Listado de usuarios",
    data: json,
  });
});

app.get("/contact", (req, res) => {
  res.status(200).send("Estás en contact");
});

app.use((req, res) => {
  res.send(404).send("Not found");
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
