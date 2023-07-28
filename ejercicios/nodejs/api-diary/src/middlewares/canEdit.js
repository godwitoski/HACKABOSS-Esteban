const getDB = require("../database/db");

const canEdit = async (req, res, next) => {
  try {
    const connect = await getDB();
    const { idEntry } = req.params;

    const [entry] = await connect.query(
      `
        SELECT user_id
        FROM entries
        WHERE id=?
        `,
      [idEntry]
    );
    connect.release();
    //chequeamos si el usuario es admin o la misma persona a modificar sus datos ---- req.userInfo.id  ->es el usuario logueado con ese token
    if (req.userInfo.id !== entry[0].user_id && req.userInfo.role !== "admin") {
      return res
        .status(401)
        .send("No tiene permisos para modificar esta entrada");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = canEdit;
