const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};
const demoArray = [1, 2, 3, 4, 5];
const demoArray_2 = ["Ernest", "Nii", "Okpoti", "Yoyowah"];

const updatedArray = insertAtBeginning(demoArray, 4);
const updatedArray_2 = insertAtBeginning(demoArray_2, "Emmanuel");
console.log(updatedArray_2);

// generics-Importance
// 1. Flexibility
// 2. Type safety
