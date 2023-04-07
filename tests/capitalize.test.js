const capitalize = require("../scripts/capitalize.js");

test("capitalize the first character", () => {
  expect(capitalize("good")).toMatch("Good");
});
