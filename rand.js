let iterator = require("@stdlib/random/iter/uniform")

let iter = iterator(0., 1., {
  "seed": 24_01_24});

// Generate pseudorandom numbers, thus progressing the generator state:
for (let i = 0; i < 46; i++) {
  console.log(iter.next().value);
}
