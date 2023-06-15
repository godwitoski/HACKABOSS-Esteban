"use strict";

let dias = 0;
let horas = 0;
let minutos = 0;
let segundos = 0;
let intervaloTiempoMiliseg = 5000;
let ejecucionPrograma = function () {
  segundos += intervaloTiempoMiliseg / 1000;
  console.log(
    `Han pasado ${dias} ${dias === 1 ? "día" : "días"}, ${horas} ${
      horas === 1 ? "hora" : "horas"
    } y ${minutos} ${minutos === 1 ? "minuto" : "minutos"}, ${segundos} ${
      segundos === 1 ? "segundo" : "segundos"
    } desde la ejecución del programa `
  );
  if (segundos >= 60) {
    segundos = 0;
    minutos += 1;
    if (minutos >= 60) {
      minutos = 0;
      horas += 1;
      if (horas >= 24) {
        horas = 0;
        dias += 1;
      }
    }
  }
};

let intTemporizador = setInterval(ejecucionPrograma, intervaloTiempoMiliseg);

function pararPrograma(num, letra) {
  let tiempoParada = 0;
  //pasamos a milisegundos y lanzamos el clear con ese tiempo
  letra === "S" ? (tiempoParada = num * 1000) : undefined;
  letra === "M" ? (tiempoParada = num * 1000 * 60) : undefined;
  letra === "H" ? (tiempoParada = num * 1000 * 3600) : undefined;
  letra === "D" ? (tiempoParada = num * 1000 * 86400) : undefined;

  setTimeout(() => {
    clearInterval(intTemporizador);
    console.log("El programa se ha parado correctamente");
  }, tiempoParada);
}
pararPrograma(2, "M");
