"use strict";
const userAge = prompt("Enter your age");
if (userAge === null || userAge === "") {
  alert("Age not specified");
} else {
  const age = Number(userAge);
  if (Number.isNaN(age) || age < 0) {
    alert("Wrong age");
  } else if (age < 18) {
    const hasAdult = confirm(
      "You're under 18. Is there an adult with you who allows you to watch?",
    );
    if (hasAdult) {
      alert("Access allowed with adult permission");
    } else {
      alert("Access is denied");
    }
  } else {
    alert("Access allowed. Enjoy watching");
  }
}
