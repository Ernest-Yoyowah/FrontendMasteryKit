const products = [
  { namee: "Toyota", price: 50 },
  { namee: "BMW", price: 30 },
  { namee: "Benz", price: 5 },
  { namee: "Nissan", price: 10 },
  { namee: "SUV", price: 60 },
];

const filtered = products.filter((product) => product.price > 20);

const promos = filtered.map((product) => {
  return `the promo price of ${product.namee} is $${product.price / 2}.00`;
});

console.log(promos);
