"use strict";

function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    maxSum += arr[i];
  }

  console.log(minSum, maxSum);
}

const arr = [1, 2, 3, 4, 5]; // Replace with your own array

miniMaxSum(arr);
