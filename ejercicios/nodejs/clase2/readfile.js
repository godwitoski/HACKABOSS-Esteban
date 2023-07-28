const fs = require("fs").promises;
const path = require("path");

const leerArchivo = async (file) => {
  try {
    const datos = await fs.readFile(file, "utf8"); //da un buffer
    // console.log(datos.toString());
    console.log(datos);
    return;
  } catch (error) {
    console.log(error);
  }
};

const arch = path.join(__dirname, "database/data.json");
leerArchivo(arch);
