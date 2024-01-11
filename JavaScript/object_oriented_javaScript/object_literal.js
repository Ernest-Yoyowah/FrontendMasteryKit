const student = {
  name: "Ernest Nii Okpoti Yoyowah",
  id: "4521236575",
  program: "Software Engineering",
  program_type: "BSc.",
  gender: "Male",
  year: "Second Year",
  aboutMessage() {
    console.log(
      `${this.name} is a ${this.program_type} ${this.program} student in his ${this.year} in collge`
    );
  },
};

student.aboutMessage();
