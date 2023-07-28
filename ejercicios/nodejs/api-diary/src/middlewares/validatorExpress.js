const { body } = require("express-validator"); //traemos el body

const validatorExpress = () => {
  try {
    return [
      body("mail")
        .trim()
        .notEmpty()
        .withMessage("El mail es requerido") //mail porque es como se lo pasamos
        .isEmail()
        .withMessage("Debe poner un mail valido"),

      body("pwd")
        .trim()
        .notEmpty()
        .withMessage("Password es requerida")
        .isLength({ min: 6 })
        .withMessage("Password invalida"), //minimo 6 caracteres
    ];
  } catch (error) {
    console.log(error);
  }
};

module.exports = validatorExpress;
