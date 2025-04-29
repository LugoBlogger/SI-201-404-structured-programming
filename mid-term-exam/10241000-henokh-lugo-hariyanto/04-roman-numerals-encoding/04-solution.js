function solution(number){
  // convert the number to a roman numeral
  let digits = [...number.toString()];
  // console.log(digits);
 
  let romanArr = [];
  let roman, tempDigit;
  for (let idx = 0; idx < digits.length; idx++) {
    if (digits[idx] > 0) {
      tempDigit = digits[idx]*10**(digits.length-1-idx);
      // console.log(tempDigit);

      // find the interval under 1000
      if (tempDigit >= 1 && tempDigit < 4) {
        roman = "I".repeat(tempDigit);
      } else if (tempDigit === 4) {
        roman = "IV";
      } else if (tempDigit === 5) {
        roman = "V";
      } else if (tempDigit > 5 && tempDigit < 9) {
        roman = "V"+"I".repeat(tempDigit-5);
      } else if (tempDigit === 9) {
        roman = "IX";
      } else if (tempDigit >= 10 && tempDigit < 40) {
        roman = "X".repeat(tempDigit/10);
      } else if (tempDigit === 40) {
        roman = "XL";
      } else if (tempDigit === 50) {
        roman = "L";
      } else if (tempDigit > 50 && tempDigit < 90) {
        roman = "L" + "X".repeat((tempDigit-50)/10);
      } else if (tempDigit === 90) {
        roman = "XC";
      } else if (tempDigit >= 100 && tempDigit < 400) {
        roman = "C".repeat(tempDigit/100);
      } else if (tempDigit == 400) {
        roman = "CD";
      } else if (tempDigit === 500) {
        roman = "D";
      } else if (tempDigit > 500 && tempDigit < 900) {
        roman = "D" + "C".repeat((tempDigit - 500)/100);
      } else if (tempDigit === 900) {
        roman = "CM";
      } else if (tempDigit >= 1000) {
        roman = "M".repeat(tempDigit/1000);
      }
      
      // console.log("roman", roman);
      romanArr.push(roman);
    }
  }
  // console.log(romanArr);

  return romanArr.join("");
}

console.log(solution(1660));
// solution(3000)
// solution(1900);
console.log(solution(1800));
// solution(3660);
// solution(3760);
// solution(3860);
// solution(3960);