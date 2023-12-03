const calculateAverage = (numbers) => {
  const sumOFNumbers = numbers.reduce((sum, num) => sum + num);
  const average = sumOFNumbers / numbers.length;
  return average;
};
const arrayNumbers = [1, 2, 3, 5, 5];
const result = calculateAverage(arrayNumbers);
console.log(result);
