const calculations = require("../helpers/calculations");

const VERTICES = [
  [
    ["0", "0", "0"],
    ["1", "0", "0"],
    ["1", "1", "1"],
  ],
  [
    ["0", "0", "0"],
    ["0", "1", "1"],
    ["1", "1", "1"],
  ],
];

const LOOPS = [
  "outer loop vertex 0 0 0 vertex 1 0 0 vertex 1 1 1 endloop",
  "outer loop vertex 0 0 0 vertex 0 1 1 vertex 1 1 1 endloop",
];

describe("calculaions", () => {
  describe("getSurfaceArea", () => {
    it("returns 1.4142 when passed LOOPS", async () => {
      expect(calculations.getSurfaceArea(LOOPS)).toBe(1.4142);
    });
  });
  describe("extractVertices", () => {
    it("returns VERTICES when passed LOOPS ", async () => {
      expect(calculations.getVertices(LOOPS)).toStrictEqual(VERTICES);
    });
  });
  describe("determineTriangleArea", () => {
    it("returns 0.707 when passed VERTICES[0]", async () => {
      expect(calculations.getTriangleArea(VERTICES[0]).toFixed(3)).toBe(
        "0.707"
      );
    });
  });
  describe("determineLengthOfSide", () => {
    it("returns 1 when passed VERTICIES[0][0] & VERTICIES[0][1]", async () => {
      expect(calculations.getLengthOfSide(VERTICES[0][0], VERTICES[0][1])).toBe(
        1
      );
    });
  });
});
