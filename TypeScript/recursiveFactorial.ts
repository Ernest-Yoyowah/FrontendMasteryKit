const recursiveFactorial = (n: number): number => {
  if (n <= 1) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(7));
