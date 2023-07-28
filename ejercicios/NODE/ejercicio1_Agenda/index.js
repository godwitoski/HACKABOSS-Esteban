// Escribe tu código a continuación

const fs = require("fs");
const minimist = require("minimist")(process.argv.slice(2));
//console.log(minimist["list-events"]);

function createFileAndModificate(file) {
  if (minimist["list-events"]) {
    console.log("Lista de eventos:");
    const fileToRead = fs.readFileSync(file);
    let fileParse = JSON.parse(fileToRead);

    Object.keys(fileParse)
      .map((key) => ({ key: key, value: fileParse[key] }))
      .sort((first, second) =>
        first.value.date > second.value.date
          ? -1
          : first.value.date < second.value.date
          ? 1
          : 0
      )
      .forEach((sortedData) =>
        console.log(`📅 ${sortedData.value.date}: ${sortedData.value.event}`)
      );
  }

  if (!minimist["list-events"]) {
    if (minimist.event && minimist.date ? minimist.date : minimist.data) {
      //creamos la ruta del archivo
      file = `${__dirname}/${file}`;
      let jsonFile = JSON.stringify([]);
      //valores de la fecha y evento
      const dateEvent = minimist.date ? minimist.date : minimist.data;
      const event = minimist.event;
      //comprobamos que si existe el archivo, actualice, leyendo y haciendo push
      try {
        fs.accessSync(file);
        addEvent(dateEvent, event, file);
        console.log("Tengo acceso al archivo, voy a modificarlo");
      } catch {
        //si no existe lo creamos con el valor inicial
        const inicialData = {
          date: dateEvent,
          event: event,
        };
        jsonFile = JSON.parse(jsonFile);
        jsonFile.push(inicialData);
        const eventJson = JSON.stringify(jsonFile);
        fs.writeFileSync(file, eventJson, (err) => {
          if (err) {
            console.log("Error en la creacion");
          }
        });
        console.log("No tengo acceso al archivo, lo voy a crear");
      }
    } else {
      console.log("Parámetro inexperado");
    }
  }
}

//añadimos evento, para eso leemos el archivo para guardar sus datos
function addEvent(dateEvent, event, file) {
  try {
    const eventList = {
      date: dateEvent,
      event: event,
    };
    const dataJSON = fs.readFileSync(file);
    let dataParse = JSON.parse(dataJSON);
    dataParse.push(eventList);
    let newjsonEvent = JSON.stringify(dataParse);
    fs.writeFileSync(file, newjsonEvent, (err) => {
      if (err) {
        throw new Error("Error al añadir");
      }
      console.log("Evento añadido");
    });
  } catch (error) {
    console.log("error");
  }
}

createFileAndModificate(`events.json`);
