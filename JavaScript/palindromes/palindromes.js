function isPalindrome(str) {
  // Your code here
  str = str.replace(/\s/g, "").toLowerCase();
  return str == str.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // Should return true
console.log(isPalindrome("hello")); // Should return false
