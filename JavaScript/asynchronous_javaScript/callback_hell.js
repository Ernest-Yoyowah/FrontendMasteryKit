const getTodos = (sources, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);

    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      //   console.log(`Response Status: ${request.status}`);
      callback(`Response Status: ${request.statusText}`, undefined);
    }
  });

  request.open("GET", sources);
  request.send();
};

getTodos("todos/data1.json", (err, data) => {
  console.log(data);

  getTodos("todos/data2.json", (err, data) => {
    console.log(data);
  });

  getTodos("todos/data3.json", (err, data) => {
    console.log(data);
  });
});
