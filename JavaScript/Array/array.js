const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

const double = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

const doubleMap = (arr) => {
  return arr.map((item) => {
    return item * 2;
  });
};

let out = doubleMap(arr);
console.log(out);
