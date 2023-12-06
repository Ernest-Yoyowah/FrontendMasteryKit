// Literals and properties

const user = {
  name: `Ernest`,
  major: `Software Engineering`,
  department: `Computing Systems`,
  year: `200`,
};

// Accessing the user object
console.log(user);

// Updating values
user["name"] = `Nii Yoyowah`;
user.year = `2nd Year`;

// Accessing individual values
console.log(`Name: ${user.name}`);
console.log(`Year: ${user["year"]}`);

// Updating value
user.major = `Bsc. Software Engineering`;

console.log(`Major: ${user.major}`);
