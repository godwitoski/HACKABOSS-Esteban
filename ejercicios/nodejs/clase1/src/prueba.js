function saludar(nombre) {
  console.log("Hola", nombre);
}

const saludar2 = (nombre) => {
  console.log("hola", nombre);
};
// saludar("pepe");
// saludar2("juanito");
const sumar = (val1, val2) => {
  return val1 + val2;
};
//console.log(sumar(12, 6));

const retornaMayor = (valores) => {
  let mayor = 0;
  for (let index = 0; index < valores.length; index++) {
    if (valores[index] > mayor) mayor = valores[index];
  }
  return mayor;
};
console.log(retornaMayor[(1, 2, 3, 4, 51, 112, 42)]);
