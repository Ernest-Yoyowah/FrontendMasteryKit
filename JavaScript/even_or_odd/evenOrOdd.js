const evenOrOdd = (number) => {
  if (number % 2 == 0) {
    return "Event";
  } else {
    return "Odd";
  }
};

// Test the function
console.log(evenOrOdd(4)); // Should print "even"
console.log(evenOrOdd(7)); // Should print "odd"
