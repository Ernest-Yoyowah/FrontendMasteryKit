function sumOfPositives(numbers) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const testArray = [3, -2, 7, -5, 10];

console.log(sumOfPositives(testArray)); // Should return 20
