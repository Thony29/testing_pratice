const analyzeArray = require("../scripts/analyzeArray");

test("returns an object with the following properties: average, min, max, and length", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
