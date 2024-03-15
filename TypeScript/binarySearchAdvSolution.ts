const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr: number[], target: number) => {
  let minValue = 0;
  let maxValue = nums.length - 1;

  while (minValue <= maxValue) {
    let midValue = Math.floor((minValue + maxValue) / 2);

    if (target === nums[midValue]) {
      return midValue;
    } else if (target > nums[midValue]) {
      minValue = midValue + 1;
    } else {
      maxValue = midValue - 1;
    }
  }
  return -1;
};

const targetValue = 7;
const output = binarySearch(nums, targetValue);
console.log(
  `The index of ${targetValue} is ${
    output === -1 ? "Not in the Array" : output
  }`
);
