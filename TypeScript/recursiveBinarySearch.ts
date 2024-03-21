const recursiveBinarySearch = (ar: number[], target: number): number => {
  return search(ar, target, 0, nums.length);
};

function search(
  ar: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === ar[midIndex]) {
    return midIndex;
  }

  if (target < ar[midIndex]) {
    return search(ar, target, leftIndex, midIndex - 1);
  } else {
    return search(ar, target, midIndex + 1, rightIndex);
  }
}

const nums: number[] = [-5, 2, 4, 6, 10];
console.log(recursiveBinarySearch(nums, 2));

// Big O = O(logn)
