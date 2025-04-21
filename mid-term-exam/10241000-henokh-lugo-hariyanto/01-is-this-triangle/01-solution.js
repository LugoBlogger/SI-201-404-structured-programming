function isTriangle(a,b,c) {
  // In the beginning assume the `false` for the status of a the triangle
  let status = false;
  
  // All sides length must be positive (> 0) 
  if (a > 0 && b > 0 && c > 0) { 
    status = true;
  }
  
  // The surface area of triangle is greater than zero
  // this means that one of the sides must have a length  
  // strictly less than the sum of the two other sides.
  if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
    status = false;
  }
  
  return status;
}

// You can put the test cases here
console.log("1, 2, 2", isTriangle(1, 2, 2));
console.log("7, 2, 2", isTriangle(7, 2, 2));
