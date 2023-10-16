function isPalindrome(str) {
  //Your code here

  str = str.replace(/\s/g, "").toLowerCase();

  return str == str.split("").reverse().join("");
}

const testString1 = "racecar";
const testString2 = "hello";

console.log(isPalindrome(testString1)); // Should return true
console.log(isPalindrome(testString2)); // Should return false
