class Point{
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
}
// x ve y  ye 0 degeri yazdik ama bu sadece bir deger girilmezse tanimsiz olmasin orijinde olsun diye.

//class isimleri buyuk harfle baslar.

//constructior methodu=bu siniftan nesne turettigimiz zaman ilk calisan,hic mudahaleye gerek kalmadan calisan method

//this.x=x parametre ile gelen x 

//const point_1 =new PointerEvent(1,5);
const point_1 = new Point(1,1)
const point_2 = new Point(5,1)
const point_3 = new Point(5,4)

class Triangle{
    constructor (aPoint, bPoint, cPoint) {
        this.a = aPoint;
        this.b = bPoint;
        this.c= cPoint;

        this.sides = [];
        this.sides.push(
            Math.sqrt(Math.pow(this.b.x - this.a.x,2) + Math.pow(this.b.y - this.a.y, 2)
          )
        );
       
        this.sides.push(
            Math.sqrt(
                Math.pow(this.b.x - this.c.x,2) + Math.pow(this.b.y - this.c.y,2) 
                )
        );

        this.sides.push(
            Math.sqrt(
                Math.pow(this.c.x - this.a.x,2) + Math.pow(this.c.y - this.a.y,2) 
                )
        );
    }
    
    calculatePerimeter = ()  => {
        return this.sides.reduce((acc,item)=> (acc += item), 0);
    };

    calculateArea = () => {
        const s = this.calculatePerimeter() / 2;
        const result = Math.sqrt(
            s *
            (s - this.sides[0])*
            (s - this.sides[1])*
            (s - this.sides[2])*
        );

        return result;
    };
}

const triangle = new Triangle( point_1, point_2,point_3);



