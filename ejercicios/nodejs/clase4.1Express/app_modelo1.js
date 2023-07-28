/**Requerir express */
const express = require("express");
const morgan = require("morgan"); //requerimos morgan-middleware

//process.env.PORT --> lo va a usar un servidor de despliegue
const PORT = process.env.PORT || 3001;

/**Creo una instancia de express */
const app = express();

/**APP.USE --> crea un middleware GLOBAL */
app.use(morgan("dev"));
app.use(express.json()); //se usa para el envio de data por body

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.use((req, res, next) => {
  if (req.headers.authorization === "clave") {
    next();
  } else {
    res.statusCode = 401;
    return res.send("No autorizado");
  }
});

app.use((req, res) => {
  res.statusCode = 200;
  res.send(`<h2>Bienvenido usuario</h2>`);

  //   res.send("<h1>Hola desde EXPRESS</h1>");
});

/**Levanto el servidor en un puerto */
app.listen(PORT, () => {
  console.log("Servidor escuchando en puerto", PORT);
  console.log(`Servidor en http://localhost:${PORT}`);
});
