const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = form.username.value;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation

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

// live feedback
form.username.addEventListener("keyup", (e) => {
  //   console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "failed");
  }
});
