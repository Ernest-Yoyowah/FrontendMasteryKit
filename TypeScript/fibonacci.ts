const fibonacciSequence = (num: number) => {
  let fibonacci = [0, 1];

  for (let i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
};

const tialOutput = fibonacciSequence(5);
console.log(tialOutput);
let num = 5; // [0, 1, 1, 2, 3];

// Big O = O(n)
