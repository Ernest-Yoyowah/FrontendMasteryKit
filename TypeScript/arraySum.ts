const arraySum = (arr: number[]): number => arr.reduce((acc, val) => acc + val);

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15
console.log(arraySum([])); // Output: 0
console.log(arraySum([-1, 0, 1])); // Output: 0
