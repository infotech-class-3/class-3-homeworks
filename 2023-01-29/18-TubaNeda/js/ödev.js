function hesapla(sayi1,sayi2,islem){
var deger = {
    sonuc : 0,
    hata1 : "Sayi degeri giriniz!",
    hata2 : "Sayi2 0 degerini alamaz!"
};
if (typeof sayi1 !== "number" ||typeof sayi2 !== "number" ) {    
return deger.hata1
}
    
switch (islem) {
    case "topla":
        deger.sonuc = sayi1 + sayi2
        
        break;

    case "cikar":
        deger.sonuc = sayi1 - sayi2
            
        break;

    case "carp":
        deger.sonuc = sayi1 * sayi2
            
        break;

    case "böl":
        if (sayi2 == 0) {
            return deger.hata2
            
        } else {
                
        deger.sonuc = sayi1 / sayi2
        }    
        break;
                
    default:
        deger.sonuc
        break;
}
    return deger.sonuc
}
console.log("Toplama islemi sonucu:", hesapla(3,2,"topla"))
console.log("Cikarma islemi sonucu:", hesapla(3,2,"cikar"))
console.log("Carpma islemi sonucu:", hesapla(3,2,"carp"))
console.log("Bölme islemi sonucu:", hesapla(6,2,"böl"))

console.log("Sifira bölme hatasi:", hesapla(6,0,"böl"))
console.log("Farkli veri tipi hatasi:", hesapla("alti",2,"böl"))
