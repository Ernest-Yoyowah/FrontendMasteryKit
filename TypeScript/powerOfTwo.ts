// const isPowerOfTwo = (n: number) => {
//   if (n < 1) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     } else {
//       n /= 2;
//     }
//   }
//   return true;
// };

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(5));

//Big O = O(logn)

// BitWise Operator (&) - returns 1 if both operands are 1 else it is zero
const isPowerOfTwoBitWise = (n: number) => {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));

//Big O = O(1)
