const getNumberSign = (n) => {
  if (n === 0) {
    return 'zero';
  } else if (n > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
}

module.exports = getNumberSign;

