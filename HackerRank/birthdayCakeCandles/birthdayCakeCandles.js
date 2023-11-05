"use strict";

// Function to count the number of candles with the maximum height
function birthdayCakeCandles(candles) {
  // Write your code here
  let maxheigth = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxheigth) count++;
  }
  console.log(`Candels: ${candles}`);
  console.log(maxheigth);
  return count;
}

// Replace this array with your own test data
const candles = [3, 2, 1, 3];

// Call the function with your test data
const result = birthdayCakeCandles(candles);

// Print the result to the console
console.log(result);
