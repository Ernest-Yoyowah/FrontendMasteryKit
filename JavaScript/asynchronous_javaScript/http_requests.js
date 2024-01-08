// HTTP GET requests are made with the intention of retrieving information or data from a source (server) over the web.

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);

  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

// XMLHttpRequest: readyState property
/*
1 -	OPENED	open() has been called.
0 -	UNSENT	Client has been created. open() not called yet.
2 -	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3 -	LOADING	Downloading; responseText holds partial data.
4 -	DONE	The operation is complete.
*/
