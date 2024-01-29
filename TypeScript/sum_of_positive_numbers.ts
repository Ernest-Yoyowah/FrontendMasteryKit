let sum = 0;
const positiveNumbersSum = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

// Test the function
const testArray_1 = [3, -8, 1, -6, 4, 7, -2];
console.log(positiveNumbersSum(testArray_1)); // Should return the sum of positive numbers in the array
