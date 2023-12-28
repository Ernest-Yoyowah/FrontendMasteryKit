/*
Destructuring is a feature introduced in ECMAScript 6 (ES6) that allows you to extract values
from arrays or properties from objects and assign them to variables in a concise and readable way.
It provides a syntax that mirrors the structure of the data being deconstructed,
making the code more expressive and reducing the need for repetitive boilerplate code.
*/

// Array destructuring
const numbers = [1, 2, 3, 4, 5, 6];
const [a, b, c] = numbers;

// Object destructuring
const person = { name: "John", age: 30 };
const { name, age: personAge = 25 } = person;

// Using destructuring
console.log(a, b, c);
console.log(name, personAge);
