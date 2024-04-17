// install the stdlib/random with the following command
// $ npm install @stdlib/random

let sample = require("@stdlib/random/sample")

let sample_factory = sample.factory(
  {"seed": 24_01_24});

let arr = [1, 2, 3, 4, 5];
let output = sample_factory(
  arr, {"size": 20});

console.log(output);
