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

// Type alias

type Person_obj = {
  name: string;
  age: number;
  gender: string;
  role: string;
};

let person: Person_obj;

person = {
  name: "Ernest",
  age: 22,
  gender: "male",
  role: "Front-End Developer",
};

// To Store an object with array

let students: {
  names: string[];
  scores: number[];
  about: {
    department: string;
    programme: string;
    cohort: number;
  };
};

students = {
  names: ["Ernest", "Mickey", "Omar"],
  scores: [84, 85, 86],
  about: {
    department: "Computer Science Department",
    programme: "BSc. Software Engineering",
    cohort: 2022 / 2023,
  },
};

// Type Inference
let course = "Data Structures and Algorithm";
// course = 14 // will throw an error

// Union Types
let address: string | number = "GA-255";
address = 2.54 - 255;
// console.log(person.name);

let fullName: string | string[] = "Ernest";
fullName = ["Ernest", "Nii", "Yoyowah"];

// Functions & types
const addTwoNums = (num1: number, num2: number) => num1 + num2;
const result = addTwoNums(8, 5);
console.log(result);
