const calculation = require("../scripts/calculator");

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
  expect(4 - 2).toBe(2);
  expect(4 / 2).toBe(2);
  expect(2 * 2).toBe(4);
});
