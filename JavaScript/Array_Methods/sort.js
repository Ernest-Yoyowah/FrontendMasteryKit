// example 1 - sorting strings
const names = ["Ernest", "Nii", "Yoyowah", "Mike", "John", "Dan"];

// in-buit to sort in alphabetical order automatically
names.sort();
// console.log(names);

//example 2 - sorting numbers

const scores = [10, 20, 60, 40, 50, 80, 25, 42];

// automatically sorts from lowest to heighest
// scores.sort();
// console.log(scores);

//example 3 - sorting objects

const players = [
  { player: "Ernest", goal: 50 },
  { player: "Keyz", goal: 30 },
  { player: "Ernest", goal: 70 },
  { player: "Nii", goal: 90 },
  { player: "Frank", goal: 60 },
];

players.sort((a, b) => {
  if (a.goal > b.goal) {
    return -1;
  } else if (b.goal > a.goal) {
    return 1;
  } else {
    return 0;
  }
});

console.log(players);
