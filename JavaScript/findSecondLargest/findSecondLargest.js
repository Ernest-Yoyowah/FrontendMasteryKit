function findSecondLargest(arr) {
  // Your code here

  arr.sort(function (a, b) {
    return b - a;
  });

  return arr[1];
}

console.log(findSecondLargest([5, 2, 9, 12, 1])); // Should return 9
