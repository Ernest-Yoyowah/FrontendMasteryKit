const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};
const demoArray = [1, 2, 3, 4, 5];

const updatedArray = insertAtBeginning(demoArray, 4);
console.log(updatedArray);
