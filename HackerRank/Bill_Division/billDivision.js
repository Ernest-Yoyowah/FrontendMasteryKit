"use strict";

function bonAppetit(bill, k, b) {
  // Write your code here
  let totalBill = bill.reduce((acc, val) => acc + val);
  let actualBill = (totalBill - bill[k]) / 2;

  if (actualBill === b) {
    console.log(`Bon Appetit`);
  } else {
    console.log(b - actualBill);
  }
}

// Example usage:

const k = 1;
const bill = [3, 10, 2, 9];
const b = 12;

bonAppetit(bill, k, b);
