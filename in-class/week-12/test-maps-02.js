let m = new Map([
  ['name', 'Yasuke'],
  ['studentId', '10221099'],
  ['gpa', 3.14],
  ['cumulCP', 48]
]);

// console.log(m);

// read 
console.log("Read m.get('gpa')", m.get('gpa'));

// write/set
console.log("Write/Set m.set('gpa', 3.24)");
m.set('gpa', 3.24)
console.log("  m: ", m);

// delete
console.log("Delete m.delete('cumulCP')");
m.delete('cumulCP');
console.log("  m: ", m);

// add
console.log("Add m.add('sk2pm', 800)");
m.set('sk2pm', 800);
console.log("  m: ", m);

console.log(m.get('sk2pm'));  // we cannot use accessing element with indexing []
                              // for example m['sk2pm'].