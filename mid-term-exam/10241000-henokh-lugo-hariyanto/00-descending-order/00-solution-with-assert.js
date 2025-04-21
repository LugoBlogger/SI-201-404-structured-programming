import { assert } from "chai";

function descendingOrder(n) {
  // Split integers into digits using spread operators
  let digitArr = [...`${n}`];
  console.log(digitArr);

  // Use .sort() method of an array
  let sortedDigitArr = digitArr.sort();
  console.log(sortedDigitArr);

  // Use .reverse() method of an array (in-place)
  sortedDigitArr.reverse();
  console.log(sortedDigitArr);

  // Join the digits using join() method
  let descDigits = sortedDigitArr.join("");
  console.log(descDigits);

  // Turn the string into integer
  descDigits = parseInt(descDigits);
  console.log(descDigits);

  // Return the final answer
  return descDigits;
}


// Sample test
assert.strictEqual(descendingOrder(0), 0)
assert.strictEqual(descendingOrder(1), 1)
assert.strictEqual(descendingOrder(111), 111)
assert.strictEqual(descendingOrder(15), 51)
assert.strictEqual(descendingOrder(1021), 2110)
assert.strictEqual(descendingOrder(123456789), 987654321)