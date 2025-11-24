"use strict";
const userName = prompt("Type your name, amigo");
if (userName) {
  const greet = confirm("press OK to see the greeting");
  if (greet) {
    alert(`Welcome, ${userName}, pleased to see you`);
  }
}
