const linearSearch = (array: number[], target: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const arr: number[] = [-5, 2, 10, 4, 6];
console.log(linearSearch(arr, 10));

// Big O  = O(n)
