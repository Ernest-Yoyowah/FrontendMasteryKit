// store data in local storage
localStorage.setItem("name", "Ernest");
localStorage.setItem("job", "Software Engineer");

// get data from local storage
let name = localStorage.getItem("name");

// updating data in local storage
localStorage.setItem("name", "Yoyowah");
name = localStorage.getItem("name");
console.log(name);
