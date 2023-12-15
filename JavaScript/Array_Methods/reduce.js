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

// console.log(result);

const goals = [
  { player: "Ernest", goal: 50 },
  { player: "Keyz", goal: 30 },
  { player: "Ernest", goal: 70 },
  { player: "Yoyowah", goal: 60 },
];

// we want to add the total goals for Ernest

const ernestTotal = goals.reduce((acc, curr) => {
  if (curr.player === "Ernest") {
    acc += curr.goal;
  }
  return acc;
}, 0);

console.log(ernestTotal);
