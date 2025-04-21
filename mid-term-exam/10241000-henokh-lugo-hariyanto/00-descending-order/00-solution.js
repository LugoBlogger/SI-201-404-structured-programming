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

// You can put the test cases as many as you want
descendingOrder(15);