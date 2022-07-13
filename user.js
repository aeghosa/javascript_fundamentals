class User {
// A constructor, to give initial arguments.
  constructor(name) {
// We can define attributes stored on the instance with `this`
    this.name = name;
  }
 // A method.
  getName() {
  return this.name;
  }

  getIntroduction() {
  return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;