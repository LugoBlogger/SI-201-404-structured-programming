function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make);    // "Honda"
myFunc(mycar);    
console.log(mycar.make);    // "Toyota" 