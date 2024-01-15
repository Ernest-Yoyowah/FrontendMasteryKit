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
const User_1 = new User("Ernest", "ernestniiyoyowah@gmail.com", "0506923484");

User_1.login().logout();
