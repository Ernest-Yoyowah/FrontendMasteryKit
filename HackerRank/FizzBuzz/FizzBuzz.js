// Function to determine the output for each number
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = null;

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    console.log(output || i);
  }
}

// Set the length for the FizzBuzz sequence
const LENGTH = 15;

// Execute the FizzBuzz function
fizzBuzz(LENGTH);
