"use strict";

const order = {
  total: "950",
  currency: "USD",
  isPaid: false,
  delivery: "yes",
  priority: "1",
};

const numberTotal = Number(order.total);
const hasDelivery = order.delivery === "yes";
const isPriority = order.priority === "1";
const isLargeOrder = numberTotal >= 1000;

let description = "";
if (!order.isPaid) {
  description = "Order is not paid";
} else {
  if (isLargeOrder) {
    description = "High-value paid order";
  } else if (hasDelivery) {
    description = "Paid order with delivery";
  } else {
    description = "Paid order without delivery";
  }
}

if (isPriority) {
  description += "[PRIORITY]";
}

const looseCompare = order.total == numberTotal;
const strictCompare = order.total === numberTotal;

console.log("numberTotal:", numberTotal);
console.log("hasDelivery:", hasDelivery);
console.log("isPriority:", isPriority);
console.log("isLargeOrder:", isLargeOrder);
console.log("description:", description);
console.log("== compare:", looseCompare);
console.log("=== compare:", strictCompare);
