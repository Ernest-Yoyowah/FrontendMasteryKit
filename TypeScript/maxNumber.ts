const MaxNumber = (given_numbers: number[]): number => {
  let max_number = Math.max(...given_numbers);
  return max_number;
};

// Example usage:
const given_numbers: number[] = [42, 17, 8, 94, 25, 62];
const max_number = MaxNumber(given_numbers);
console.log(`The maximum number is: ${max_number}`); // This should print the maximum number in the array.
