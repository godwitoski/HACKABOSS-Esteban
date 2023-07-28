const getDB = require("../../database/db");

const getAllEntries = async (req, res) => {
  try {
    const connect = await getDB();

    const [result] = await connect.query(
      `
            SELECT e.date, e.place, e.description, u.email
            FROM entries e, users u
            WHERE e.user_id = u.id
        `
    );

    const [cantEntry] = await connect.query(
      `
        SELECT count(*) as "cantidad entradas"
        FROM entries
        `
    );

    connect.release();
    res.status(200).send({
      status: "OK",
      cantEntry,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = getAllEntries;
