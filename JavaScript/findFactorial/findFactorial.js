function findFactorial(n) {
  // Your code here

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(findFactorial(5)); // Should return 120 (5! = 5 * 4 * 3 * 2 * 1)
