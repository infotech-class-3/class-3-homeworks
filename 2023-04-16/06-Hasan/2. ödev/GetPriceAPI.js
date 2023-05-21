import data from "./urunListesi.js";
export function GetPriceAPI() {
    this.getValue = function (item) {
      console.log("Veritabanindan bilgiler cekiliyor...");
      const bulunanUrun = data.filter((urun)=>urun.type==item);
      return bulunanUrun[0].price;
    };
  }