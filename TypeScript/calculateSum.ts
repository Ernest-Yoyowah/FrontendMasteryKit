let sum = 0;
const calculateSum = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(calculateSum([5, 2, 9, 12, 1])); // Should return 29
