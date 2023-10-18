function findMaxNumber(numbers) {
  // Your code here

  let maxNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

const testArray = [8, 3, 12, 6, 21, 5, 17];

console.log(findMaxNumber(testArray)); // Should return 21
