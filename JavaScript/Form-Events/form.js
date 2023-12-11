const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(username.value);
});

// Testing RegEx

const newName = "Ernest";
const pattern = /[a-zA-Z]{6,}/;

let result = pattern.test(newName);
console.log(result);
