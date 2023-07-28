const getDB = require("../../database/db");
const deletePhoto = require("../../service/deletePhoto");
const deleteEntry = async (req, res) => {
  try {
    const connect = await getDB();

    const { idEntry } = req.params;

    //seleccionar las fotos ascociadas a la entrada
    const [photos] = await connect.query(
      `
            SELECT photo 
            FROM photos 
            WHERE entry_id=?
            `,
      [idEntry]
    );

    //borro las fotos de la entrada en la tabla photos
    await connect.query(`DELETE FROM photos WHERE entry_id=?`, [idEntry]);

    //elimino las fotos de la carpeta uploads/photoentries
    for (let item of photos) {
      await deletePhoto(item.photo, "/photoentries");
    }

    //borro los posibles votos que tenga ese entrada
    await connect.query(
      `
        DELETE FROM votes WHERE entry_id=?
        `,
      [idEntry]
    );

    //elimino la entrada
    await connect.query(`DELETE FROM entries WHERE id=?`, [idEntry]);

    connect.release();
    res.status(200).send({
      status: "OK",
      message: `La entrada con id ${idEntry} y todos sus elementos fueron eliminados`,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteEntry;
