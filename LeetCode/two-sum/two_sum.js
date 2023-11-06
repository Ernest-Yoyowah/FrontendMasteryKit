const nums = [2, 7, 11, 15];
target = 13;

const twoSum = (nums, target) => {
  const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }
    numIndices.set(num, i);
  }

  return [];
};
const result = twoSum(nums, target);
console.log(result);
// console.log("Script executed successfully");
