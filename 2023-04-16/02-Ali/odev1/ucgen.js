export class Ucgen {
    constructor(aNoktasi, bNoktasi, cNoktasi) {
      this.a = aNoktasi;
      this.b = bNoktasi;
      this.c = cNoktasi;
    }
      kenarlar = [];

    cevreHesapla = () => {

      this.kenarlar.push(
        Math.sqrt(
          Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
        )
      );
  
      this.kenarlar.push(
        Math.sqrt(
          Math.pow(this.b.x - this.c.x, 2) + Math.pow(this.b.y - this.c.y, 2)
        )
      );
  
      this.kenarlar.push(
        Math.sqrt(
          Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2)
        )
      );
      return this.kenarlar.reduce((acc, item) => (acc += item), 0);

    };



  

  alanHesapla = () => {
    const s = this.cevreHesapla() / 2;
    return Math.sqrt(
      s *
        (s - this.kenarlar[0]) *
        (s - this.kenarlar[1]) *
        (s - this.kenarlar[2])
    );

        };
}
