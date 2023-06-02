export class Ucgen{
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