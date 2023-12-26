const before = new Date("February 1 2019 7:30:59");
const now = new Date(); // today's date 12/26/2023, 7:24:38 PM

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);

// console.log(mins);
console.log(hours);
