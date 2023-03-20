class Dot {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const Dot1 = new Dot(1, 1);
const Dot2 = new Dot(5, 1);
const Dot3 = new Dot(5, 4);

class Triangle {
  constructor(DotA, DotB, DotC) {
    this.a = DotA;
    this.b = DotB;
    this.c = DotC;
    this.sides = [];
    this.sides.push(
      Math.sqrt(
        Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
      )
    );

    this.sides.push(
      Math.sqrt(
        Math.pow(this.b.x - this.c.x, 2) + Math.pow(this.b.y - this.c.y, 2)
      )
    );
    this.sides.push(
      Math.sqrt(
        Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2)
      )
    );
  }

  calculatePerimeter = () => {
    return this.sides.reduce((acc, item) => (acc += item), 0);
  };

  calculateArea = () => {
    const s = this.calculatePerimeter() / 2;
    const area = Math.sqrt(
      s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2])
    );
    return area;
  };
}

const triangle = new Triangle(Dot1, Dot2, Dot3);

console.log(`l1 = ${triangle.sides[0]}`); // l1 = 4
console.log(`l1 = ${triangle.sides[1]}`); // l2 = 3
console.log(`l1 = ${triangle.sides[2]}`); // l3 = 5

const perimeter = triangle.calculatePerimeter();
console.log(`Perimeter: ${perimeter}`); // Perimeter: 12

const area = triangle.calculateArea();
console.log(`Area: ${area}`); // Area: 6
