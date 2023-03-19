class Nokta {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    distance(point) {
      //console.log(point);
      return Math.sqrt(
        Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)
      );
    }
  }
  
  class Triangle {
    constructor(point1, point2, point3) {
      // console.log(point1, point2, point3);
      this.point1 = point1;
      this.point2 = point2;
      this.point3 = point3;
  
      this.dab = Math.round(point1.distance(point2));
      this.dac = Math.round(point1.distance(point3));
      this.dbc = Math.round(point2.distance(point3));
      // console.log(this.dab);
      // console.log(this.dac);
      // console.log(this.dbc);
    }
  
    a = this.dab;
    b = this.dbc;
    c = this.dac;
  
    calculatePerimeter() {
      if (
        (this.a + this.b > this.c &&
          this.a + this.c > this.b &&
          this.b + this.c > this.a) ||
        (Math.abs(this.a - this.b) < this.c &&
          Math.abs(this.a - this.c) < this.c &&
          Math.abs(this.b - this.c) < this.a)
      ) {
        console.log(this.dab + this.dac + this.dbc);
      } else {
        console.log(
          "Cannot create a triangle with the entered lengths. Therefore the circumference cannot be calculated."
        );
      }
    }
  
    calculateArea() {
      if (
        this.a + this.b > this.c &&
        this.a + this.c > this.b &&
        this.b + this.c > this.a &&
        Math.abs(this.a - this.b) < this.c &&
        Math.abs(this.a - this.c) < this.c &&
        Math.abs(this.b - this.c) < this.a
      ) {
        const u = (this.dab + this.dac + this.dbc) / 2;
        console.log(u);
  
        console.log(
          Math.sqrt(u * (u - this.dab) * (u - this.dac) * (u - this.dbc))
        );
      } else {
        console.log(
          "Cannot create a triangle with the entered lengths. Therefore the area cannot be calculated."
        );
      }
    }
  }
  
  const triangle1 = new Triangle(
    new Nokta(2, 5),
    new Nokta(2, 5),
    new Nokta(5, 9)
  );
  triangle1.calculatePerimeter();
  triangle1.calculateArea();
  