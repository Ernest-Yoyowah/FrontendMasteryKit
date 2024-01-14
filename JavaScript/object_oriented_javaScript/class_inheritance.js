class Student {
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
      `${this.name} is a ${this.program_type} ${this.programme} student in level ${this.level}.`
    );
    return this;
  }
  goal() {
    console.log(
      `currently seeking new job opportunities. Phone: ${this.phone} Email: ${this.email}`
    );
    return this;
  }
}

// Inheriting properties from student class
class Admin extends Student {}

const student_1 = new Admin(
  "Ernest Nii Okpoti Yoyowah",
  "0506923484",
  "ernestniiyoyowah@gmail.com",
  "Software Engineering",
  "BSc.",
  "Male",
  "200"
);
console.log(student_1);
student_1.about().goal();
