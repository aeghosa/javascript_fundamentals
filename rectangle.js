class Rectangle {

  constructor(height, width) {
  
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

module.exports = Rectangle;