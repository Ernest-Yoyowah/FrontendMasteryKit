function countVowels(str) {
  // Your code here
  const vowels = ["a", "e", "o", "i", "u"];

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // Should return 2 (e and o)
