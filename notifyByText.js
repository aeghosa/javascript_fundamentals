// Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.

const notifyByText = (phone) => {
  return 'Text sent to:' + phone;
}

module.exports = notifyByText;