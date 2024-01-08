// HTTP GET requests are made with the intention of retrieving information or data from a source (server) over the web.

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  console.log(request, request.readyState);
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
