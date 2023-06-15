"use strict";
function quiz() {
  // Escribe aquí tu código
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  let numeroIntroducido;
  numeroIntroducido = parseInt(prompt("Introduce un numero del 0 al 100"));

  let oportunidad = 5;

  if (isNaN(numeroIntroducido)) {
    alert("Lo siento, No has introducido valor válido");
  } else if (numeroIntroducido >= 0 && numeroIntroducido <= 100) {
    for (let i = 1; i < oportunidad; i++) {
      if (randomNumber === numeroIntroducido) {
        alert("Felicidades, has ganado");
        return;
      } else if (
        isNaN(numeroIntroducido) ||
        numeroIntroducido < 0 ||
        numeroIntroducido > 100
      ) {
        alert("Lo siento, no has introducido valor válido, vuelve a probar");
        numeroIntroducido = parseInt(
          prompt(
            "Tienes otra oportunidad para adivinar.Recuerda que es del 0 al 100"
          )
        );
      } else if (randomNumber < numeroIntroducido) {
        alert("El numero introducido es mayor al que tiene que adivinar");
        numeroIntroducido = parseInt(
          prompt(
            "Tienes otra oportunidad para adivinar.Recuerda que es del 0 al 100"
          )
        );
      } else {
        alert("El numero introducido es menor al que tiene que adivinar");
        numeroIntroducido = parseInt(
          prompt(
            "Tienes otra oportunidad para adivinar.Recuerda que es del 0 al 100"
          )
        );
      }
    }
    alert("Lo siento, has perdido");
  } else {
    alert("Valor no válido. Era del 0 al 100");
  }

  //----
  // -----------Otro método. No tan complejo, Fue mi primera versión
  //----
  // let oportunidades = 1;
  // while (oportunidades < 5) {
  //   if (randomNumber === numeroIntroducido) {
  //     alert("Felicidades, has ganado");
  //     return;
  //   } else if (
  //     isNaN(numeroIntroducido) ||
  //     numeroIntroducido < 0 ||
  //     numeroIntroducido > 100
  //   ) {
  //     alert("Lo siento, no has introducido valor válido, vuelve a probar");
  //     numeroIntroducido = parseInt(
  //       prompt("Tienes otra oportunidad para adivinar. Del 0 al 100")
  //     );
  //   } else if (randomNumber < numeroIntroducido) {
  //     alert("El numero introducido es mayor al que tiene que adivinar");
  //     numeroIntroducido = parseInt(
  //       prompt("Tienes otra oportunidad para adivinar. Del 0 al 100")
  //     );
  //   } else {
  //     alert("El numero introducido es menor al que tiene que adivinar");
  //     numeroIntroducido = parseInt(
  //       prompt("Tienes otra oportunidad para adivinar. Del 0 al 100")
  //     );
  //   }
  //   oportunidades++;
  // }

  // alert("Lo siento, has perdido");
}
quiz();
