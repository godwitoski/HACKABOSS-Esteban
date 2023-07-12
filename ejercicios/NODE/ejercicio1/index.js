const prompt = require("prompt-sync")({ sigint: true });
const parseArgs = require("minimist")(process.argv);

let name;
name = parseArgs.name;
name ? console.log(`Hola ${name}`) : console.log("Hola");

let answer;
answer = prompt(`¿Que tal estás?: `);

console.log(answer);

function howAreYou(response) {
  response = response.toLowerCase();
  if (
    response === "bien" ||
    response === "muy bien" ||
    response === "genial" ||
    response === "de maravilla" ||
    response === "muy bien, gracias" ||
    response === "estupendamente" ||
    response === "guay"
  ) {
    console.log("Es genial leer eso, me alegro mucho😀😁🥰");
    return;
  } else if (
    response === "mal" ||
    response === "muy mal" ||
    response === "regular" ||
    response === "no muy bien" ||
    response === "fatal" ||
    response === "como puedo"
  ) {
    console.log(
      "Siento mucho que estés así, espero que todo mejore.😟😕 Ánimo!!!🤗"
    );
    return;
  } else {
    console.log("Lo siento, no te he entendido");
    while (response) {
      response = prompt(`Repito: ¿Que tal estás?: `);
      howAreYou(response);
      return;
    }
  }
}

howAreYou(answer);
