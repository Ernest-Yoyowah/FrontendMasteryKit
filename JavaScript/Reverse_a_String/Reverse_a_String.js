function reverseString(str) {
  // Your code here
  /*
      1. initialize a variable to store reversed string
      2. loop to iterate through
      3. append char to the storage decleared
    */

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const originalString = "9,8,7,6,5,4,3,2,1";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output should be "!dlrow ,olleH"
