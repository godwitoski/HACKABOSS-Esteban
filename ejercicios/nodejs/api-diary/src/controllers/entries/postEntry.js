const getDB = require("../../database/db");

const savePhoto = require("../../service/savePhoto");

const postEntry = async (req, res) => {
  try {
    const connect = await getDB();

    const { place, description } = req.body; //debe estar logueado con token, si no enviamos idUser

    //comprobar si hay place
    if (!place) return res.status(400).send("Campo Place es obligatorio");

    //hacemos un post a una entrada
    const [result] = await connect.query(
      `
            INSERT INTO entries (place,description,user_id)
            VALUES (?,?,?)
        `,
      [place, description, req.userInfo.id]
    );

    //getionar la subida de fotos -- limitamos 4 con slice

    const { insertId } = result;

    if (req.files && Object.keys(req.files).length > 0) {
      for (let photoData of Object.values(req.files).slice(0, 3)) {
        try {
          const photoName = await savePhoto(photoData, "/photoentries");
          await connect.query(
            `
            INSERT INTO photos (photo,entry_id)
            VALUES(?,?)
            `,
            [photoName, insertId]
          );
        } catch (error) {
          console.log(error);
        }
      }
    }

    connect.release();

    res.status(200).send({
      status: "OK",
      message: "Entrada creada correctamente",
      result: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = postEntry;
