"use strict";

function beautifulDays(i, j, k) {
  // Write your code here
  let beautifulDayCount = 0;

  for (let day = i; day <= j; day++) {
    const reversedDay = parseInt(
      day.toString().split("").reverse().join(""),
      10
    );

    const absoluteDifference = Math.abs(day - reversedDay);
  }

  if (absoluteDifference % k === 0) {
    beautifulDayCount++;
  }
  return beautifulDayCount;
}

// Example usage:
const i = 20;
const j = 23;
const k = 6;

const result = beautifulDays(i, j, k);
console.log(result);
