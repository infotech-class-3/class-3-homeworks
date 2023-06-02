import data from "./ürünListesi.js"


export function GetPriceAPI() {

    this.getValue = function(item) {
        console.log("database den veriler aliniyor.");
        //console.log(data);

        const bulunanUrun = data.filter((urun) => urun.type === item);
         return bulunanUrun[0].price;
        
    }
}

