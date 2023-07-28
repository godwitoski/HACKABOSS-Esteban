const getDB = require("../../database/db"); //acceso a base de datos

const getUser = async (req, res) => {
  try {
    const { idUser } = req.params; //viene el id por params/:idUser
    const connect = await getDB(); //conexion

    //HACEMPS EL GET--La query-select
    const [user] = await connect.query(
      `SELECT date, email, name, avatar FROM users WHERE id=?`,
      [idUser]
    );
    //  if (!user.length) return res.status(400).send("Usuario no encontrado");
    //hace falta si no usamos el middleware de userExists
    connect.release();

    res.status(200).send({
      status: "OK",
      data: user,
      //tokenInfo: req.userInfo,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = getUser;
