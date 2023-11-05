"use strict";

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  // Write your code here
  let aliceAward = 0;
  let bobAward = 0;

  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      aliceAward++;
    } else if (a[i] < b[i]) {
      bobAward++;
    }
  }

  console.log(`Alice's Score: ${aliceAward}\nBob's Score: ${bobAward} `);
  return [aliceAward, bobAward];
}

// Example usage:
const a = [5, 6, 7];
const b = [3, 6, 10];

const result = compareTriplets(a, b);
