const getDB = require("../../database/db");

const validateUserMail = async (req, res) => {
  try {
    const connect = await getDB();
    const { regCode } = req.params;

    const [user] = await connect.query(
      `
            SELECT id
            FROM users
            WHERE regCode=?
        `,
      [regCode]
    );

    if (user.length === 0) {
      return res.status(404).send("Ningún usuario con ese código");
    }

    //activamos usuario si para la verificacion anterior

    await connect.query(
      `
        UPDATE users
        SET active=true, regCode=null
        WHERE regCode = ?
        `,
      [regCode]
    );

    connect.release();
    res.status(200).send({
      status: "OK",
      message: "Usuario validado/activado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = validateUserMail;
