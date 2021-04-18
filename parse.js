const fs = require("fs").promises;
const calculations = require("./helpers/calculations");

const parseStl = async (file) => {
  const fileContents = await fs.readFile(file, "utf8").catch((e) => {
    throw e;
  });

  const loops = fileContents.match(/outer loop[\s\S]*?endloop/g);

  const triangleCount = loops.length;
  const surfaceArea = calculations.getSurfaceArea(loops);

  return [triangleCount, surfaceArea];
};

module.exports = {
  parseStl,
};
