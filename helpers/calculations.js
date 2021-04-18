const getSurfaceArea = (loops) => {
  let surfaceArea = 0;

  const vertices = getVertices(loops);

  vertices.map((innerVertices) => {
    surfaceArea += getTriangleArea(innerVertices);
  });

  return parseFloat(surfaceArea.toFixed(4));
};

const getVertices = (loops) => {
  let vertices = [];
  let verticesFinal = [];

  loops.map((loop) => {
    // in tests loop is an object breifly & .match() will not work...
    loop += "";
    let digits = loop.match(/\d+\.?\d*/g);

    while (digits.length > 0) {
      vertices.push(digits.splice(0, 3));
    }
  });

  while (vertices.length > 0) {
    verticesFinal.push(vertices.splice(0, 3));
  }

  return verticesFinal;
};

const getTriangleArea = (triangle) => {
  const sideA = getLengthOfSide(triangle[0], triangle[1]);
  const sideB = getLengthOfSide(triangle[0], triangle[2]);
  const sideC = getLengthOfSide(triangle[1], triangle[2]);

  const semiperimeter = (sideA + sideB + sideC) / 2;

  return Math.sqrt(
    semiperimeter *
      (semiperimeter - sideA) *
      (semiperimeter - sideB) *
      (semiperimeter - sideC)
  );
};

const getLengthOfSide = (point1, point2) => {
  var newPoint = point1.map((item, index) => {
    return Math.pow(item - point2[index], 2);
  });

  return Math.sqrt(newPoint.reduce((a, b) => a + b, 0));
};

module.exports = {
  getSurfaceArea,
  getVertices,
  getTriangleArea,
  getLengthOfSide,
};
