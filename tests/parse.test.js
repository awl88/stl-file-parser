const parse = require("../parse.js");

const SIMPLE_PART = "./files/SimplePart.stl";
const MOON = "./files/Moon.stl";

describe("STL Parser", () => {
  describe("SimplePart", () => {
    it("has 2 triangles and surface area of 1.4142", async () => {
      const [triangleCount, surfaceArea] = await parse.parseStl(SIMPLE_PART);
      expect(triangleCount).toBe(2);
      expect(surfaceArea).toBe(1.4142);
    });
  });

  describe("Moon", () => {
    it("has 116 triangles and surface area of 7.7726", async () => {
      const [triangleCount, surfaceArea] = await parse.parseStl(MOON);
      expect(triangleCount).toBe(116);
      expect(surfaceArea).toBe(7.7726);
    });
  });

  describe("Bad data", () => {
    it("throws error", () => {
      expect(() => {
        parse.parseStl("");
      }).toThrowError;
    });
  });
});
