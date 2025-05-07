// install the @stdlib/random-sample with the following command
// $ npm install @stdlib/random-sample

// A new import syntax using import format from '@stdlib/random-sample'.
// Set also `packages.json`
// let sample = require("@stdlib/random/sample")
import sample from "@stdlib/random-sample";

let sample_factory = sample.factory(
  // {"seed": 24_05_13});
  {"seed": 25_05_07});

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [];
for (let idx = 1; idx < 35; idx++) {
  arr.push(idx);
}

let output = sample_factory(
  // arr, {"size": 20});
  arr, {replace: false} );

// console.log(output);
for (let elem of output) {
  console.log(elem);
}
