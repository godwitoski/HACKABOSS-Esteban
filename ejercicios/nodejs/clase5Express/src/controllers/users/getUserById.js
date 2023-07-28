const users = require("../../database/data.json");
const getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((el) => el.id == parseInt(id));

    if (!user) return res.status(401).send("UserNotFount");
    res.status(200).send({
      status: "OK",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserById;
