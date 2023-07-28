const users = require("../../database/data.json");

const getUsers = (req, res) => {
  try {
    res.status(200).send({
      status: "ok",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUsers;
