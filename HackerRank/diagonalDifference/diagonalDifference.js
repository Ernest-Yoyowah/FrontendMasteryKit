"use strict";

const fs = require("fs");

function diagonalDifference(arr) {
  // Your code here
  let leftDiagonal = 0;
  let rigthDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rigthDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftDiagonal - rigthDiagonal);
}

// Sample input for testing
const sampleInput = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

// Calculate diagonal difference using sample input
const resultSample = diagonalDifference(sampleInput);
console.log(resultSample);
