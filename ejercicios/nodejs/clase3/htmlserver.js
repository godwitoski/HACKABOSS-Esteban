const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (request, response) => {
  response.statusCode = 200;

  response.setHeader("Content-type", "text/html");

  const html = fs.readFileSync(__dirname + "/html/index.html");
  response.end(html);
});

server.listen(3000, () => console.log("Servidor escuchando en el 3000"));
