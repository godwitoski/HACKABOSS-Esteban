//
const getDB = require("../../database/db");

const voteEntry = async (req, res) => {
  try {
    const connect = await getDB();

    const { idEntry } = req.params;

    const idUser = req.userInfo.id; //usuario logueado
    const { vote } = req.body;

    if (!vote || vote > 5 || vote < 1) {
      return res.status(400).send("Voto no válido");
    }

    //comprobamos que no esté votando mi propia entrada
    const [myEntry] = await connect.query(
      `
        SELECT user_id
        FROM entries
        WHERE id=?
        `,
      [idEntry]
    );

    if (myEntry[0].user_id === idUser) {
      return res.status(403).send("No puedes votar tu propia entrada");
    }

    //comprobamos que el usuario no vote la misma entrada varias veces
    const [existingVote] = await connect.query(
      `
        SELECT id
        FROM votes
        WHERE user_id=? AND entry_id=?
      `,
      [idUser, idEntry]
    );
    if (existingVote.length > 0) {
      return res.status(403).send("No puedes volver a votar esta entrada");
    } //si tiene length es que ya votó la entrada

    //si no entra en ningun if de esos, vamos a ---registrar voto

    await connect.query(
      `
            INSERT INTO votes (vote,user_id,entry_id)
            VALUES(?,?,?)
      `,
      [vote, idUser, idEntry]
    );

    //metodo para promediar votos
    const [media] = await connect.query(
      `
        SELECT AVG(v.vote) AS mediaVotos
        FROM entries e 
        INNER JOIN votes v ON (v.entry_id=e.id)
        WHERE e.id=?
      `,
      [idEntry]
    );

    connect.release();

    res.status(200).send({
      status: "OK",
      message: "Entrada votada correctamente",
      data: {
        mediaVotos: media[0].mediaVotos,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = voteEntry;
