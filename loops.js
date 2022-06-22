const getParity = (number) => {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return `odd`;
  }
}

for (let i = 0 ; i <= 20 ; ++i) {
  const parity = getParity(i);
  console.log(`${i} is ${parity}`);
}