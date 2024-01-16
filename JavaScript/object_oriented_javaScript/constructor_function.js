// function constructor
function User(username, email, phone) {
  this.username = username;
  this.email = email;
  this.phone = phone;
}

// prototype model

User.prototype.login = function () {
  console.log(`${this.username} just logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} just logged out`);
  return this;
};

// Inherit from User for Admin
function Admin(username, email, phone, title) {
  User.call(this, username, email, phone);
  this.titel = title;
}

Admin.prototype = Object.create(User.prototype);

const User_1 = new User("Ernest", "ernestniiyoyowah@gmail.com", "0506923484");

const admin1 = new Admin(
  "Ernest",
  "ernestniiyoyowah@gmail.com",
  "0506923484",
  "Administrator"
);

// User_1.login().logout();
admin1.login().logout();
// console.log(admin1);
