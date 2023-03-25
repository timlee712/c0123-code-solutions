/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    const area = width * width;
    const circumference = 4 * width;
    super(area, circumference);
    this.width = width;
  }

  print() {
    return `${super.print()}, Width: ${this.width}`;
  }
}

const square = new Square(5);
console.log(square.print());
