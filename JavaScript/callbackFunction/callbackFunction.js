const fetchData = (url, callback) => {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const data = { result: "Some data" };
    callback(data);
  }, 1000);
};

// Callback function passed to fetchData
const handleData = (data) => {
  console.log(`Data received: ${data.result}`);
};

// Using the fetchData function with the callback
fetchData("https://api.example.com/data", handleData);
