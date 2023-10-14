function reverseString(str) {
  // Your code here

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output should be "!dlrow ,olleH"
