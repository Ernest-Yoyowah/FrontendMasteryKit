/* Implement a function to check if a given number is prime or not.
- What is a prime number: a number divisible by 1 or itself

Algorithm: Check if a Number is Prime

Input:
- An integer `input` (the number to be checked)

Output:
- Boolean value: true if `input` is prime, false otherwise

Steps:
1. If `num` is less than 2, return false (since 0 and 1 are not prime).
2. Iterate `i` from 2 to one less than the input number `input`:
   a. If `num` is divisible by `i` without any remainder, return false (since it's not prime).
3. If no divisors are found in the previous step, return true (since `num` is prime).

 */

const isPirmeNumber = (input: number) => {
  //check if prime
  if (input <= 1) {
    console.log("Not prime");
    return;
  }

  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      console.log("Not prime");
      return;
    }
  }

  console.log("Prime Number");
};

isPirmeNumber(1);
isPirmeNumber(7);
