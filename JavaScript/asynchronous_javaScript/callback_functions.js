const getTodos = () => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);

    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log(`Response Status: ${request.status}`);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};

getTodos();
