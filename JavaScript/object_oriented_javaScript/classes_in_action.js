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

  about() {
    console.log(
      `${this.name} is a ${this.program_type} ${this.programme} student in level ${this.level}. currently seeking new job opportunities. Contact Phone: ${this.phone} Email: ${this.email}`
    );
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
// student_1.about();

console.log(student_1);
