const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

const sqrt = () => {
  let resultSqrt = [];
  for (let i = 0; i < arr.length; i++) {
    resultSqrt.push(Math.sqrt(arr[i]).toFixed(2));
  }
  return resultSqrt;
};

let output = sqrt(arr);
console.log(output);
