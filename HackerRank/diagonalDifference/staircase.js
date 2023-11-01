function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashTags = "#".repeat(i);
    console.log(spaces + hashTags);
  }
}

// You can test the function by calling it with a specific value of n.
const n = 6; // Change this to the desired number of rows
staircase(n);
