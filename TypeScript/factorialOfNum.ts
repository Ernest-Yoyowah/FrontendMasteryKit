/* Write a function to find the factorial of a number recursively.

Input: an int `input`
Process: Iterate to find factorial
Output: factorial

Steps
1. declare a variable and initialize to 1;
2. iterate through numbers from 1 to the value of the input
3. multiply and accumulate values of i till end of loop
*/

// const factorialOfNum = (input: number) => {
//   let factorial = 1;

//   for (let i = 1; i <= input; i++) {
//     factorial *= i;
//   }

//   return factorial;
// };

// console.log(factorialOfNum(5));

/**   Recursively find factorial */

/* Write a function to find the factorial of a number recursively.

Input: an int `input`
Process: Recursively find factorial
Output: factorial

Steps:
1. If the input is 0 or 1, return 1 (base case).
2. Otherwise, return the product of the input and the factorial of input - 1 (recursive case).
*/

// const factorial = (input: number): number => {
//   // Base case: If input is 0 or 1, return 1
//   if (input === 0 || input === 1) {
//     return 1;
//   }

//   // Recursive case: Return the product of input and factorial of input - 1
//   return input * factorial(input - 1);
// };

// // Example usage:
// console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

const factorial = (n: number) => {
  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

let out = factorial(5);
console.log(out);
