const getDB = require("../../database/db"); //acceso a base de datos

const savePhoto = require("../../service/savePhoto"); //servicio para guardar avatar

const sendMail = require("../../service/sendMail");
const { v4: uuidv4 } = require("uuid");

const updateUser = async (req, res) => {
  //
  try {
    const { idUser } = req.params; //el id por parametros
    const { name, mail } = req.body; //por body
    const connect = await getDB(); //conexion

    //chequeamos si el usuario es admin o la misma persona a modificar sus datos ---- req.userInfo.id  ->es el usuario logueado con ese token
    if (req.userInfo.id !== parseInt(idUser) && req.userInfo.role !== "admin") {
      return res
        .status(401)
        .send("No tiene permisos para modificar este usuario");
    }

    //busqueda usuario por id
    const [user] = await connect.query(
      `
      SELECT id, email, name FROM users WHERE id=?
      `,
      [idUser]
    );

    //console.log(req.files);  //esto es un buffer hay que transformar

    if (req.files && req.files.avatar) {
      //Se está enviando un avatar desde el cliente si entra acá

      //guardamos en el directorio que queremos, avatar user en este caso
      const userAvatar = await savePhoto(req.files.avatar, "/avataruser");

      await connect.query(
        `
        UPDATE users
        SET avatar =?
        WHERE id=?
        `,
        [userAvatar, idUser]
      );
    }

    //si no hay usuario devuelve error -- usamos el middleware userExists
    // if (!user.length) return res.status(400).send("Usuario no encontrado");

    if (mail && mail !== user[0].email) {
      //si pasa esto es porque el usuario está enviando nuevo mail para modificar
      //tengo que asegurarme que no exista previamente
      const [existingEmail] = await connect.query(
        `
        SELECT id 
        FROM users 
        WHERE email=?
        `,
        [mail]
      );
      if (existingEmail.length > 0) {
        return res
          .status(409)
          .send("Ya existe un usuario registrado con ese email");
      }

      //enviar correo electronico para confirmar - validar que eres tú

      const regCode = uuidv4();
      const bodyMail = `
      Acabas de cambiar tu correo electronico, en la app Diario de viajes.
      Pulsa el siguiente link para validar el correo: ${procces.env.PUBLIC_HOST}${regCode}
      `;

      const subject = "Confirma tu nuevo correo";

      await sendMail(mail, subject, bodyMail);

      //actualizar datos en la db
      await connect.query(
        `
          UPDATE users
          SET name=?,email=?,lastAuthUpdate=?,active=0,regCode=?
          WHERE id=?
        `,
        [name, mail, new Date(), regCode, idUser]
      );
      connect.release();
      return res.status(200).send({
        status: "OK",
        message: `Datos de usuario actualizados.
          Mira tu correo electrónico, para validar el nuevo email`,
      });
    }
    //si hay user hacemos UPDATE
    const [userUpdate] = await connect.query(
      `
      UPDATE users
      SET name=?, email=?
      WHERE id=?
      `,
      [name, mail, idUser]
    );

    connect.release();

    res.status(200).send({
      status: "OK",
      message: "Usuario modificado correctamente  ",
    });
  } catch (err) {
    console.error(err);
  }
};
module.exports = updateUser;
