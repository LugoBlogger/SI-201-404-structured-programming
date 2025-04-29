import { assert } from "chai";

function zero(arg) { return (arg != undefined) ? arg[0](0, arg[1]) : 0}
function one(arg) { return (arg != undefined) ? arg[0](1, arg[1]) : 1}
function two(arg) { return (arg != undefined) ? arg[0](2, arg[1]) : 2}
function three(arg) { return (arg != undefined) ? arg[0](3, arg[1]) : 3}
function four(arg) { return (arg != undefined) ? arg[0](4, arg[1]) : 4}
function five(arg) {  return (arg != undefined) ? arg[0](5, arg[1]) : 5}
function six(arg) { return (arg != undefined) ? arg[0](6, arg[1]) : 6}
function seven(arg) { return (arg != undefined) ? arg[0](7, arg[1]) : 7}
function eight(arg) { return (arg != undefined) ? arg[0](8, arg[1]) : 8}
function nine(arg) { return (arg != undefined) ? arg[0](9, arg[1]) : 9}


function plus(a, b) { return (b === undefined) ? [plus, a] : a+b}
function minus(a, b) { return (b === undefined) ? [minus, a] : a-b} 
function times(a, b) { return (b === undefined) ? [times, a] : a*b}
function dividedBy(a, b) { return (b === undefined) ? [dividedBy, a] : Math.floor(a/b)}


// console.log(five(times(seven())));
// console.log(seven(times(five())));
// console.log(four(plus(nine())));
// console.log(nine(plus(four())));
// console.log(eight(minus(three())));
// console.log(three(minus(eight())));
// console.log(six(dividedBy(two())));
// console.log(two(dividedBy(six())));
// console.log(eight(dividedBy(three())));
// console.log(three(dividedBy(eight())));