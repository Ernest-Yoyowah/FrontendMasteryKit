function findAverage(numbers) {
  // Your code here
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

const testArray = [2, 4, 6, 8, 10];

console.log(findAverage(testArray)); // Should return 6
