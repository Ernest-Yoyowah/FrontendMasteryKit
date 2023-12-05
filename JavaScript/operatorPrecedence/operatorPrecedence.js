/*
-There are many operators in JavaScript
-Every operator has a corresponding precedence number
-The one with the larger number executes first
-If the precedence is the same, execution order is from left to right

NOTE: parentheses () overides any precedence. It has the heighest precedence number of 18
*/

// Increment Operators
// ++	Postfix Increment	i++
let postfixIncrement = 5;
console.log(`Initial Value: ${postfixIncrement}`);
postfixIncrement++;
console.log(`Postfix Increment ${postfixIncrement}`);
