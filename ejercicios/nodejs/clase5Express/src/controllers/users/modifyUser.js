const users = require("../../database/data.json");
const fs = require("fs");
const path = require("path");

const modifyUser = (req, res) => {
  try {
    const { id } = req.params;

    const { name, age } = req.body;

    const user = users.find((el) => el.id == parseInt(id));

    if (!user) return res.status(403).send("Usuario a modificar no encontrado");

    users.forEach((el) => {
      if (el.id === parseInt(id)) {
        el.name = name;
        el.age = age;
      }
    });
    const dir = path.join(__dirname, "../../database/data.json");
    fs.writeFileSync(dir, JSON.stringify(users));
    res.status(200).send({
      status: "OK",
      message: "Usuario Modificado",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = modifyUser;
