class Ucgen {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    cevreHesapla = () => {
      const kenar1 = Math.hypot(this.b.x - this.a.x, this.b.y - this.a.y);
      const kenar2 = Math.hypot(this.c.x - this.b.x, this.c.y - this.b.y);
      const kenar3 = Math.hypot(this.c.x - this.a.x, this.c.y - this.a.y);
      return kenar1 + kenar2 + kenar3;
    };
  
    alanHesapla = () => {
      const cevre = this.cevreHesapla();
      const u = cevre / 2;
      const kenar1 = Math.hypot(this.b.x - this.a.x, this.b.y - this.a.y);
      const kenar2 = Math.hypot(this.c.x - this.b.x, this.c.y - this.b.y);
      const kenar3 = Math.hypot(this.c.x - this.a.x, this.c.y - this.a.y);
      return Math.sqrt(u * (u - kenar1) * (u - kenar2) * (u - kenar3));
    };
  }
  
  const ucgen = new Ucgen({x: 1, y: 1}, {x: 5, y: 1}, {x: 5, y: 4});

// nokta sinifi
/* class Nokta {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const nokta_1 = new Nokta(1, 1);
const nokta_2 = new Nokta(5, 1);
const nokta_3 = new Nokta(5, 4);

// ucgen sinifi

class Ucgen {
  constructor(aNoktasi, bNoktasi, cNoktasi) {
    this.a = aNoktasi;
    this.b = bNoktasi;
    this.c = cNoktasi;
  }

  kenarlar = [];

  //iki nokta araasindaki mesafe
  cevreHesapla = () => {
    this.kenarlar = [];
    this.kenarlar.push(
      Math.sqrt(
        Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
      )
    );

    this.kenarlar.push(
      Math.sqrt(
        Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2)
      )
    );

    this.kenarlar.push(
      Math.sqrt(
        Math.pow(this.c.x - this.b.x, 2) + Math.pow(this.c.y - this.b.y, 2)
      )
    );
    return this.kenarlar.reduce((acc, item) => (acc += item), 0);
  };

  alanHesapla = () => {
    const s = this.cevreHesapla() / 2;
    const sonuc = Math.sqrt(
      s *
        (s - this.kenarlar[0]) *
        (s - this.kenarlar[1]) *
        (s - this.kenarlar[2])
    );

    return sonuc;
  };
}

const ucgen = new Ucgen(nokta_1, nokta_2, nokta_3);
 */

