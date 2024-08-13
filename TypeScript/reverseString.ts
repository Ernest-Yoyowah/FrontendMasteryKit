/*
Algorithm: Reverse String Without Built-in Methods

Input:
- A string `str`

Output:
- A string containing the reversed version of `str`

Steps:
1. Initialize an empty string variable `reversed`.
2. Iterate through the characters of the input string `str` from the end to the beginning.
   a. For each character at index `i` (starting from the last character):
      i. Concatenate the character to the `reversed` string.
3. Return the `reversed` string.

Pseudocode:
*/

const reverseStr = (str: string) => {
  let reversed: string | number = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

console.log(reverseStr("Ernest"));
