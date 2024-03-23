/*
  Find all the occurrence using only Array method .find() or .findIndex().  
  This problem is formulated when I heard the presentation by the student
  related to the forEach, filter, find, and findIndex. And I challenged him
  to create it, and he succeeded to solve the problem faster and simpler than
  me. 
  The student who solved it: Arthur T.J. 10231019
 */

// let ages = [3, 10, 18, 20];
let ages = [3, 10, 1, -2, 13, 0, 5, 6, 18, 20];

let limit = 3;
let result = [];
let agesCopy = Array.from(ages)

while (agesCopy.length !== 0) {
  let idx_result = agesCopy.findIndex(elem => elem > limit);
  // console.log(idx_result);
  
  if (idx_result === undefined) {
    break;
  }

  result.push(agesCopy[idx_result])
  if (idx_result == 0) {
    agesCopy.shift();  
  } else {
    for (let j = 0; j < idx_result+1; j++) {
      agesCopy.shift();
    }
  }
  // console.log(agesCopy);
}

console.log(result);
