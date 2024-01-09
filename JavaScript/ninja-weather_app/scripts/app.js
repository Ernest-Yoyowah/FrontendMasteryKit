const cityForm = document.querySelector("form");

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city value from user input
  const city = cityForm.city.value.trim();
  cityForm.reset();
});
