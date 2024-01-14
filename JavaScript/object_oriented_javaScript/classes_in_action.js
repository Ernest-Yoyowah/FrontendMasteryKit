class student {
  constructor(name, phone, email, programme, program_type, gender, level) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.programme = programme;
    this.program_type = program_type;
    this.gender = gender;
    this.level = level;
  }
}

const student_1 = new student(
  "Ernest",
  "0506923484",
  "ernestniiyoyowah@gmail.com",
  "Software Engineering",
  "BSc.",
  "Male",
  "200"
);

console.log(student_1);
