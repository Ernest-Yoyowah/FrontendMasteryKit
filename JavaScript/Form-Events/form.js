const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation

  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern === true) {
    console.log(`Test Passed`);
  } else {
    console.log(`Test Failed: ${username} not valid`);
  }

  let result = usernamePattern.test(username);
  console.log(result);
});
