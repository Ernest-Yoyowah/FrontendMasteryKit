"use strict";

const aVeryBigSum = (ar: number[]): number => {
  // Calculate the sum of all elements in the array
  return ar.reduce((acc, val) => acc + val, 0);
};

// Example usage:
const ar: number[] = [
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
];
const result: number = aVeryBigSum(ar);
console.log(result);
