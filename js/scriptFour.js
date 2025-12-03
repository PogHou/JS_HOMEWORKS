"use strict";

const user = {
  name: "Alex",
  age: 20,
  email: "alex@example.com",
  isSubscribed: true,
  balance: "150.25",
  verified: "1",
};

const order = {
  total: "95",
  currency: "USD",
  isPaid: false,
  delivery: "yes",
  priority: "0",
};

const systemSettings = {
  darkMode: true,
  fontSize: "18",
  language: "en",
  betaAccess: "false",
};

const userBalanceNumber = Number(user.balance);
const isUserVerified = user.verified === "1";
const userHasBaseAccess =
  user.age >= 18 &&
  isUserVerified &&
  (user.isSubscribed || userBalanceNumber > 0);

const orderTotalNumber = Number(order.total);
const orderCondition = order.isPaid || userBalanceNumber >= orderTotalNumber;

const fontSizeNumber = Number(systemSettings.fontSize);
const isFontValid = fontSizeNumber > 12;
const isLanguageValid =
  systemSettings.language === "en" || systemSettings.language === "uk";

const systemSettingsValid = isFontValid && isLanguageValid;

const finalAccess = userHasBaseAccess && orderCondition && systemSettingsValid;
let blockReason = "";

if (finalAccess) {
  console.log("Full access granted");
} else {
  console.log("Access denied");

  if (!userHasBaseAccess) {
    blockReason += "user";
  }
  if (!orderCondition) {
    blockReason += blockReason ? "/order" : "order";
  }
  if (!systemSettingsValid) {
    blockReason += blockReason ? "/system" : "system";
  }

  console.log("Access blocked by:", blockReason);
}

console.log("userHasBaseAccess:", userHasBaseAccess);
console.log("orderCondition:", orderCondition);
console.log("systemSettingsValid:", systemSettingsValid);
