const users = require("../../database/data.json");

const getUserByName = (req, res) => {
  try {
    const { name } = req.query;

    const json = users.filter((el) => el.name.includes(name));

    if (!json.length) return res.status(401).send("No se encontraron datos");
    res.status(200).send({
      status: "OK",
      data: json,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = getUserByName;
