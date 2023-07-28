const http = require("http");

const server = http.createServer();
const PORT = 3000;

server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");

  const users = require("./database/users.json");

  const info = users.map((el) => {
    return {
      id: el.id,
      name: el.name,
      username: el.username,
      email: el.email,
      city: el.address.city,
    };
  });

  res.end(JSON.stringify(info));
});

server.listen(PORT, () => {
  console.log(`Todo ha ido bien, puerto ${PORT} encontrado`);
});
