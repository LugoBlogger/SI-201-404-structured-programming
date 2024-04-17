// install the stdlib/random with the following command
// $ npm install @stdlib/random

let iterator = require("@stdlib/random/iter/uniform")

let iter = iterator(0., 1., {
  "seed": 24_01_24});

// Generate pseudorandom numbers, thus progressing the generator state:
let rand_num = [];
for (let i = 0; i < 46; i++) {
  // console.log(iter.next().value);
  rand_num.push(iter.next().value)
}

console.log(rand_num);
