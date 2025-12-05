"use strict";
let a = 0;
console.log(a === 0 ? "OK" : "Not OK");
console.log(a > 0 ? "OK" : "Not OK");
console.log(a < 0 ? "OK" : "Not OK");
console.log(a >= 0 ? "OK" : "Not OK");
console.log(a <= 0 ? "OK" : "Not OK");
console.log(a !== 0 ? "OK" : "Not OK");
console.log(a === "test" ? "OK" : "Not OK");
console.log(a === "1" ? "OK" : "Not OK");
console.log(a > 0 && a < 5 ? "OK" : "Not OK");
a = a === 0 || a === 2 ? a + 7 : a / 10;
console.log("10th a=", a);

a = 0;
let b = 3;
const new11 = a <= 1 && b >= 3 ? a + b : a - b;
console.log("11th a=", new11);

a = 0;
const new12 = (a > 2 && a < 11) || (b >= 6 && b < 14);
console.log(new12 ? "OK" : "Not OK");

let num = 2;
let result = "unknown num";
switch (num) {
  case 1:
    result = "winter";
    break;
  case 2:
    result = "spring";
    break;
  case 3:
    result = "summer";
    break;
  case 4:
    result = "autumn";
    break;
}
console.log("num=", result);
