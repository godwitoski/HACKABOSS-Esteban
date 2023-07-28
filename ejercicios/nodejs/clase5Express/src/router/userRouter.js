const express = require("express");

//requerimos en middleware de autorizacion
const authMiddleware = require("../middlewares/authMiddleware");

//importamos/requerimos la funcion getUser del controlador
const {
  getUsers,
  getUserByName,
  getUserById,
  newUser,
  modifyUser,
  deleteUser,
} = require("../controllers/users");

//Volverlo enrutador - instancia
const router = express.Router();

//-----Metodos
//leer
router.get("/user", getUsers); //por query
router.get("/user/search", getUserByName); //por query

router.get("/user/:id", getUserById); //por params

//para añadir
router.post("/user", newUser);

//para modificar
router.put("/user/:id", authMiddleware, modifyUser);

//borrar
router.delete("/user/:id", authMiddleware, deleteUser);

/**
 * CRUD
 * CREATE READ UPDATE DELETE
 */
module.exports = router;
