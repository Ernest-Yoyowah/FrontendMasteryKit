const user = {
  name: "Mark",
  sex: "male",
  age: "41",
  profession: "Doctor",
};

// console.log(Object.keys(user));

for (const detail of Object.keys(user)) {
  console.log(`${detail} => ${user[detail]}`);
}
