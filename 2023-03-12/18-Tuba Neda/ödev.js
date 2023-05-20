//Ücgen ödevi
class Nokta {
    constructor(x=0, y=0){ //methodda hic deger atanmadiginda 0|0 yani origin noktasini default olarak alacak
        this.x = x;
        this.y = y;
    }
}

const nokta_1 = new Nokta(1, 1);
const nokta_2 = new Nokta(5, 1);
const nokta_3 = new Nokta(5, 4);
//burada yukaridaki classtan yani bir nevi "kaliptan" 3 adet nokta olusturduk
class Ucgen {
    constructor(aNoktasi, bNoktasi, cNoktasi){
        this.a = aNoktasi;
        this.b = bNoktasi;
        this.c = cNoktasi;
        
        this.kenarlar.push(
            Math.sqrt(
              Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
              )
            )
            this.kenarlar.push(        
            Math.sqrt(
              Math.pow(this.b.x - this.c.x, 2) + Math.pow(this.b.y - this.c.y, 2)
              )
            )
            this.kenarlar.push(
            Math.sqrt(
              Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2)
              )
            ) 
    }
    kenarlar = [];

    cevreHesapla = () => {
        return this.kenarlar.reduce((acc, item) => (acc += item), 0); //kenar uzunluklarini topladi  
        };

    alanHesapla = () => {
        const s = this.cevreHesapla() /2
        const sonuc = Math.sqrt(s * 
            (s - this.kenarlar[0]) * 
            (s - this.kenarlar[1]) * 
            (s - this.kenarlar[2]) 
        );
        return sonuc; 
    }; 
}

const ucgen = new Ucgen(nokta_1, nokta_2, nokta_3); 
//yukarda olusturdugumuz uc noktayi ucgen classindaki a b ve c noktalari yaptik

//Kronometre ödevi

function Kronometre(){
    let startTime = 0;
    let endTime = 0;
    let duration = 0;
    let isRunning = false;

    this.basla = function () {
        if (isRunning) {
             throw new Error('Zaten calisiyor...');
        } else {
        isRunning = true;
        startTime = new Date();
        }
    };//throw return gibi altindaki hicbir seyi calistirmaz

    this.dur = function () {
        if (!isRunning) throw new Error('Daha calismadi ki dursun...');
        isRunning = false;
        endTime = new Date();

        duration = (endTime.getTime() - startTime.getTime()) / 1000;
    };
    this.sifirla = function(){
        startTime = 0;
        endTime = 0;
        duration = 0;
        isRunning = false;
    };
    Object.defineProperty(this, "sonuc", {
        get: function() {
            return duration + " sn";
        },
    });
}

const kron = new Kronometre();