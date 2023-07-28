const express = require("express");

//creamos Router
const router = express.Router();

//traemos el middleware para comprobar usuarios
const userExists = require("../middlewares/userExists");

//traemos el middleware del token
const isUser = require("../middlewares/isUser");

//traemos el validador
const validatorExpress = require("../middlewares/validatorExpress");

//Traemos los controladores
const {
  postUser,
  getUser,
  updateUser,
  modifyPassword,
  deleteUser,
  loginUser,
  validateUserMail,
  recoverPassword,
  resetPassword,
} = require("../controllers/users");

//creamos el post
router.post("/users", validatorExpress(), postUser);

router.post("/users/login", loginUser);

//get--busqueda de informacion
router.get("/users/:idUser", userExists, isUser, getUser);

//PUT -- editar
router.put("/users/:idUser", userExists, isUser, updateUser);
router.put("/users/:idUser/password", userExists, isUser, modifyPassword);

//DELETE -- ES SOFTDELETE
router.delete("/users/:idUser", isUser, deleteUser);

//get para validacion por correo
router.get("/users/validate/:regCode", validateUserMail);

//para contraseñas
router.post("/users/recover-password", recoverPassword);

router.post("users/reset-password", resetPassword);

module.exports = router;
