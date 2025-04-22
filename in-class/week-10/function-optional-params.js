function getPropertyNames(obj, arr) {
  if (arr === undefined) {
    arr = [];
  }

  for (let property in obj) {
    arr.push(property);
  }

  return arr
}

let obj = {name: "Yasuke", studentId: 10241099};

console.log(getPropertyNames(obj));