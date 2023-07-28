const users = require("../../database/data.json");

const fs = require("fs");
const path = require("path");

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const user = users.find((el) => el.id == parseInt(id));

    if (!user) return res.status(403).send("Usuario a eliminar no encontrado");

    const NewArray = users.filter((el) => el.id != parseInt(id));

    const dir = path.join(__dirname, "../../database/data.json");
    fs.writeFileSync(dir, JSON.stringify(NewArray));
    res.status(200).send({
      status: "OK",
      message: "Usuario Eliminado",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteUser;
