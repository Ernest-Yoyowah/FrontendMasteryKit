function titleCase(sentence) {
  // Your code here
  const expectations = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "for",
    "nor",
    "or",
    "so",
    "yet",
    "in",
    "of",
    "on",
    "with",
  ];

  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (i === 0 || !expectations.includes(word.toLowerCase())) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      words[i] = word.toLowerCase();
    }
  }

  return words.join(" ");
}

const testSentence = "the quick brown fox jumps over the lazy dog";

console.log(titleCase(testSentence)); // Should return "The Quick Brown Fox Jumps Over the Lazy Dog"
