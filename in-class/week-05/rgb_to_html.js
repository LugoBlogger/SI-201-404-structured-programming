const prompt = require("prompt-sync")();

const red = prompt("RGB red: ");
const green = prompt("RGB green: ");
const blue = prompt("RGB blue: ");

let rgb_hex = red << 16 | green << 8 | blue;
console.log(`rgb_hex_bool:  ${rgb_hex}`);
console.log(`rgb_hex: ${rgb_hex.toString(16)}`);