"use strict";
const cartTotalInput = prompt("Enter the sum in your shopping cart");
const hasPromoInput = prompt("Do you have a promocode (yes/no)?");
const isBlackFridayInput = prompt("Is today Black Friday? (yes/no)");

const cartTotal = Number(cartTotalInput);
const hasPromoCode = hasPromoInput.toLowerCase() === "yes";
const isBlackFriday = isBlackFridayInput.toLowerCase() === "yes";

if (isNaN(cartTotal)) {
  alert("Error, type a number");
} else {
  const isDiscountApplied = (cartTotal >= 100 && hasPromoCode) || isBlackFriday;

  if (isDiscountApplied) {
    console.log("Discount used");
    alert("Discount used");
  } else {
    console.log("Discount not used");
    alert("Discount not used");
  }

  const noDiscount = !isDiscountApplied;
  console.log("noDiscount =", noDiscount);
}
