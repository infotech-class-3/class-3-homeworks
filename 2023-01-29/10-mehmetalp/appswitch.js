/* Hesap Makinesi

- bir adet fonksiyon yaziniz. 3 parametre alsın . (sayi1 , sayi2 , islem)
- hata kontrolü (matematiksel işlemlerde nasıl hatalar çıkabilecekse onlar)

output:

dönüş değeri : object
Objenin propertileri
 - sonuc
 - hata */

 function hesapla(sayi1, sayi2, islem) {
    result = {hata:null, sonuc:null};

    //if (islem != "+" && islem != "-" && islem != "*" && islem != "/" ) {
     //   result.hata = "islem +-*/ secilmelidir.";
     //   return result;
     //   }

    if (typeof(sayi1) != "number" || typeof(sayi2) != "number") {
        result.hata = "sayilar number olmali.";
        return result;
    }

    //else if ile islemler
        /* if (islem == "+") {
            result.sonuc = sayi1 + sayi2;
        }else if(islem == "-"){
            result.sonuc = sayi1 - sayi2;
        }else if(islem == "*"){
            result.sonuc = sayi1 * sayi2;
        }else if(islem == "/"){
            if(sayi2 == 0){
                result.hata = "sayi sifira bölünemez";
                return result;
            }
            result.sonuc = sayi1 /sayi2;
        } */

    // switch ile islemler
    
    switch (islem) {
        case "+":
            result.sonuc = sayi1 + sayi2;
            break;
        case "-":
            result.sonuc = sayi1 - sayi2;
            break;

        case "*":
            result.sonuc = sayi1 * sayi2;
            break;
        case "/":
            if(sayi2 == 0){
                result.hata = "sayi sifira bölünemez";
            }else{
                result.sonuc = sayi1 / sayi2;
            }
            break;        
        default:
            result.hata = "islem +-*/ secilmelidir.";
    }
    
    return result;

 }

 sonuc = hesapla(1, 4, "+");
 console.log(sonuc);

 sonuc_sayi_degil = hesapla(2, "a", "-");
 console.log(sonuc_sayi_degil);

 sonuc_sayi_degil = hesapla("b", 3, "-");
 console.log(sonuc_sayi_degil);

 carpma_sonuc = hesapla(2, 6, "*");
 console.log(carpma_sonuc);

 bolum_sonuc = hesapla(2, 0, "/");
 console.log(bolum_sonuc);