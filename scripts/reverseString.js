// A reverseString function that takes a string and returns it reversed.
let reverseString = (text) => {
  let splitText = text.split("");
  let reverseText = splitText.reverse();
  let joinText = reverseText.join("");
  return joinText;
};

module.exports = reverseString;
