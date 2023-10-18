function findMinNumber(numbers) {
  // Your code here
  let minNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }
  return minNum;
}

const testArray = [8, 3, 12, 6, 21, 5, 17];

console.log(findMinNumber(testArray)); // Should return 3
