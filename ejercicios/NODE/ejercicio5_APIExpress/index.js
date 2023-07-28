const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

// Escribe aquí el código solicitado
const fs = require("fs");
const Joi = require("joi");
const path = require("path");

//---------------------
//Middleware --para parsear lo que venia por body-->express.json()
app.use(express.json());
//para poder leer lo que venga por formularios
app.use(express.urlencoded({ extended: true }));

//Pagina principal
app.get("/", (req, res) => {
  res.send(`<h3>SOY LA APP.</h3> 
  <p>Ve a /list para lista los eventos.</p>
  <p> Haz un post a /new para añadir eventos.</p>`);
});

//listar eventos
let filepath = path.join(__dirname, "data.json");
let dataEvent = fs.readFileSync(filepath);

let listEvent = JSON.parse(dataEvent);

app.get("/list", (req, res) => {
  if (!listEvent.length) {
    res.send("No hay eventos");
  } else {
    res.status(200).send({
      status: "OK",
      data: listEvent,
    });
  }
});

//post eventos
const postEvent = async (req, res) => {
  try {
    const { date, event } = req.body;

    //objeto del evento con sus datos
    let eventObj = { date, event };

    const schema = Joi.object().keys({
      date: Joi.date().required(),
      event: Joi.string().required(),
    });

    const validation = schema.validate(eventObj);
    if (validation.error) {
      throw new Error(validation.error.message);
    }

    //añadimos el objeto a la lista de eventos
    listEvent.push(eventObj);

    //Y sobreescribimos porque ta ha sido leido y añadido
    fs.writeFileSync(filepath, JSON.stringify(listEvent));
    res.status(200).send({
      status: "OK",
      message: "El evento se ha añadido correctamente",
      data: listEvent,
    });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

app.post("/new", postEvent);

//error 404
app.use((req, res, next) => {
  res.status(404).send("<h2>ERROR 404. Página no encontrada</h2>");
  next();
});

//gestion errores
app.use((err, req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || err;

  console.error(err);
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
