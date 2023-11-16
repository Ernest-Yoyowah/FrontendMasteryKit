class Animal {}
class Dog extends Animal {
  constructor() {
    this.noise = "bark";
  }
  makeNoise() {
    return this.noise;
  }
}
class Wolf extends Dog {
  constructor() {
    super();
    this.noise = "growl";
  }
}
var result = new Wolf();
console.log(result.makeNoise());
