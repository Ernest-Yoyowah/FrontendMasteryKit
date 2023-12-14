const prices = [20, 24, 21, 14, 27, 6, 16, 10, 12];

// const salePrices = prices.map((price) => price / 2);

// console.log(salePrices);

const products = [
  { name: "gold star", price: 60 },
  { name: "mushroom", price: 20 },
  { name: "green shells", price: 45 },
  { name: "banana skin", price: 63 },
  { name: "red shells", price: 20 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts);
