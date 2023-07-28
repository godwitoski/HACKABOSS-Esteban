/**
 * Crear la conexion a la base de datos.
 * Esta funcion será requeria da vez que se quiera acceder a la base de datos para crear,editar,borrar o leer datos almacenados
 */

//
const mysql = require("mysql2/promise"); //acceso a base de datos como promise

//instalamos dotenv con npm i
require("dotenv").config(); //requerir el archivo-- se necesita un modulo de mysql2 -->npm i mysql2

const { HOST, USER, PASSWORD, DATABASE } = process.env; //traemos las credenciales

let pool;

const getDB = async () => {
  if (!pool) {
    //creamos el pool si no está creado para retornar la conexion
    pool = mysql.createPool({
      connectionLimit: 10,
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
    });
  }
  //retorno la conexion
  return await pool.getConnection();
};

module.exports = getDB;
