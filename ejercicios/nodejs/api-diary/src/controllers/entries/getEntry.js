const getDB = require("../../database/db");

const getEntry = async (req, res) => {
  try {
    const { idEntry } = req.params;

    const connect = await getDB();

    const [result] = await connect.query(
      `
         SELECT e.date, e.place, e.description, u.email
            FROM entries e JOIN users u ON e.user_id = u.id
            WHERE e.id=? 
       `,
      [idEntry]
    );

    connect.release();
    res.status(200).send({
      status: "OK",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = getEntry;
