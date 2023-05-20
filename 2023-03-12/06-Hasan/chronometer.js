

class Kronometre{
    constructor() {       
       this.isStop=false;
        this.isStart=false;
        this.basla();
      
   }   
 
basla(){  
   if(!this.isStart){
    this.start = new Date();    
    this.dakika=this.start.getMinutes();
    this.saniye=this.start.getSeconds();
    this.salise=this.start.getMilliseconds();        
    this.top=this.dakika*1000+this.saniye+(0.001*this.salise);
    this.isStart=true;
   }
   else{
    console.log("Zaten çalışıyor");
   }
}
dur(){
    if(!this.isStop){ 
    this.now = new Date();   
     this.dakika2=this.now.getMinutes();
     this.saniye2=this.now.getSeconds();
     this.salise2=this.now.getMilliseconds();      
     this.top2=this.dakika2*1000+this.saniye2+(0.001*this.salise2);
     this.sonuc=this.top2-this.top;
     this.isStop=true;
    }
    else{
        console.log("Çalışmıyorki dursun!");
    }
    }
sonuc={    
    yaz: () => console.log(this.sonuc + " ms")
}
 

sifirla(){
    this.sonuc=0;  
    console.log("zaman sıfırlandı: "+this.sonuc);
}

}

const timer = new Kronometre()
