// what_is_oop.js

// Object-Oriented JavaScript (OOJS) is a programming paradigm that uses objects to organize and structure code.
// Objects in JavaScript are collections of key-value pairs, where values can be primitive data types or functions.

// Example of creating an object using object literal notation:
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function () {
    console.log("Engine started");
  },
  stop: function () {
    console.log("Engine stopped");
  },
};

// You can access object properties using dot notation:
console.log(car.brand); // Output: Toyota

// Objects in JavaScript can also be created using constructor functions:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };
}

// Creating an instance of the Person object:
let person1 = new Person("Ernest", 25);
person1.greet(); // Output: Hello, my name is Ernest and I am 25 years old.

// Object-Oriented principles in JavaScript include encapsulation, inheritance, and polymorphism.

// Encapsulation: Bundling data and methods that operate on that data into a single unit (object).
// Inheritance: Creating a new object type by inheriting properties and methods from an existing object type.
// Polymorphism: The ability for different objects to respond to the same method or property in their own way.

// These principles help in creating more modular, reusable, and organized code in JavaScript.
