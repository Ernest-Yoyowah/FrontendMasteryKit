const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  if (username.value > 0) {
    console.log(`Congratulations ${username.value}`);
  } else {
    e.preventDefault();
    console.log("No Input");
  }
});
