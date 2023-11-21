const factorialIterative = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Example usage:
const n = 5;
const result = factorialIterative(n);
console.log(`Factorial of ${n} is: ${result}`);
