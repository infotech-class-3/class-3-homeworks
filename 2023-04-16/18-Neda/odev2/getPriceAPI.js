import data from './urunListesi.js':

export function GetPriceAPI() {
    this.getValue = function (item) {
      console.log("Veritabanindan bilgiler cekiliyor...");
//      console.log(data);

    //const bulunanUrun = data.filter((urun)=> urun.type === item);
    const bulunanUrun = data.find((urun)=> urun.type === item);

    //return bulunanUrun[0].price; //filter array döndürür    
    return bulunanUrun.price; // find object döndürür

};
}
