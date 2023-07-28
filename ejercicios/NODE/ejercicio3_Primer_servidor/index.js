const express = require("express");
const app = express();
const port = 8080;

const today = new Date();
const time = today.toLocaleTimeString();

app.use((req, res, next) => {
  console.log("Método", req.method);
  console.log("URL", req.url);
  next();
});

app.get("/", (req, res, next) => {
  try {
    res.send(
      `<h2>Página principal</h2> 
      <p>usa /hora para ir a la hora actuál</p> 
      <p>o usa /directorio para conocer la ruta del servidor</p>`
    );
  } catch (err) {
    next(err);
  }
});

app.get("/hora", (req, res, next) => {
  try {
    res.send(`<h2>La hora actual es: ${time}</h2>`);
  } catch (err) {
    next(err);
  }
});

app.get("/directorio", (req, res, next) => {
  try {
    res.send(`<h2>Ruta código del servidor: ${__dirname}</h2>`);
  } catch (err) {
    next(err);
  }
});

app.get("/error-forzado", (req, res, next) => {
  try {
    return next(new Error("Este es un error generado intencionadamente"));
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  res.status(404).send("<h2>ERROR 404. Página no encontrada</h2>");
  next();
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    success: false,
    message: err.message,
    stack: "El stack para la gestión. ---- " + err.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
