const roundNearest5 = (num) => {
  return Math.round(num / 5) * 5;
};

const result = roundNearest5(52);
console.log(result);
