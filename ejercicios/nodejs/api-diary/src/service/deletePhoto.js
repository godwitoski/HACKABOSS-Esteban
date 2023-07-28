const fs = require("fs/promises");
const path = require("path");

const deletePhoto = async (photo, directorio) => {
  const dir = process.env.UPLOADS_DIRECTORY;
  const photoPath = path.join(__dirname, dir + directorio, photo);

  await fs.unlink(photoPath);
};
module.exports = deletePhoto;
