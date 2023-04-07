const reverseString = require("../scripts/reverseString.js");


test("reverse the string", () => {
    expect(reverseString("elon")).toMatch("nole");
  });
  