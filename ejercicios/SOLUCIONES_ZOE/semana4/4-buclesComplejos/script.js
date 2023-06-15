"use strict";

let horasDia = 24;

let inicio = 8;
let fin = 22;

for (let hora = 0; hora < horasDia; hora++) {
  let frase = `Son las ${hora}:00`;
  if (hora >= inicio && hora <= fin) {
    frase += "."; // frase = frase + .

    //let hora12 = hora % 12;
    let hora12 = hora;

    if (hora > 12) {
      hora12 = hora - 12;
    }

    for (let i = 0; i < hora12; i++) {
      frase += " CUCÚ!";
    }
  }

  console.log(frase);
}

//Forma fácil:

for (let hora = 0; hora < horasDia; hora++) {
  let frase = `Son las ${hora}:00`;
  if (hora >= 8 && hora <= 22) {
    let hora12 = hora;

    if (hora > 12) {
      hora12 = hora - 12;
    }
    frase += "." + " CUCÚ!".repeat(hora12); // frase = frase + ...
  }

  console.log(frase);
}

/* for(let i = 0; i < 10; i++){
  //logica
  for(let j = 0; j < i; i++){
    //BUCLE INFINITO!
  }
} */

for (let i = 10; i < 0; i--) {
  //Este bucle no empieza
}
