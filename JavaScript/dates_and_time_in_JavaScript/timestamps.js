const before = new Date("February 1 2019 7:30:59");
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);

console.log(mins);
