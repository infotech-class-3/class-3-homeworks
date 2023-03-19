class Punkte {
    constructor (x, y) {
        this.x=x
        this.y=y
    }   
    kante (punkte) {
        return Math.sqrt(Math.pow((punkte.x-this.x), 2)+Math.pow((punkte.y-this.y), 2));
    }
}

class Dreieck {
constructor (punk1, punk2, punk3) {
this.punk1 = punk1;
this.punk2 = punk2;
this.punk3 = punk3;


}
umgebung () {
const kante1 = Math.round(this.punk1.kante(this.punk2));
const kante2 = Math.round(this.punk1.kante(this.punk3));
const kante3= Math.round(this.punk2.kante(this.punk3));
return (kante1+kante2+kante3);
}

area () {
    const kante1 = Math.round(this.punk1.kante(this.punk2));
    const kante2 = Math.round(this.punk1.kante(this.punk3));
    const kante3= Math.round(this.punk2.kante(this.punk3));
    const u = (kante1+kante2+kante3)/2;
    return Math.round(Math.sqrt(u*(u-kante1)*(u-kante2)*(u-kante3)));
    }
    }

 const dreieck1 = new Dreieck 
 (new Punkte (1,0), new Punkte (3,0), new Punkte (0,9));

 console.log(dreieck1.umgebung());
 console.log(dreieck1.area());