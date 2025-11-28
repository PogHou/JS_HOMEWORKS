"use strict";
//1st part
const userAge = prompt("What's your age?");
if (userAge === null || userAge.trim() === "") {
  alert("Incorrect age!");
} else {
  const age = Number(userAge);

  if (isNaN(age)) {
    alert("Incorrect age!");
  } else {
    alert(`In 5 years you will be: ${age + 5}`);
  }
}
//2nd part
const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";

console.log(
  `"${price1}" -> parseInt: ${parseInt(price1)}, parseFloat: ${parseFloat(price1)}`,
); //"120.50$" -> parseInt: 120 (was taken integer only), parseFloat: 120.5 (take digital, without symbols)
console.log(
  `"${price2}" -> parseInt: ${parseInt(price2)}, parseFloat: ${parseFloat(price2)}`,
); //"UAH 999" -> parseInt: NaN (because of letters), parseFloat: NaN (because of letters)
console.log(
  `"${height}" -> parseInt: ${parseInt(height)}, parseFloat: ${parseFloat(height)}`,
); //"180cm" -> parseInt: 180 (take integer like in the 1st example), parseFloat: 180 (take digital like in the 1st example)
console.log(
  `"${broken}" -> parseInt: ${parseInt(broken)}, parseFloat: ${parseFloat(broken)}`,
); //"abc123" -> parseInt: NaN (because of letters, like in the 2nd example), parseFloat: NaN (because of letters, like in the 2nd example)
