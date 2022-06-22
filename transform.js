const transform = (message, transformFunction) => {
  return transformFunction(message);
}

module.exports = transform