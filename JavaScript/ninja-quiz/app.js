const correctAnswers = ["A", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const grade = document.querySelector(".grade");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Check Answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // display results
  scrollTo(0, 0); // scrolls to the top of the page when the submit button is clicked. its a window object

  result.classList.remove("d-none");

  // Score animation
  let output = 0;

  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
