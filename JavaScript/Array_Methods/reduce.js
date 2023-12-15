const scores = [10, 20, 60, 40, 50, 80, 25, 42];

// sum of array
const totalScore = scores.reduce((acc, val) => acc + val);
// console.log(totalScore);

const result = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);

console.log(result);
