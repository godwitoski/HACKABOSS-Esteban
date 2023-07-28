const postUser = require("./postUser");
const getUser = require("./getUser");
const updateUser = require("./updateUser");
const modifyPassword = require("./modifyPassword");
const deleteUser = require("./deleteUser");
const loginUser = require("./loginUser");
const validateUserMail = require("./validateUserMail");
const recoverPassword = require("./recoverPassword");
const resetPassword = require("./resetPassword");

module.exports = {
  postUser,
  getUser,
  updateUser,
  modifyPassword,
  deleteUser,
  loginUser,
  validateUserMail,
  recoverPassword,
  resetPassword,
};
