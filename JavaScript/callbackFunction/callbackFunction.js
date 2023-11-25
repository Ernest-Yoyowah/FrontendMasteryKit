let people = ["Ernest", "Mike", "Seth", "John"];

const logPerson = (person, index) => {
  console.log(`${index} - Hello ${person}`);
};

people.forEach(logPerson);
