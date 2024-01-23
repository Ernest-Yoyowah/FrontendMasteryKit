let sum: number = 0;

const Average = (nums: number[]): number => {
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
};

const sampleArray: number[] = [2, 4, 6, 8, 10];
console.log(Average(sampleArray));

// const sampleArray: number[] = [2, 4, 6, 8, 10];
// const sum = sampleArray.reduce((acc, val) => acc + val);

// console.log(sum / sampleArray.length);
