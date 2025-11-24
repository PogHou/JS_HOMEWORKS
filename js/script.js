"use strict";
const productPrice = prompt("What is the product price?");
const productDiscount = prompt(
  "What is the discount on the goods, in percentage?",
);
const price = Number(productPrice);
const discount = Number(productDiscount);
if (
  Number.isNaN(price) ||
  Number.isNaN(discount) ||
  price < 0 ||
  discount < 0
) {
  alert("Type error");
} else {
  const calculation = price - (price * discount) / 100;
  alert(
    `The start price is ${price}, your discount is ${discount}, the finally price for you is ${calculation}`,
  );
}
