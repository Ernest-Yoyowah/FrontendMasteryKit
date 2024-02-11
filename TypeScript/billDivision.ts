// Problem Statement:
// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume.
// Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
//
// For example, assume the bill has the following prices: . Anna declines to eat item  which costs .
// If Brian calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate .
// In the second case, he should refund  to Anna.
//
// Function Description:
// Complete the billDivision function in the editor below. It should print `bill was fairly split` if the bill is fairly split.
// Otherwise, it should print the integer amount of money that Brian owes Anna.
//
// bonAppetit has the following parameter(s):
// - arrayOfBills: an array of integers representing the cost of each item ordered
// - indexOfAnnaDecline: an integer representing the zero-based index of the item Anna doesn't eat
// - annaPaid: the amount of money that Anna contributed to the bill

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
