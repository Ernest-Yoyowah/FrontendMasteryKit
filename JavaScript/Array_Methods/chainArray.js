const products = [
  { name: "Toyota", price: 50 },
  { name: "BMW", price: 30 },
  { name: "Benz", price: 5 },
  { name: "Nissan", price: 10 },
  { name: "SUV", price: 60 },
];

// const filtered = products.filter((product) => product.price > 20);

// const promos = filtered.map((product) => {
//   return `the promo price of ${product.name} is $${product.price / 2}.00`;
// });

// Method Chaining

const filtered = products
  .filter((product) => product.price > 20)
  .map((product) => {
    return `the promo price of ${product.name} is $${product.price / 2}.00`;
  });

console.log(filtered);

// console.log(promos);
