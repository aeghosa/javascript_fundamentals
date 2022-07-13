class UserBase {
  // A constructor, to give initial arguments.
  constructor(user_list) {
// We can define attributes stored on the instance with `this`
    this.user_list = user_list;
  }

  count() {
    return this.user_list.length;
  }
 // A method.
  getName() {
    return this.user_list.map((name) => {
      return name;
    });
  }
  
  getIntroduction() {
    return this.user_list.map((name) => {
        return'Hi, my name is ' + name;
    });
  }
}

module.exports = UserBase;

