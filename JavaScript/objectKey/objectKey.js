const user = {
  name: "Mark",
  sex: "male",
  age: "41",
  profession: "Doctor",
};

// console.log(Object.keys(user));

// for of loop
for (const key of Object.keys(user)) {
  //   console.log(`${key} => ${user[key]}`);
}

// for in loop

for (const key in user) {
  //   console.log(`${key}: ${user[key]}`);
}

// object.keys() method
const keys = Object.keys(user);
// console.log(keys);

// iterate over objects
keys.forEach((key) => {
  //   console.log(` ${key} - ${user[key]}`);
});

// object.values() method
Object.values(user).forEach((key) => {
  //   console.log(key);
});

// object.entries() method

const entries = Object.entries(user);
console.log(entries);
