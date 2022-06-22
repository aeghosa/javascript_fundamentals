// declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.

const notifyByEmail = require("./notifyByEmail")
const notifyByText = require("./notifyByText")

const notify = (phoneOrEmail, notifyFunction) => {
  return notifyFunction(phoneOrEmail); 
}

module.exports = notify;