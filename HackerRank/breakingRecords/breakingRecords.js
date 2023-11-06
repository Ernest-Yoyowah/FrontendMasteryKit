"use strict";

function breakingRecords(scores) {
  // write your code here
  let min_score = scores[0];
  let max_score = scores[0];

  let min_score_count = 0;
  let max_score_count = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < min_score) {
      min_score = scores[i];
      min_score_count++;
    } else if (scores[i] > max_score) {
      max_score = scores[i];
      max_score_count++;
    }
  }

  return [max_score_count, min_score_count];
}

// Example usage:
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const result = breakingRecords(scores);
console.log(result.join(" "));
