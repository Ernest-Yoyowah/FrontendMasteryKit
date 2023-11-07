/**
 * Problem Statement:
 * Given an array of integers and a positive integer k, determine the number of pairs
 * where the sum of the pair elements is divisible by k.
 *
 * @param {number} k - A positive integer.
 * @param {number[]} arr - An array of integers.
 * @returns {number} - The count of pairs whose sum is divisible by k.
 */
function divisibleSumPairs(k, arr) {
  // Write your code here
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k == 0) {
        count++;
      }
    }
  }

  return count;
}

// Example usage:
const arr = [2, 7, 5, 3, 8];
const k = 10;
const result = divisibleSumPairs(k, arr);
console.log(`Count of pairs divisible by ${k}, is: ${result}`);
