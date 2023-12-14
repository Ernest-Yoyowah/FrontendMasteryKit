const prices = [20, 24, 21, 14, 27, 6, 16, 10, 12];

const salePrices = prices.map((price) => {
  return price / 2;
});

console.log(salePrices);
