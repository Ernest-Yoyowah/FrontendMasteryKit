const scores = [9, 32, 15, 17, 14, 4, 19];

const filterdScores = scores.filter((score) => {
  return score > 10;
});

console.log(filterdScores);
