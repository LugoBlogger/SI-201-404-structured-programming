import format from "@stdlib/string-format"

const map = function(arr, callbackFunc) { 
  return arr.map(callbackFunc); };
const reduce = function(arr, callbackFunc) { 
  return arr.reduce(callbackFunc); };

const sum = (x, y) => x + y;
const square = x => x * x;

let data = [1, 1, 3, 3, 5, 7, 7, 9, 9];
let mean = reduce(data, sum)/data.length;
let deviations = map(data, x => x - mean);
let stddev = Math.sqrt(
  reduce(map(deviations, square), sum)/(data.length - 1));
console.log(format("%.2f", stddev));
