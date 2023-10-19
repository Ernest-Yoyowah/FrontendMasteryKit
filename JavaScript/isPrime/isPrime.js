function isPrime(number) {
  // Your code here

  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // Should return true
console.log(isPrime(4)); // Should return false
