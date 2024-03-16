// const calls = [
//   { name: "Ernest", numberOfCalls: 5 },
//   { name: "Ben", numberOfCalls: 3 },
//   { name: "Nii", numberOfCalls: 9 },
//   { name: "Yoyowah", numberOfCalls: 2 },
//   { name: "Mike", numberOfCalls: 5 },
//   { name: "Henry", numberOfCalls: 6 },
//   { name: "Jerry", numberOfCalls: 12 },
//   { name: "Yaw", numberOfCalls: 8 },
// ];

// const listOfCalls = calls.map((item, index) => {
//   return (
//     <li key={index}>
//       {calls.name}: {calls.numberOfCalls}
//     </li>
//   );
// });

// console.log(x);
// var x = 21;
// var x = "kay";

// var girl = function () {
//   var x = 3;
// };
// girl();

// const ShoeAvailable = new Promise((resolve, reject) => {
//   let inStock = false;

//   if (inStock) {
//     resolve("Available");
//   } else {
//     reject("Not Available");
//   }
// });

// ShoeAvailable.then((response) => console.log(response)).catch((err) =>
//   console.log(err)
// );

// const namesOfUsers = users.map((persons) => {
//   return persons.name;
// });

// console.log(namesOfUsers);

// const names = [];

// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
// }
// console.log(names);

// const names = [];
// users.forEach((user) => {
//   names.push(user.name);
// });
// console.log(names);

// const users = [
//   { name: "Ernest", isActive: true, age: 2 },
//   { name: "Ben", isActive: false, age: 23 },
//   { name: "Nii", isActive: true, age: 12 },
//   { name: "Yoyowah", isActive: false, age: 25 },
// ];

// const names = users
//   .sort((user1, user2) => (user1.age < user2.age ? -1 : 1))
//   .filter((user) => user.isActive)
//   .map((user) => user.name);
// console.log(names);

// const counterFunc = () => {
//   let count = 0;

//   return {
//     increment: (val = 1) => {
//       count += val;
//     },
//     getVal: () => {
//       return count;
//     },
//   };
// };

// const counter = counterFunc();
// console.log(counter.getVal());
// counter.increment();
// counter.increment();
// console.log(counter.getVal());

// const funcMult = (n1) => (num2 = (n2) => n1 * n2);

// console.log(funcMult(2)(3));

// const fibonacci = (n) => {
//   const fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// };

// const output = fibonacci(5);
// console.log(output);
// n = 5; [0, 1, 1, 2, 3]

const factorialOfNum = (n) => {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

// console.log(factorialOfNum(5));

// recursive

// const recursive = (n) => {
//   if (n < 1 || n === 0) {
//     return 1;
//   } else {
//     return n * recursive(n - 1);
//   }
// };

// console.log(recursive(5));

const arr = [1, 2, 3, 2, 3, 4];

const ni = (array) => [...new Set(array)];
console.log(ni(arr));
