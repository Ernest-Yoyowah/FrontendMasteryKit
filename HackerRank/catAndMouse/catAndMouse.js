"use strict";

function catAndMouse(x, y, z) {
  // write your code here
  let distanceA = Math.abs(z - x);
  let distanceB = Math.abs(z - y);

  if (distanceA < distanceB) {
    return `Cat A`;
  } else if (distanceB < distanceA) {
    return `Cat B`;
  } else {
    return `Mouse C`;
  }
}

// Example usage:
const testCases = [
  { x: 1, y: 2, z: 3 },
  { x: 1, y: 5, z: 2 },
];

for (const testCase of testCases) {
  const { x, y, z } = testCase;
  const result = catAndMouse(x, y, z);
  console.log(result);
}
// console.log(`x: ${x}\ny: ${y}\nz: ${z}`);
