const recursiveFibonacci = (n: number): number => {
  if (n < 2) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

let num: number = 6;
console.log(recursiveFibonacci(num));

// O(n) - Iterative
// O(2^n) - Recursive
