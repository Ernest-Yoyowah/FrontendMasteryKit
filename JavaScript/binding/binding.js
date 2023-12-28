/*
In JavaScript, "binding" can refer to a couple of different concepts depending on the context.
Here are two common meanings:

1. Variable Binding: In JavaScript, "binding" often refers to the association of a variable with a value or an object.
When you declare a variable using var, let, or const, you are essentially creating a binding between the variable name and the value or reference it holds.

*/
// Example
let x = 10; // Here, 'x' is bound to the value 10

/*
2. Function Binding: Another meaning of "binding" in JavaScript is related to functions.
Function binding involves setting the context of the this keyword within a function.
In JavaScript, the value of this depends on how a function is called.
However, by using methods like bind(), call(), or apply(), you can explicitly set the value of this for a function.

*/

const obj = {
  name: "John",
  sayHello: function () {
    console.log("Hello, " + this.name);
  },
};

const greet = obj.sayHello;
greet(); // This would not work as expected, 'this' is not bound to 'obj'

const boundGreet = obj.sayHello.bind(obj);
boundGreet(); // This works because 'bind' binds 'this' to 'obj'
