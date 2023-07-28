"use strict";
const http = require("http");
const fs = require("fs");

const server = http.createServer();
const PORT = 3000;

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    const html = fs.readFileSync(__dirname + "/html/index.html");
    return res.end(html);
  } else if (req.url === "/api") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    const html = fs.readFileSync(__dirname + "/html/index.html");
    return res.end("<h1>Estás en la api</h1>");
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/html");
    const html = fs.readFileSync(__dirname + "/html/index.html");
    return res.end("<h1>Not found</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT} `);
});
