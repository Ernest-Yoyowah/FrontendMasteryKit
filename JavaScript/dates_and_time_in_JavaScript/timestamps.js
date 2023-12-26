const before = new Date("January 1 2023 0:00:59");
const now = new Date(); // today's date 12/26/2023, 7:24:38 PM

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const weeks = Math.round(days / 7);

// console.log(mins);
// console.log(hours);
// console.log(days);
// console.log(weeks);
console.log(`This blog was written ${days} days ago`);
