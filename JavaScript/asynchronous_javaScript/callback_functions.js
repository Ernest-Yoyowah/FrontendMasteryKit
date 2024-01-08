const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);

    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      //   console.log(`Response Status: ${request.status}`);
      callback(`Response Status: ${request.status}`, undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/to2dos");
  request.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
