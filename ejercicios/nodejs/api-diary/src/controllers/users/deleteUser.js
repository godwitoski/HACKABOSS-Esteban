const getDB = require("../../database/db"); //acceso a base de datos

const deleteUser = async (req, res) => {
  try {
    const connect = await getDB();
    const { idUser } = req.params;

    //En teoria yo deberia mirar: Si el usuario conectado(logueado) es e mismo que el id que recibo por params, o si el usuario es admin, dejarlo que haga la eliminacion

    await connect.query(
      `
    UPDATE users
    SET password="[borrado]",name="[borrado]",avatar=null,active=0,deleted=1,lastAuthUpdate=?
    WHERE id=?
    `,
      [new Date(), idUser]
    );
    connect.release();
    res.status(200).send({
      status: "OK",
      message: `El usuario con id: ${idUser} eliminado`,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = deleteUser;
