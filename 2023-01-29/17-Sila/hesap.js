/*Basic Calculator 
-> "0/0" ve "sayı/0" için farklı sonuçlar eklendi 
-> işlem değişkenine 4 işlem sembolleri dışında değer verilmesi durumunda uyarı*/

var sonuç= calc(7, 0, "/");
console.log(sonuç);
function calc(a, b, _x) { 
   var sonuç1={
    sonx: "bulunamadı",
    hata: "sayı giriniz"
   };
    switch (_x) {
        case "+":
            sonuç1.sonx= a+b;
            sonuç1.hata= "yok"
            break;
        case "-":
            sonuç1.sonx= a-b;
            sonuç1.hata= "yok"
            break;
        case "*":
            sonuç1.sonx= a*b;
            sonuç1.hata= "yok"
            break;
        case "/":
            sonuç1.sonx= a/b;
            sonuç1.hata= "yok"
            switch (b) {
                case 0:
                    sonuç1.sonx= "sonsuz";
                    sonuç1.hata= "paydaya 0'dan farklı bir değer giriniz" 
                    switch (a) {
                        case 0:
                            sonuç1.sonx= "tanımsız";
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


