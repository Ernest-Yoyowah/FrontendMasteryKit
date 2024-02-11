"use strict";

const billDivision = (
  arrayOfBills: number[],
  indexOfAnnaDecline: number,
  annaPaid: number
) => {
  // Write your code here
  const totalBill = arrayOfBills.reduce((acc, val) => acc + val);
  const actualBill = (totalBill - arrayOfBills[indexOfAnnaDecline]) / 2;
  const annaRefund = annaPaid - actualBill;

  if (annaPaid === actualBill) {
    console.log(`The bill was fairly split`);
  } else if (annaPaid > actualBill) {
    console.log(`Anna must be refunded with an amount of GHC${annaRefund}.00`);
  } else {
    console.log(`Anna has underpaid the bill`);
  }
};

// Example usage:
const arrayOfBills = [3, 10, 2, 9];
const indexOfAnnaDecline = 1;
const annaPaid = 12;

billDivision(arrayOfBills, indexOfAnnaDecline, annaPaid);
