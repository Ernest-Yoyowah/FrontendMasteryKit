function sumPositiveNumbers(numbers) {
  // Your code here
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Test the function
const testArray = [3, -8, 1, -6, 4, 7, -2];
console.log(sumPositiveNumbers(testArray)); // Should return the sum of positive numbers in the array
