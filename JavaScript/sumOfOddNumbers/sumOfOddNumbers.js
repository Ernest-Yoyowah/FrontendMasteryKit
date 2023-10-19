function sumOfOddNumbers(numbers) {
  // Your code here

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const testArray = [1, 2, 3, 4, 5];

console.log(sumOfOddNumbers(testArray)); // Should return 9
