import format from "@stdlib/string-format"

let data = [1, 1, 3, 3, 5, 7, 7, 9, 9];

let total = 0;
for (let i = 0; i < data.length; i++) {
  total += data[i];
}
let mean = total / data.length;

total = 0;
for (let i = 0; i < data.length; i++) {
  let deviation = data[i] - mean;
  total += deviation * deviation;
}
let stddev = Math.sqrt(total/(data.length - 1));
console.log(format('%.2f', stddev));  
