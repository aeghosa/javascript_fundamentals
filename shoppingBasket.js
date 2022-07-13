class ShoppingBasket {

  constructor() {
    this.allItems = [];
  }

  addItem(item) {
    this.allItems = this.allItems.concat(item);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.allItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}

// const candy = new Candy("Mars", 4.99);
module.exports = ShoppingBasket;