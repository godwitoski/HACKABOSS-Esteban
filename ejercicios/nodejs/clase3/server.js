/***
 ***** CREAR SERVIDOR CON NODEJS
 *Hacer uso de modulo core http
 ***/
// ---********PASOS******---

//---Requerir modulo http
const http = require("http");

//---llamar un instancia de http - servidor
const server = http.createServer();

//----respuesta que se ejecuta cada vez que el servidor recibe pedido
server.on("request", (request, response) => {
  //primero respondo con codigo de status
  response.statusCode = 200;
  /**Setear headers: encabezados
   * popiedad->content-type (contenido que envio)
   */
  response.setHeader("Content-type", "text/plain");
  //envio contenido
  response.end("Hola mundo");
});

//definir el puerto de escucha del server
server.listen(3000, () => console.log("Servidor escuchando en puerto 3000"));
