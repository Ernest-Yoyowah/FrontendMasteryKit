function human() {
  const name = "Ernest";

  // The outer function does not have access to variables declared in the inner function
  // console.log(innerText); // Error: innerText is not defined in the outer function

  // The inner function has access to the variable 'name' from the outer function
  function sayHi() {
    console.log(`Hi, I am ${name}`);

    // Variables declared in the inner function are not accessible in the outer function
    const innerText = "Inner text";
  }

  sayHi();
}

human();
