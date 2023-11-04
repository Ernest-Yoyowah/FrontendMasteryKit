function calculateFactorial(n) {
  // Your code here
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

// Example usage:
const number = 5;
const factorial = calculateFactorial(number);
console.log(`The factorial of ${number} is:`, factorial); // This should print the factorial of the given number.
