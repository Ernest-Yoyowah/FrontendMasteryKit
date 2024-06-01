/**
 * Performs a binary search on a sorted array to find the target value.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} target - The value to search for.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// Example usage:
(() => {
  const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const target = 10;
  const result = binarySearch(arr, target);

  console.log(`Index of ${target}:`, result); // Output: -1 (since 10 is not in the array)
})();
