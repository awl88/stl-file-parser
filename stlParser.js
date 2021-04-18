const parse = require("./parse.js");
const filename = process.argv[2];

const runApp = async (file) => {
  const [t, s] = await parse.parseStl(file);

  console.log("Number of Triangles: ", t + "\nSurface Area: ", s);
};

runApp(filename);
