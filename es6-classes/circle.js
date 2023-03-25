/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    return `${super.print()}, Radius: ${this.radius}`;
  }
}
const circle = new Circle(3);
console.log(circle.print());
