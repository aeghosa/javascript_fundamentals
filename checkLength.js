const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}

module.exports = checkLength;