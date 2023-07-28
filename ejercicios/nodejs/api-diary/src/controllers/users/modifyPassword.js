const getDB = require("../../database/db"); //acceso a base de datos

const modifyPassword = async (req, res) => {
  try {
    const connect = await getDB(); //conexion
    const { idUser } = req.params; //el id por parametros
    const { actualPwd, newPwd } = req.body; //requerimos contraseña actual, y nueva para cambiar

    const [user] = await connect.query(
      `
        SELECT id FROM users WHERE id=? AND password=SHA2(?,512)
        `,
      [idUser, actualPwd]
    ); //si coincide la contraseña se nos añade acá

    //-- usamos el middleware POR LO QUE NO HACE FALTA
    // if (user.length === 0) return res.status(401).send("No coincide la contraseña con la actual"); //si es 0, es que no hay user encontrado por lo que es distinta la contraseña y ya no sigue con el update

    //procedemos a actualizar
    await connect.query(
      `
        UPDATE users 
        SET password = SHA2(?,512), lastAuthUpdate=?
        WHERE id=?
        `,
      [newPwd, new Date(), idUser]
    );
    connect.release();
    res.status(200).send({
      staus: "OK",
      message: "Password cambiado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = modifyPassword;
