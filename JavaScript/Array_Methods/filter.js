const scores = [9, 32, 15, 17, 14, 4, 19];

const filterdScores = scores.filter((score) => {
  return score > 10;
});

// console.log(`Original scores\n${scores}\n`);
// console.log(`Filtered scores\n${filterdScores}`);

const users = [
  { name: "Ernest", premium: true },
  { name: "Nii", premium: true },
  { name: "Mike", premium: false },
  { name: "Jhn", premium: false },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
