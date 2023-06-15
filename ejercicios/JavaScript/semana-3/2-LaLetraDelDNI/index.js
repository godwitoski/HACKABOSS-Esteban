"use strict";

function validateDNI(dni) {
  // escribe aquí tu código
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  if (dni.length !== 10 || !dni.includes("-")) {
    throw Error("Se ha producido un error: Introduce un DNI válido");
  } else {
    const dniSeparado = dni.split("-");
    const numeroDni = dniSeparado[0];
    const letraDni = dniSeparado[1];
    for (let num of numeroDni) {
      num = +num;
      if (isNaN(num)) {
        throw Error("Se ha producido un error: Algún dígito no es número");
      }
    }
    const posicionInLetra = parseInt(numeroDni) % 23;
    // //console.log(posicionInLetra);
    if (!isNaN(+letraDni)) {
      throw Error(
        "Se ha producido un error: El último dígito tiene que ser una letra"
      );
    }
    if (letraDni.toUpperCase() != letras[posicionInLetra]) {
      throw Error("Se ha producido un error: Letra incorrecta");
    }

    console.log("Todo correcto: DNI válido");
  }
}
try {
  validateDNI("00000000-T");
} catch (error) {
  console.log(error);
}
// Nota: probaremos con varios números de DNI tanto válidos como no válidos

/**
 *Para obtener la letra correspondiente a un número de DNI hay que obtener el resto (en la documentación de JavaScript puedes buscar el operador aritmético para calcular el resto)** **de la división del número entre 23. Ese resto será un número entre 0 y 22. Si usamos ese número como índice en el siguiente Array la letra será la correspondiente a ese índice:
 * 
 * 
 * 
 *  Lo que se ha introducido es un String con 10 caracteres (los 8 números, el guión y la letra).

Si separamos el String por el guión tendremos dos partes:

La primera parte (antes del guion) debe tener 8 números.

La segunda parte (después del guion) debe ser un único caracter y no un número.

La letra (segunda parte) debe ser la correcta según el algoritmo explicado anteriormente.

Si se cumplen todas las comprobaciones, se mostrará un mensaje en consola indicando que es un DNI válido.


 */
