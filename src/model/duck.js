const { Animal } = require("./animal");

export class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
//inherit from the animal class