const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",

  "peperoni",
  "tropical",
];

function combine(pizzas) {
  const combinations = [];
  // Escribe aquí tu código
  for (let i = 0; i < pizzas.length; i++) {
    for (let j = i + 1; j < pizzas.length; j++) {
      const pizza1 = pizzas[i];
      const pizza2 = pizzas[j];
      //console.log(pizza1, pizza2);

      combinations.push(`${pizza1} y ${pizza2}`);
    }
  }

  return combinations;
}

console.log(combine(pizzas));

// });
// console.log(combinations);

// [
//   "margarita y cuatro quesos",
//   "margarita y prosciutto",
//   "margarita y carbonara",
//   "margarita y barbacoa",
//   "margarita y tropical",
//   "cuatro quesos y prosciutto",
//   "cuatro quesos y carbonara",
//   "cuatro quesos y barbacoa",
//   "cuatro quesos y tropical",
//   "prosciutto y carbonara",
//   "prosciutto y barbacoa",
//   "prosciutto y tropical",
//   "carbonara y barbacoa",
//   "carbonara y tropical",
//   "barbacoa y tropical",
// ];
