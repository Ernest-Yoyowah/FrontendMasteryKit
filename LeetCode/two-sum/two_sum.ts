/*
    Problem: Two Sum

    Description:
    Given an array of integers `nums` and an integer `target`, return the indices of the two numbers 
    such that they add up to `target`.

    Example:
    - Input: `nums = [2, 7, 11, 15]`, `target = 9`
    - Output: `[0, 1]` (Because `nums[0] + nums[1]` is `9`)

    Constraints:
    - You may assume that each input would have exactly one solution, and you may not use the same element twice.
    - You can return the answer in any order.
*/

const twoSum = (nums: number[], target: number): number[] => {
  const numToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement)!, i];
    }

    numToIndex.set(num, i);
  }

  return [];
};

// Example usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
