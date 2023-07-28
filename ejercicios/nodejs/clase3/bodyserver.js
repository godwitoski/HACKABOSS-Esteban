"use strict";
const http = require("http");

const server = http.createServer();
const PORT = 3000;

//funcion que deserealiza el body
function bodyParser(req) {
  return new Promise((resolve) => {
    let body = [];

    //evento data se ejecuta cada vez que llega algo por body
    //chunk hace referencia a un objeto de tipo buffer
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    //end se ejecuta cuando no hay más datos/covertimos el buffer a string
    req.on("end", () => {
      body = Buffer.concat(body).toString();
      resolve(JSON.parse(body)); //objeto
    });
  });
}

server.on("request", async (req, res) => {
  //console.log(req);
  const body = await bodyParser(req);

  res.statusCode = 200;
  res.getHeader("content-type", "application/json");
  console.log(body);
  const { id, name, pwd } = body;
  if (id == 20) {
    res.end(JSON.stringify(body));
  } else {
    res.end("Errorrrr");
  }
});

server.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT} `);
});
