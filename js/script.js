"use strict";
const userName = prompt("Enter your name");
const userAge = prompt("Enter your age");
const userCity = prompt("Enter your city");
const jsAnswer = prompt("Do you love JavaScript? Type yes or no.");

const age = Number(userAge);

let lovesJS;

if (jsAnswer.toLowerCase() === "yes") {
  lovesJS = true;
} else {
  lovesJS = false;
}

let userAttitude;

if (lovesJS) {
  userAttitude = "Absolutely loves JS";
} else {
  userAttitude = "Can't stand JS";
}

alert(`Ola, ${userName}! You are ${age}, you are from ${userCity} city. 
Attitude to JavaScript: ${userAttitude}.`);
