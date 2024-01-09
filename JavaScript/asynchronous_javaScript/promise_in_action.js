const getTodos = (sources) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        //   console.log(request.responseText);
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        //   console.log(`Response Status: ${request.status}`);
        reject(`Response status: ${request.status}`);
      }
    });

    request.open("GET", sources);
    request.send();
  });
};

getTodos("todos/data1.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
