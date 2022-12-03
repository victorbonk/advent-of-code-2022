
const fs = require('fs');

const fileContents = fs.readFileSync('./input.txt').toString().split("\n");

let max = 0;
let second = 0;
let third = 0;
let count = 0;

fileContents.forEach((calories) => {
  if (calories.length === 0) {
    // console.log(count);
    if (max <= count) {
      third = second;
      second = max;
      max = count;
    } else if (second <= count) {
      third = second;
      second = count;
    } else if (third <= count) {
      third = count;
    }

    // max = Math.max(max, count);
    count = 0;
  } else {
    count += parseInt(calories);
  }
});

console.log(max);
console.log(second);
console.log(third);

console.log(max + second + third);
