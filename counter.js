let counter = 0

const increment = () => {
  console.log(counter++) 
}

setInterval(increment, 1000)

module.exports = increment;