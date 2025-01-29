/**
 *
 * @param nums
 * @param target
 * @returns the sum of any two to the target or we throw an error is there is no pair
 */

const twoSum = (nums: number[], target: number) => {
  if (nums.length === 0) {
    throw new Error("The array must contain valid values");
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

let testCase1 = [2, 7, 11, 15];
let testCase2 = [-3, 3, 4, 5];
let testCase3 = [];
console.log(twoSum(testCase2, 0));

/**
 * since we cant talk verbal lets assume this is we talking and i am walking you through the code
 *
 * so i am a using a brute force search algorighm to find the pair because the data is small which will end in a fater time with a time conplexitty of 0(n2)
 * where n is 4,
 * when it comes to space complexity  we dont need any extra space so space is good here compared to using map where we will need space store data
 */
