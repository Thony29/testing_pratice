// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

let analyzeArray = (array) => {
  let average = array.reduce((a, b) => a + b, 0) / array.length;

  let min = Math.min(...array)

  let max = Math.max(...array)

  let length = array.length;
  return {
    average: average,
    min:min,
    max:max,
    length:length
  };
};

let arr = [1, 8, 3, 4, 2, 6];
console.log(analyzeArray(arr));
module.exports = analyzeArray;
