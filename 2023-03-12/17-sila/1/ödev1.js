class Nokta {
    constructor(x,y) {
        this.yatay = x
        this.dikey = y
    }
} 

const köşe_1=new Nokta(1,1);
const köşe_2=new Nokta(5,4);
const köşe_3=new Nokta(5,1);

class Ucgen {
    constructor(a,b,c) {
        this.angle_1 = a
        this.angle_2 = b
        this.angle_3 = c
    }
    cevreHesapla(){
        var x=this.angle_1.yatay-this.angle_2.yatay
        var y=this.angle_1.dikey-this.angle_2.dikey
        var z= x*x+y*y
        var a=this.angle_1.yatay-this.angle_3.yatay
        var b=this.angle_1.dikey-this.angle_3.dikey
        var c= a*a+b*b
        var k=this.angle_3.yatay-this.angle_2.yatay
        var l=this.angle_3.dikey-this.angle_2.dikey
        var m= k*k+l*l
        var sonuç=z**(1/2)+c**(1/2)+m**(1/2)
        return console.log(sonuç)
    }
    alanHesapla(){
        var x=this.angle_1.yatay-this.angle_2.yatay
        var y=this.angle_1.dikey-this.angle_2.dikey
        var z= x*x+y*y
        var a=this.angle_1.yatay-this.angle_3.yatay
        var b=this.angle_1.dikey-this.angle_3.dikey
        var c= a*a+b*b
        var k=this.angle_3.yatay-this.angle_2.yatay
        var l=this.angle_3.dikey-this.angle_2.dikey
        var m= k*k+l*l
        var s=z**(1/2)+c**(1/2)+m**(1/2)
        var u=s/2
        var sonuç=u*(u-z**(1/2))*(u-c**(1/2))*(u-m**(1/2))
        return console.log(sonuç**(1/2))
    }
} 
const üçgen_1 = new Ucgen(köşe_1,köşe_2,köşe_3)
üçgen_1.cevreHesapla();
üçgen_1.alanHesapla();
