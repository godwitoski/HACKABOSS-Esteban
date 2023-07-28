/**
 * Suponemos base de datos con compradores y vendedores
 * necesitamos filtar esos usuarios por comprador o vendedor
 */

const http = require("http");
const queryString = require("querystring");

const server = http.createServer();
const PORT = 3000;

server.on("request", (req, res) => {
  //tomamos lo que viene de la url, la parte de querystring... desde ? ->
  //request (req)
  const myQueryString = req.url.split("?")[1];
  //   console.log(myQueryString);

  //transformar esa data en objeto JS(parsear)
  const parsedParams = queryString.parse(myQueryString);
  //   console.log(parsedParams);
  const { search } = parsedParams;

  res.statusCode = 200;
  res.setHeader("content-type", "text/html");

  if (search === "comprador") {
    res.end("<h2>Listado de compradores</h2>");
  } else if (search === "vendedor") {
    res.end("<h2>Listado de vendedores</h2>");
  } else {
    res.end("<h2>Parametro incorrecto</h2>");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// /**PRUEBA CON EDAD */
// server.on("request", (req, res) => {
//   //tomamos lo que viene de la url, la parte de querystring... desde ? ->
//   const myQueryString = req.url.split("?")[1]; //poner en la url ?name=juan para probar--lo que envian al server
//   //   console.log(myQueryString);

//   //transformar esa data en objeto JS(parsear)
//   const parsedParams = queryString.parse(myQueryString);
//   //   console.log(parsedParams);
//   const { edad, name } = parsedParams;
//   if (parseInt(edad) > 18) {
//     console.log("Mayor de edad ", edad);
//   } else {
//     console.log("Menor de edad ", edad);
//   }
// });
