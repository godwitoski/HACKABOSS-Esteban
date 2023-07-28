const data = require("./datos.json");

const mostrarDatos = () => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

const getMayor = () => {
  let mayor = data[0].edad;
  for (let i = 0; i < data.length; i++) {
    if (data[i].edad > mayor) {
      mayor = data[i];
    }
  }
  return mayor;
};

module.exports = {
  mostrarDatos,
  getMayor,
};
