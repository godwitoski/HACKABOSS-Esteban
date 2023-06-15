"use strict";

// puntuaciones primera ronda

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

const totalScore = firstRound.map((name) => {
  return {
    team: name.team,
    score: name.scores.reduce((acumulator, valor) => {
      return acumulator + valor;
    }, 0),
  };
});
console.log(totalScore);
console.log(firstRound);
const teamOrdenedByScoreDesc = totalScore.sort((a, b) => b.score - a.score);
//console.log(teamOrdenedByScoreDesc);
console.log(
  `El mejor equipo es ${teamOrdenedByScoreDesc[0].team} con un total de ${teamOrdenedByScoreDesc[0].score} puntos`
);
console.log(
  `El peor equipo es ${
    teamOrdenedByScoreDesc[teamOrdenedByScoreDesc.length - 1].team
  } con un total de ${
    teamOrdenedByScoreDesc[teamOrdenedByScoreDesc.length - 1].score
  } puntos`
);
