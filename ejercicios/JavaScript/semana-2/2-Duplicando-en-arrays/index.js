const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// Escribe aquí tu código
//console.log(names);
function arrayCopy(arrayN) {
  console.log([...new Set(arrayN)]);
}

arrayCopy(names);
