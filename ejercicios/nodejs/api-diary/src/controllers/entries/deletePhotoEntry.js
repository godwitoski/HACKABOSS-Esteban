const getDB = require("../../database/db");
const deletePhoto = require("../../service/deletePhoto");

const deletePhotoEntry = async (req, res) => {
  try {
    const connect = await getDB();
    const { idEntry, idPhoto } = req.params;

    const [currentPhoto] = await connect.query(
      `
        SELECT photo 
        FROM photos
        WHERE entry_id=? AND id=?
        `,
      [idEntry, idPhoto]
    );

    if (currentPhoto.length === 0) {
      res.status(404).send("La imagen no existe");
    }
    //borrar la foto (archivo) del servidor
    await deletePhoto(currentPhoto[0].photo, "/photoentries");

    //borro la foto de la tabla photos de la BD
    await connect.query(
      `
        DELETE FROM photos 
        WHERE entry_id=? AND id=?
        `,
      [idEntry, idPhoto]
    );
    connect.release();

    res.status(200).send({
      status: "OK",
      message: "Foto eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = deletePhotoEntry;
