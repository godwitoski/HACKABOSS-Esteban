const fs = require("fs/promises");

const createStaticDir = async (staticDir) => {
  try {
    await fs.access(staticDir);
  } catch (error) {
    await fs.mkdir(staticDir);
    await fs.mkdir(`${staticDir}/avataruser`);
    await fs.mkdir(`${staticDir}/photoentries`);
  }
};

module.exports = createStaticDir;
