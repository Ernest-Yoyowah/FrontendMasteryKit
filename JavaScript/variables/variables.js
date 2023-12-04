var name = `Ernest`;
var name = `Nii`;
/*
Variables declared with the var keyword can be redeclared and assigned
*/

let lastname = `Ernest`;
// let lastname = `Yoyowah`;
/*
Variables declared with the let keyword can not be redeclared but can be re-assigned
*/

const fullname = `Ernest Yoyowah`;
/*
Variables declared with the cont keyword cannot be redeclared and re-assigned
*/
// console.log(name);

let age;
console.log(age, age + 3); // this will return undefined and NaN
// undefined is the default value given to unassigned variables
// NaN is given when you try to use mathematical operations on none number data types

// now i will assign null to the variable and you will notice that it wouldn't return undefined or NaN

let ageTwo = null;
console.log(ageTwo, ageTwo + 3); // this will return null and 3
// null is the value assigned intensionally to a variable which will be receiving a value later
