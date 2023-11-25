"use strict";

function hurdleRace(k, height) {
  // write your code here
  let maxHurdle = Math.max(...height);
  let minDose = maxHurdle - k;

  return minDose > 0 ? minDose : 0;
}

// Example usage:
const k = 4;
const height = [1, 6, 3, 5, 2];

const result = hurdleRace(k, height);
console.log(result);
