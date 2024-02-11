"use strict";

// Function to count the number of candles with the maximum height
const birthdayCakeCandles_TS = (heightsOfCandles: number[]): number => {
  const maxHeight = Math.max(...heightsOfCandles);
  let countOfHeight = 0;

  for (let i = 0; i < heightsOfCandles.length; i++) {
    if (heightsOfCandles[i] === maxHeight) {
      countOfHeight++;
    }
  }

  console.log(`Candels: ${heightsOfCandles}`);
  console.log(
    `The maxinum height is: ${maxHeight}\nThe Number of candles with the maximum height are: ${countOfHeight}`
  );

  return countOfHeight;
};

// Replace this array with your own test data
const heightsOfCandles: number[] = [3, 8, 8, 8];

// Call the function with your test data
const resultOfCount: number = birthdayCakeCandles_TS(heightsOfCandles);

// Print the result to the console
console.log(resultOfCount);
