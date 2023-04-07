const caesarCipher = require("../scripts/caesarCipher");

test("each letter in the plaintext is shifted a certain number of places down the alphabet", () => {
  expect(
    caesarCipher("defend the east wall of the castle", 1)).toMatch
      ("efgfoe uif fbtu xbmm pg uif dbtumf")
    
  expect(
    caesarCipher("defend the east wall of the castle%*#", 15)).toMatch
      ("stutcs iwt tphi lpaa du iwt rphiat%*#")
    
  expect(
    caesarCipher("defend the east wall12 of the castle", 1)).toMatch
      ("efgfoe uif fbtu xbmm12 pg uif dbtumf")
    
  
});



