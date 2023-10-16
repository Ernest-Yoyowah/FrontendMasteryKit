function findLongestWord(str) {
  // Your code here

  let longestWord = "";
  let words = str.split(" ");

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const testString = "The quick brown fox jumped over the lazy dog";

console.log(findLongestWord(testString)); // Should return "jumped"
