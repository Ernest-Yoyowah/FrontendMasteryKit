function twoSum(nums, target) {
  // Your code here
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [i, map.get(num2)];
    }
    map.set(num1, i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Should return [0, 1]
