import data from "./ürünListesi.js"


export function GetPriceAPI() {
        this.getValue = function (item) {
          console.log("Veritabanından bilgiler çekiliyor...");

        const bulunanUrun= data.filter((urun)=> urun.type === item);

        return bulunanUrun[0].price;
 };
}