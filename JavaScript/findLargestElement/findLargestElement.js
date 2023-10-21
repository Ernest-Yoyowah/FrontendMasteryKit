function findLargestElement(arr) {
  // Your code here

  let largestElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

console.log(findLargestElement([5, 2, 9, 12, 1])); // Should return 12
