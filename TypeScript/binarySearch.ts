/* Binary Search Algorithm

Input:
- An array `arr` (sorted in ascending order)
- A target value `target`

Output:
- The index of `target` in `arr`, or -1 if `target` is not found

Steps:
1. Initialize two pointers: `left` at the beginning of the array and `right` at the end.
2. While `left` is less than or equal to `right`:
   a. Calculate the middle index as the average of `left` and `right`.
   b. If the middle element is equal to `target`, return its index.
   c. If the middle element is less than `target`, update `left` to `middle + 1`.
   d. If the middle element is greater than `target`, update `right` to `middle - 1`.
3. If `target` is not found after the loop, return -1.

*/

const binarySearch = (arr: number[], target: number): number => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (target === arr[midIdx]) {
      return midIdx;
    } else if (target > arr[midIdx]) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }

  return -1;
};

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 1;
console.log("Index of", target, "is", binarySearch(arr, target)); // Output: 0 (Index of 1 in the array)
