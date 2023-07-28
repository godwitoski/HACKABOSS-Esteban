// Escribe tu código a continuación
const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");
const img = process.argv[2];
//console.log(img);
async function createPathIfNotExists(path) {
  try {
    await fs.access(path);
  } catch {
    await fs.mkdir(path);
  }
}

async function processImage(img, outputDir = "/samples") {
  try {
    const inputPath = path.resolve(__dirname);
    const outputPath = path.resolve(__dirname + outputDir);
    //Creamos samples si no existe
    await createPathIfNotExists(outputPath);

    if (img) {
      //ruta completa de la img
      console.log("imagen procesada", img);
      const imgPath = path.resolve(inputPath + "/" + img);
      //cargamos la imagen
      const image = sharp(imgPath);
      //-----Entendiendo que solo hay que cambiar el ancho, sin variar la altura por defecto, sería así, aunque se vea cortada
      const metadata = await image.metadata();
      const defaultHeight = metadata.height;
      //resize de la img
      const img500 = image.resize(500, defaultHeight);
      await img500.toFile(path.resolve(outputPath, `New500_${img}`));

      const img200 = image.resize(200, defaultHeight);
      await img200.toFile(path.resolve(outputPath, `New200_${img}`));
      const img500BlackAndWhite = image
        .resize(500, defaultHeight)
        .tint({ r: 87, g: 87, b: 87 });
      await img500BlackAndWhite.toFile(
        path.resolve(outputPath, `New500BlackAndWhite_${img}`)
      );
    } else {
      throw new Error("No encuentro el archivo");
    }
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}
processImage(img);
