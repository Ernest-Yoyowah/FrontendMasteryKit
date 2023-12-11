const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  if (username.value.includes("@")) {
    console.log(`${username.value} is not a valid username`);
  } else if (username.value <= 0) {
    console.log("No Input");
    e.preventDefault();
  } else {
    console.log(`${username.value}`);
  }
});
