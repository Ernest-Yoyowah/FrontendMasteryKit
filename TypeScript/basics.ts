// Primitives: number, string, boolean
// More Complex types: Arrays, Objects
// Function types: parameters

// Primitives
let age: number = 20;

let username: string;
username = `Ernest`;

let isValid: boolean;
isValid = true;

// More Complex types: Arrays, Objects
const nums: number[] = [1, 2, 3, 4, 5, 6];

let person: {
  name: string;
  age: number;
  gender: string;
  role: string;
};

person = {
  name: "Ernest",
  age: 22,
  gender: "male",
  role: "Front-End Developer",
};

// To Store an object with array

let students: {}[];

students = ["Ernest", "Mickey", "Omar"];

// Type Inference
let course = "Data Structures and Algorithm";
// course = 14 // will throw an error

// Union Types
let address: string | number = "GA-255";
address = 2.54 - 255;
