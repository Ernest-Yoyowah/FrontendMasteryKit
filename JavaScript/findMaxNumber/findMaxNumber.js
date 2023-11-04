function findMaxNumber(numbers) {
  // Your code here
  let maxNum = Math.max(...numbers);
  return maxNum;
}

// Example usage:
const numbers = [42, 17, 8, 94, 25, 62];
const maxNumber = findMaxNumber(numbers);
console.log("The maximum number is:", maxNumber); // This should print the maximum number in the array.
