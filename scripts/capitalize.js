//A capitalize function that takes a string and returns it with the first character capitalized.

let capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};


module.exports = capitalize;
