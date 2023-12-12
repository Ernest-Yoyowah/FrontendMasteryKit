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
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");
});
