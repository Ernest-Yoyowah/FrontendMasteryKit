// store data in local storage
localStorage.setItem("name", "Ernest");
localStorage.setItem("job", "Software Engineer");

// get data from local storage
let name = localStorage.getItem("name");

// updating data in local storage
localStorage.setItem("name", "Yoyowah");
localStorage.job = "Senior Systems Engineer";

job = localStorage.getItem("job");
console.log(job);

// deleting data from local storage
localStorage.removeItem("name"); // deleting individual data

localStorage.clear(); // deleting all data
