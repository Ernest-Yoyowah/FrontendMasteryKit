function reverseArray(arr) {
  // Your code here

  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const testArray = [1, 2, 3, 4, 5];

console.log(reverseArray(testArray)); // Should return [5, 4, 3, 2, 1]
