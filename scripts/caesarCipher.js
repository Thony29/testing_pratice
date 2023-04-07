// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

let caesarCipher = (text, shift) => {
  shift = shift % 26;
  let lowerCaseText = text.toLowerCase();
  let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  let decrypted = "";

//   let symbols = "`~!@#$%^&*()_+-=[{]}|;:'/?.>,<".split("");
  

  for (let i = 0; i < lowerCaseText.length; i++) {
    let currentLetter = lowerCaseText[i];

    if (currentLetter === " ") {
      decrypted += currentLetter;
      continue;
    } else if(currentLetter === symbols){
        decrypted +=symbols
    }


//symbols--------------
    // for (let i = 0; i < symbols.length; i++) {
    //   let symb = symbols[i];
  
    //   if (currentLetter === symb) {
     
    //     decrypted += symb;

    //     continue;
    //   }
    // }

    let currentIndex = alphabetArray.indexOf(currentLetter);
    let newIndex = currentIndex + shift;

    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (text[i] === text[i].toUpperCase()) {
      decrypted += alphabetArray[newIndex].toUpperCase();
    } else decrypted += alphabetArray[newIndex];
  }
  //

  return decrypted;
};

console.log(caesarCipher("defend the east wall of the castle", 15)); // stutcs iwt tphi lpaa du iwt rphiat

module.exports = caesarCipher;
