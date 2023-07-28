const getDB = require("../../database/db");

const modifyEntry = async (req, res) => {
  try {
    const connect = await getDB();
    const { idEntry } = req.params;
    //lo que vamos a modificar
    const { place, description } = req.body;

    //si no existe
    if (!place) return res.status(400).send("Campo Place es necesario");

    //si existe
    await connect.query(
      `
            UPDATE entries 
            SET place=?, description=?
            WHERE id=?
        `,
      [place, description, idEntry]
    );

    //Para que nos mande los datos modificados
    const [modifyEntry] = await connect.query(
      `
        SELECT *
        FROM entries
        WHERE id=?
        `,
      [idEntry]
    );

    connect.release;
    res.status(200).send({
      status: "OK",
      message: `Entrada ${idEntry} ha sido actualizada correctamente`,
      data: modifyEntry,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = modifyEntry;
