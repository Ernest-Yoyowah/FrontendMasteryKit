const recursiveFibonacci = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(6));

// O(n) - Iterative
// O(2^n) - Recursive
