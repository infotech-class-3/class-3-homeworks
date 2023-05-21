const ürünler= require("./urunlerListesi")

function GetPriceAPI() {
    console.log("Veritabanindan bilgiler cekiliyor...");   
    console.log(ürünler.getValue);
};
module.exports = {GetPriceAPI};