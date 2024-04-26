function print(s) { console.log(...s); };
let result;

let now = new Date();
print(["now: ", now])

let epochs = new Date(0);
print(["epoch: ", epochs])

let century = new Date(2100, 0, 1, 2, 3, 4, 5);  // in UTC   
print(["century: ", century]);

century = new Date(Date.UTC(2100, 0, 1));
print(["century: ", century]);
print(["century.toString(): ", century.toString()]);
print(["century.toUTCString(): ", century.toUTCString()]);
print(["century.toISOString(): ", century.toISOString()]);

console.log();
century = new Date("2100-01-01T00:00:00Z");   
print(["century.toISOString(): ", century.toISOString()]);