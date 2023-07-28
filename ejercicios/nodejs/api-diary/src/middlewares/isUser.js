const getDB = require("../database/db");
//MIDDLEWARE PARA EL token--- decodificar jsonwebtoken
const jwt = require("jsonwebtoken");

const idUser = async (req, res, next) => {
  try {
    const connect = await getDB();
    const authorization = req.headers["authorization"]; //token

    if (!authorization) {
      return res.status(401).send("Necesita cabecera autorizacion");
    }

    let tokenInfo; //informacion descodificada
    try {
      tokenInfo = jwt.verify(authorization, process.env.SECRET_TOKEN);
    } catch (error) {
      return res.status(401).send("Token no válido");
    }

    //COMPROBAR QUE LA FECHA DEL TOKEN SEA VÁLIDA CON RESPECTO AL LASTAUTHUPDATE
    const [user] = await connect.query(
      `
      SELECT lastAuthUpdate
      FROM users
      WHERE id=?
      `,
      [tokenInfo.id]
    );
    const lastAuthUpdate = new Date(user[0].lastAuthUpdate); //nueva fecha
    const timeStampCreateToken = new Date(tokenInfo.iat * 1000); //fecha limite del token

    if (timeStampCreateToken < lastAuthUpdate) {
      res.status(401).send(`Token caducado`);
    }

    //Añadir la informacion del token a la request -- para tomarlo desde req
    req.userInfo = tokenInfo;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = idUser;
