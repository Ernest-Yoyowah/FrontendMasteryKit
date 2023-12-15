const scores = [10, 20, 60, 40, 50, 80, 25, 42];

// we want to find the heighest score in the array

const firstHighScore = scores.find((highScore) => {
  return highScore > 50;
});

console.log(firstHighScore);
