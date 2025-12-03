"use strict";
"use strict";
const user = {
  name: "Alex",
  age: 20,
  email: "alex@example.com",
  isSubscribed: true,
  balance: "150.25",
  verified: "1",
};
const numericBalance = Number(user.balance);
const isVerified = user.verified === "1";
const hasAccess =
  user.age >= 18 && isVerified && (user.isSubscribed || numericBalance > 0);
const ageLooseCompare = user.age == String(user.age);
const ageStrictCompare = user.age === String(user.age);
console.log("Numeric balance:", numericBalance);
console.log("Is verified:", isVerified);
console.log("Has access:", hasAccess);
console.log("Loose compare (==):", ageLooseCompare);
console.log("Strict compare (===):", ageStrictCompare);

const accessMessage = user.age < 18 ? "Access restricted due to age" : "";
console.log("Message:", accessMessage);
