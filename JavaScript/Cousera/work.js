try {
  throw new Error();
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}
