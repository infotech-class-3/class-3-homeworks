class Ucgen{
    constructor(x1,y1,x2,y2,x3,y3) {       
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
        this.x3=x3;
        this.y3=y3;

   }   

    cevreHesapla(){ 
  
        this.K1=Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2));
        this.K2=Math.sqrt(Math.pow((this.x3-this.x1),2)+Math.pow((this.y3-this.y1),2));
        this.K3=Math.sqrt(Math.pow((this.x2-this.x3),2)+Math.pow((this.y2-this.y3),2));
        this.cevre=this.K1+this.K2+this.K3;
        console.log("çevre: "+this.cevre);
    }
    alanHesapla(){
        this.s=this.cevre/2;
        this.alan=Math.sqrt(this.s*(this.s-this.K1)*(this.s-this.K2)*(this.s-this.K3));
        console.log("alan: "+this.alan);
    }
}

const yeni =new Ucgen(1,1,5,1,5,5);
yeni.cevreHesapla();
yeni.alanHesapla();