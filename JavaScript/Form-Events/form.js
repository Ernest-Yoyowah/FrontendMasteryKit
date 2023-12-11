const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation

  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    feedback.textContent = `Username is Valid`;
    // console.log(`Test Passed`);
  } else {
    feedback.textContent = `Username is not Valid`;
    // console.log(`Test Failed: ${username} not valid`);
  }

  // Boolean value of result
  let result = usernamePattern.test(username);
  console.log(result);
});
