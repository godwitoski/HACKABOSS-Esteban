const getDB = require("../database/db");

const entryExists = async (req, res, next) => {
  try {
    const connect = await getDB();

    //comprobamos por idEntry
    const { idEntry } = req.params;

    const [entry] = await connect.query(
      `
                SELECT id
                FROM entries
                WHERE id=?
            `,
      [idEntry]
    );
    connect.release();
    //si esta vacio
    if (entry.length === 0) {
      return res.status(404).send("No existe esa entrada");
    }
    next(); //Lo dejamos pasar si existe
  } catch (error) {
    console.log(error);
  }
};
module.exports = entryExists;
