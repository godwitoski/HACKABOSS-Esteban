const getDB = require("../../database/db"); //acceso a base de datos

//este es el que me va a generar los errores
const { validationResult } = require("express-validator");

//

const postUser = async (req, res) => {
  try {
    //usuario nuevo
    const { mail, pwd } = req.body;
    const connect = await getDB(); //llamamos a la conexion de db.js

    if (!mail || !pwd) return res.status(400).send("Faltan datos");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    // if (!pwd.length >= 6){
    //   return res.status(401).send("La password debe tener 6 o más caracteres");
    // }

    // if(!mail.includes("@")) {return res.status(401).send("Formato Email incorrecto")}

    //comprobamos si existe el usuario en la BDS
    const [userExist] = await connect.query(
      `SELECT id FROM users WHERE email =?`,
      [mail]
    );
    if (userExist.length > 0) {
      return res.status(409).send({
        status: "ERROR ...",
        message: "El usuario ya existe",
      });
    }

    /**---Hacer logica para confimar la cuenta por mail con codigo de registro*/
    const { v4: uuidv4 } = require("uuid");
    const regCode = uuidv4(); //codigo de registro

    //construir el main
    const bodyMail = `
    Te registraste en Diari de viajes.
    Pulsa el enlace para activar tu cuenta: ${procces.env.PUBLIC_HOST}${regCode}
    `;

    const sendMail = require("../../service/sendMail");
    const subject = "Correo de verificacion de cuenta de Diario de viaje";
    sendMail(mail, subject, bodyMail);

    const [users] = await connect.query(
      `INSERT INTO users (email, password, regCode) VALUES (?,SHA2(?,512),?)`,
      [mail, pwd, regCode]
    ); //vamos a ejecutar una consulta-dos pasos- insertar en este caso
    ////AÑADIR CON PASSWORD CON SHA2

    connect.release(); //para borrar la conexion que hice cuando ya la haga lo suyo

    res.status(200).send({
      status: "OK",
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = postUser;
