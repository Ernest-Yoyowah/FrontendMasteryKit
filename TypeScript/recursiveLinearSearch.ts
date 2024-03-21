const recursiveLinearSearch = (
  array: number[],
  target: number,
  i = 0
): number => {
  if (i >= array.length) return -1;

  if (array[i] === target) return i;

  return recursiveLinearSearch(array, target, i + 1);
};

const arr: number[] = [-5, 2, 10, 4, 6];
console.log(recursiveLinearSearch(arr, 10)); // Output: 2 (index of target number)
