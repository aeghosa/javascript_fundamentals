const addToBatch = (orders, orderid) => {
  if (orders.length >= 5) {
    return orders;
  }

  return orders.concat(orderid);
}

module.exports = addToBatch;