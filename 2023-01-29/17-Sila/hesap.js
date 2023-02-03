/*Basic Calculator 
-> "0/0" ve "sayı/0" için farklı sonuçlar eklendi 
-> işlem değişkenine 4 işlem sembolleri dışında değer verilmesi durumunda uyarı
-> sayı değişkenlerine number dışında değer verilmesi durumunda uyarı*/
var a;
var b;
var _x;
/* Hesap makinesini kullanmak için aşağıdaki yorum satırlarını aktif hale getirerek istediğiniz değerleri giriniz*/
// a="sayi değeri";
// b="sayi değeri";
// _x="+ - * /";
function calc(a, b, _x) { 
    var sonuç1={
    işlem_sonucu: "bulunamadı",
    hata: "sayı giriniz"
   };
    switch (_x) {
        case "+":
            sonuç1.işlem_sonucu= a+b;
            sonuç1.hata= "yok"
            break;
        case "-":
            sonuç1.işlem_sonucu= a-b;
            sonuç1.hata= "yok"
            break;
        case "*":
            sonuç1.işlem_sonucu= a*b;
            sonuç1.hata= "yok"
            break;
        case "/":
            sonuç1.işlem_sonucu= a/b;
            sonuç1.hata= "yok"
            switch (b) {
                case 0:
                    sonuç1.işlem_sonucu= "sonsuz";
                    sonuç1.hata= "paydaya 0'dan farklı bir değer giriniz" 
                    switch (a) {
                        case 0:
                            sonuç1.işlem_sonucu= "tanımsız";
                            sonuç1.hata= "0 değeri 0'a bölünmez"
                            break;
                    
                        default:
                            break;
                    }                   
                    break;
                
            
                default:
                    break;
            }
            break;
        default:
            sonuç1.hata= "4 işlem sembollerinden birini 3. değişkene tırnak işarei içinde giriniz"
            break;
    }
    
return sonuç1
}
var sonuç= calc(a,b, _x);
var hatakodu={
    işlem_sonucu: "bulunamadı",
    hata: "sayı giriniz"
   };
if (typeof a=="number" && typeof b=="number") {
    console.log(sonuç);
} else {
    console.log(hatakodu)
}