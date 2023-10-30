function reverseArray(arr) {
  // Your code here
  let reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // Should output [5, 4, 3, 2, 1]
console.log(reverseArray(["apple", "banana", "cherry"])); // Should output ["cherry", "banana", "apple"]
