const sym1 = Symbol("3");
const sym2 = Symbol("3");

let obj = {};
obj.a = 2;
obj['2'] = 4;
obj[sym1] = 6;
obj[sym2] = 8;
obj[Symbol("3")] = 10;
// console.log(obj);

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));