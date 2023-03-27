/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  print() {
    return `Area: ${this.area}, Perimeter: ${this.perimeter}`;
  }
}

const shape = new Shape(20, 30);
console.log(shape.print());
