const todos = [
  { text: "play Piano", author: "Ernest" },
  { text: "pay Fees", author: "Nii" },
  { text: "Code for 4 hours", author: "Yoyowah" },
];

localStorage.setItem("todos", JSON.stringify(todos));

const storedData = localStorage.getItem("todos");
console.log(JSON.parse(storedData));
