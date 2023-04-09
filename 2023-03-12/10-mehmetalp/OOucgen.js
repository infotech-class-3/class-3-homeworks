/* # Koordinat sisteminde verilen ücgenin cevresi ve alan hesaplamalarinin yapilmasi

- class Nokta()
- class Ucgen()

## output

- const ucgen_1 = new Ucgen(......);
- ucgen_1.cevreHesapla() // 24
- ucgen_1.alanHesapla() // 36

- iki nokta arasi uzaklik formulu
- https://www.wikihow.com.tr/%C4%B0ki-Nokta-Aras%C4%B1ndaki-Mesafe-Nas%C4%B1l-Bulunur

- ucgen alaninin hesaplanmasi
  https://www.britannica.com/science/Herons-formula

### ÖNEMLI!!

- Javascript Karekök alma fonksiyonu : ` Math.sqrt(9) // 3`
- Javascript Üs alma fonksiyonu : ` Math.pow(4) // 16` */

class Nokta{
    constructor(x=0,y=0){// default degerler
        this.x = x;
        this.y = y;
    }
}

const nokta_1 = new Nokta(1,1);
const nokta_2 = new Nokta(5,1);
const nokta_3 = new Nokta(5,4);

class Ucgen{
    constructor(aNoktasi, bNoktasi, cNoktasi) {
        this.a = aNoktasi;
        this.b = bNoktasi;
        this.c = cNoktasi;
        //2. alternatif 
        //Direk ucgen olustururken kenarlarin da olusmasi ve cevreHesabi methodunu sadelestirmis oluyoruz  
        /* this.kenarlar = []; 
            this.kenarlar.push(
                Math.sqrt(
                Math.pow(this.a.x - this.b.x,2) + Math.pow(this.a.y - this.b.y,2)
                )
            );
            this.kenarlar.push(
                Math.sqrt(
                    Math.pow(this.b.x - this.c.x,2) + Math.pow(this.b.y - this.c.y,2)
                    )
            ); 
            this.kenarlar.push(
                Math.sqrt(
                        Math.pow(this.a.x - this.c.x,2) + Math.pow(this.a.y - this.c.y,2)
                        )
            );  */

       
    }
    kenarlar = [];// yukaridaki 2. alternatif yazilirken, bu ifade olmayacak!!!

    cevreHesabi = () => {
        this.kenarlar = [];// bos almaliyiz ki uzunluklari kenar dosayasina eklemeye devam etmesin
        this.kenarlar.push(
            Math.sqrt(
            Math.pow(this.a.x - this.b.x,2) + Math.pow(this.a.y - this.b.y,2)
            )
        );
        this.kenarlar.push(
            Math.sqrt(
                Math.pow(this.b.x - this.c.x,2) + Math.pow(this.b.y - this.c.y,2)
                )
        ); 
        this.kenarlar.push(
            Math.sqrt(
                    Math.pow(this.a.x - this.c.x,2) + Math.pow(this.a.y - this.c.y,2)
                    )
        ); 

        return this.kenarlar.reduce((acc,kenar) => acc = acc + kenar, 0);
    }

    alanHesabi = () => {

            const s = this.cevreHesabi() / 2;
            const sonuc = Math.sqrt(s*(s-this.kenarlar[0])*(s-this.kenarlar[1])*(s-this.kenarlar[2]));
        
            return sonuc;
    }

}

const ucgen = new Ucgen(nokta_1, nokta_2, nokta_3);

