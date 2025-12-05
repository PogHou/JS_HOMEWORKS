"use strict";

const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i];
console.log("Sum=", sum);

let sumSquares = 0;
for (let i = 0; i < arr.length; i++) sumSquares += Math.pow(arr[i], 2);
console.log("Sum of squares=", sumSquares);
