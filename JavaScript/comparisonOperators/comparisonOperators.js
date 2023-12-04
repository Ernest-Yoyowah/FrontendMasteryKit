// loose or absruct compararison
let age = 20;
console.log(`Loose Compararison`);
console.log(age == 20); // true
console.log(age == `20`); // true. the loose operator compares value only

// strict compararison
console.log(`Strict Compararison`);
console.log(age === 20); // true
console.log(age === `25`); // false. strict compararison comapares both value and data type
