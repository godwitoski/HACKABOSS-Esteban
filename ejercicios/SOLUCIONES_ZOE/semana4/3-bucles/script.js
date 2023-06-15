"use strict";

// Edita el archivo index.js para crear un bucle que imprima en la consola una línea por cada hora del día en formato 24 horas, de 0:00 a 23:00:

let horasDia = 24;

console.log(`OPCION 1:

`);

for (let hora = 0; hora < horasDia; hora++) {
  if (hora < 8 || hora > 22) {
    console.log(`Son las ${hora}:00`);
  } else {
    console.log(`Son las ${hora}:00, CUCÚ!`);
  }
}

console.log(`

OPCION 2:

`);

for (let hora = 0; hora < horasDia; hora++) {
  let frase = `Son las ${hora}:00`;
  if (hora >= 8 && hora <= 22) {
    frase += ", CUCÚ!"; // frase = frase + ...
  }

  console.log(frase);
}

console.log(`

OPCION 3:

`);

//Spoiler: condicional ternario

for (let hora = 0; hora < horasDia; hora++) {
  console.log(`Son las ${hora}:00${hora >= 8 && hora <= 22 ? ", CUCÚ!" : ""}`);
}
