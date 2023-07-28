const getDB = require("../../database/db");

const recoverPassword = async (req, res) => {
  try {
    const connect = await getDB();
    const { mail } = req.body;

    if (!mail) {
      return res
        .status(400)
        .send("Debe ingresar su email para la recuperacion");
    }

    const [user] = await connect.query(
      `
        SELECT id 
        FROM users
        WHERE email=?
        `,
      [mail]
    );

    if (user.length === 0) {
      res.status(404).send("No existe usuario con ese email");
    }

    const { v4: uuidv4 } = require("uuid");
    const recoverCode = uuidv4(); //codigo de recuperacion único

    await connect.query(
      `
        UPDATE users
        SET recoverCode=?,lastAuthUpdate=?
        WHERE email=?
        `,
      [recoverCode, new Date(), mail]
    );

    //ENVIAR ese codigo por mail
    const body = `Se solicitó un cambio de password de la app Diario de viajes.
    El código de recuperación es ${recoverCode} 
    .Si no fuiste tu, desestima este mail y entra con tu password.
    Un saludo
    `;
    const subject = "Cambio de contraseña-Diario de viajes";

    const sendMail = require("../../service/sendMail");

    await sendMail(mail, subject, body);

    connect.release();

    res.status(200).send({
      status: "OK",
      Message: "Correo envio, para recuperar contraseña",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = recoverPassword;
