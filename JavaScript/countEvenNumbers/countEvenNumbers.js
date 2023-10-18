function countEvenNumbers(numbers) {
  // Your code here
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

const testArray = [3, 8, 1, 6, 4, 7, 2];

console.log(countEvenNumbers(testArray)); // Should return 4
