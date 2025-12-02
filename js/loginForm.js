"use strict";
const emailInput = prompt("Enter email");
const passwordInput = prompt("Enter password");
const isEmailVerifiedInput = prompt("Are you sure? (yes/no)");

const email = emailInput ? emailInput.trim() : "";
const password = passwordInput ? passwordInput.trim() : "";
const isEmailVerified = isEmailVerifiedInput.toLowerCase() === "yes";
const isEmailFilled = email !== "";
const isPasswordFilled = password !== "";

const canLogin = isEmailFilled && isPasswordFilled && isEmailVerified;

if (canLogin) {
  console.log("Successfully logged in");
  alert("Successfully logged in");
} else {
  console.log("Check your data");
  alert("Check your data");
}
