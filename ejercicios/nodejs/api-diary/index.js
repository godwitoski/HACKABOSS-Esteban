//requerimos servidor al app.js
const server = require("./src/app");

//puerto - escuchar
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
