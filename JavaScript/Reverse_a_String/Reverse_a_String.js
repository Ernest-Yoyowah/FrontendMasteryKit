function reverseString(str) {
  // Your code here

  str = str.replace(/\s/g, "").toLowerCase();
  let reversedString = str.split("").reverse().join("");
  return reversedString;
}

console.log(reverseString("Hello, world!")); // Should return "!dlrow ,olleH"
