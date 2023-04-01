class Nokta {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const nokta_1 = new Nokta(1, 1);
const nokta_2 = new Nokta(5, 1);
const nokta_3 = new Nokta(5, 4);

class Ucgen {
  constructor(aKenar, bKenar, cKenar) {
    this.a = aKenar;
    this.b = bKenar;
    this.c = cKenar;
  }

  kenarlar = [];

  cevreHesapla = () => {
    this.kenarlar.push(
      Math.sqrt(
        Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
      )
    );

    this.kenarlar.push(Math.sqrt(Math.pow(5 - 5, 2) + Math.pow(4 - 1, 2)));

    this.kenarlar.push(Math.sqrt(Math.pow(5 - 1, 2) + Math.pow(4 - 1, 2)));

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
