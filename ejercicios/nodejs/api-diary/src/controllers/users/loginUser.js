const getDB = require("../../database/db");
const jwt = require("jsonwebtoken"); //accedemos a jsonwebtoken que instalamos con npm

const loginUser = async (req, res) => {
  try {
    const connect = await getDB();

    const { email, pwd } = req.body;

    if (!email || !pwd) return res.status(400).send("Faltan datos");

    //comprobamos que el usuario existe y que la pwd sea correcta y corresponda a ese mail
    const [user] = await connect.query(
      `
        SELECT id ,role,active
        FROM users 
        WHERE email=? AND password=SHA2(?,512)
        `,
      [email, pwd]
    );
    if (!user.length) {
      return res.status(404).send("Usuario o contraseña incorrecta");
    }

    // //jsonwebtoken
    //body --creamos el body- ya que si llega acá ha pasado la validacion
    const info = {
      id: user[0].id,
      role: user[0].role,
    };
    //generamos el token con el metodo sign, el cual recibe como argumentos --> obj con la info(body o payload), palabra secreta (.env.SECRET_TOKEN)  ... Y recibe un vencimiento 10d, 1d, 30m, 60m
    const token = jwt.sign(info, process.env.SECRET_TOKEN, { expiresIn: "1d" });

    connect.release();

    res.status(200).send({
      status: "OK",
      messege: "Login",
      data: {
        token,
      },
    });
    //res.send(token);
  } catch (error) {
    console.log(error);
  }
};
module.exports = loginUser;
