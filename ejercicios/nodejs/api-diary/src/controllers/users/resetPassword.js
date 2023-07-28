const getDB = require("../../database/db");

const resetPassword = async (req, res) => {
  try {
    const connect = await getDB();
    const { recoverCode, newPassword } = req.body;

    if (!recoverCode || !newPassword || newPassword.length < 6) {
      return res
        .status(400)
        .send("Faltan datos o la password es menor a 6 caracteres");
    }

    const [user] = await connect.query(
      `
        SELECT id
        FROM users 
        WHERE recoverCode=?
        `,
      [recoverCode]
    );

    if (user.length === 0) {
      return res.status(400).send("Código de recuperación incorrecto");
    }

    await connect.query(
      `
        UPDATE users 
        SET password =SHA2(?,512),lastAuthUpdate=?,recoverCode=null
        WHERE id=?
        `,
      [newPassword, new Date(), user[0].id]
    );

    connect.release();

    res.status(200).send({
      status: "OK",
      message: "Password cambiada correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = resetPassword;
