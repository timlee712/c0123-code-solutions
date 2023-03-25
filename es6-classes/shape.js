/* exported Shape */

class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `Area: ${this.area}, Circumference: ${this.circumference}`;
  }
}

const shape = new Shape(20, 30);
console.log(shape.print());
