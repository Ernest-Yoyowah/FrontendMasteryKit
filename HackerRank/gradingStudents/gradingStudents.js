"use strict";

function gradingStudents(grades) {
  // write your code here
  let finalGrade = grades.map((grade) => {
    if (grade >= 38 && grade % 5 >= 3) {
      return (grade = Math.round(grade / 5) * 5);
    } else {
      return grade;
    }
  });

  return finalGrade;
}

// Example usage:
const grades = [73, 67, 38, 33];
const result = gradingStudents(grades);
console.log(result.join("\n"));
