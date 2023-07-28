//import del server
const server = require("./src/app");

const PORT = process.env.PORT || 3001;

//levantamos servidor
server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
