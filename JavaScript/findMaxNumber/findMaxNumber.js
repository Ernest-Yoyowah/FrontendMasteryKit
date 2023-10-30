function findMaxNumber(numbers) {
  // Your code here
  let maxNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

// Example usage:
console.log(findMaxNumber([10, 5, 15, 20, 3])); // Should output 20
console.log(findMaxNumber([100, 500, 250, 750])); // Should output 750
