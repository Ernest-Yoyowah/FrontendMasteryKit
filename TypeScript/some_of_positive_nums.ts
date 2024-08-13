let sumOfPositive: number = 0;
const testArray_2 = [3, -2, 7, -5, 10];

const sumOfPositiveNum = (allNums: number[]) => {
  for (let i = 0; i < allNums.length; i++) {
    if (allNums[i] > 0) {
      sumOfPositive += allNums[i];
    }
  }
  return sumOfPositive;
};

const resultOfPosiveNumbers = sumOfPositiveNum(testArray_2);
console.log(resultOfPosiveNumbers);
