const users = require("../../database/data.json");

const fs = require("fs");
const path = require("path");
const newUser = (req, res) => {
  try {
    //viene por body al querer añadir user
    const { name, age } = req.body;
    if (!name || !age) return res.status(403).send("Faltan datos");

    //cogemos el id del ultimo para sumarle uno
    const newId = users[users.length - 1].id + 1;

    const obj = {
      id: newId,
      name: name,
      age: age,
    };

    users.push(obj);
    const dir = path.join(__dirname, "../../database/data.json");
    fs.writeFileSync(dir, JSON.stringify(users));
    res.status(200).send({
      status: "OK",
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = newUser;
