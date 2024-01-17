// Spread operator (Array)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Spread operator (Object)
const obj1 = { name: "John" };
const obj2 = { ...obj1, age: 30 };

// Rest Parameter
const double = (...nums) => {
  return nums.map((num) => num * 2);
};

const resultDouble = double(1, 2, 3, 6, 5, 4, 5, 6, 8);
console.log(resultDouble);

// Rest operator (Array)
const [first, ...rest] = [1, 2, 3, 4, 5];

// Rest operator (Object)
const { title, ...restProperties } = { title: "Sample", description: "..." };

// Using spread and rest operators
// console.log(arr2);
// console.log(obj2);
// console.log(rest);
// console.log(restProperties);
