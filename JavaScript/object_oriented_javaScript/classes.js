// Classes are a template for creating objects.
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

// Define the User class
class User {
  // Constructor method to initialize object properties
  constructor(username, email, job) {
    this.username = username;
    this.email = email;
    this.job = job;
  }

  // Method to display user information
  about() {
    console.log(
      `Username: ${this.username}\nEmail: ${this.email}\nRole: ${this.job}\n`
    );
  }
}

// Create an instance of User (User1)
const User1 = new User("Ernest", "ernest@gmail.com", "Frontend Developer");
// Call the about method to display user information
User1.about();

// Create another instance of User (User2)
const User2 = new User("Nii", "nii@gmail.com", "Front-End Engineer");
// Call the about method for the second user
User2.about();
