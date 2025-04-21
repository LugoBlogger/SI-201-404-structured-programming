var countBits = function(n) {
  
  // Turn integers into its binary using .toString(2)
  let binString = n.toString(2) ;
  console.log(binString);

  // count the number 1 in binString
  let countOne = 0;
  for (let idx = 0; idx < binString.length; idx++) {
    if (binString[idx] === "1") {
      countOne += 1;
    }
  }
 console.log(countOne) ;

 return countOne;
};

countBits(10);