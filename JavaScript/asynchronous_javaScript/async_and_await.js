// async and await

const getTodos = async () => {
  const response = await fetch("todos/data2.json");

  if (response.status !== 200) {
    throw new Error(
      `Response Status: ${response.status} Status Message: ${response.statusText}`
    );
  }
  const data = await response.json();

  return data;
};

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
