function hesapla(sayi1,sayi2,islem){
var deger = {
    sonuc : 0,
    hata : "Sayi degeri giriniz!"
};
if (typeof sayi1 !== "number" ||typeof sayi2 !== "number" ) {
console.log(deger.hata)        
}
    
switch (islem) {
    case "topla":
        var toplama = sayi1 + sayi2
        console.log(toplama)
        
        break;

    case "cikar":
        var cikarma = sayi1 - sayi2
        console.log(cikarma)
            
        break;

    case "carp":
        var carpma = sayi1 * sayi2
        console.log(carpma)
            
        break;

    case "böl":
        if (sayi2 == 0) {
            error = console.log("2. Sayi 0 degerini alamaz.")
            return error
            
        } else {
                
        var bölme = sayi1 / sayi2
        console.log(bölme)
        }    
        break;
                
    default:
        break;
}
}
hesapla(3,2,"cikar")