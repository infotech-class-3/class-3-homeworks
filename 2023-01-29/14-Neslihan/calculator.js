        //bir fonksiyon olusturuldu.parametreler girildi.
function calculate(number1, number2, process) {
        //objeye kullanilacak propertyler tanimlandi.
    var deger = {
        sonuc : 0,
        hata1: "Sifir bolme islemi icin kullanilamaz",
        hata2: "lutfen sayi degeri giriniz"
    };

   if (typeof number1 !== "number" || typeof number2 !== "number") {
        return deger.hata2
   }
//farkli bir yontemle veri tipi hatasi tanimlandi.
    // if ( isNaN(number1) || isNaN(number2)) {
    //     return deger.hata2;
    // };

    switch (process) {
        case "toplama":
           deger.sonuc = number1 + number2
            break;

         case "cikarma":
            deger.sonuc = number1 - number2
            break; 

        case "carpma":
            deger.sonuc = number1 * number2
            break; 

        case "bolme":
             //birinci veya ikinci sayi sifira esitse ,sifira bolme hatasi ver
            if (number1 == 0 || number2 == 0 ) {
                return deger.hata1
            }

            else (deger.sonuc = number1 / number2)
            break;

        default:
            deger.sonuc
            break;
    }

    return deger.sonuc;
};

//islem ornekleri
console.log("farkli veri tipi hatasi:", calculate(5,"ayse","toplama"));
console.log("sifira bolme hatasi:", calculate(5,0,"bolme"));
console.log(calculate(5,3,"carpma"));
console.log(calculate(5,3,"cikarma"));

/*
YAPILAN ISLEMLER
-Fonksiyon tanimladi.
-fonksiyon 3 parametre aldi.(sayi1,sayi2,process)
-fonksiyon icine bir switch case olusturuldu.
-bir object tanimlandi.icerisine hata kodlari ve deger,sonuc gibi ozellikler tanimlandi.
- !==  esit degilse demek
- === hem deger hem veri tipini karsilastirir.
- ||  veya demek
- &&  ve demek
- if yazarken girilen degeri sayi olmamasi hatasini >1-veri tipi degeri sayi degilse ile
                                                    >2-Girilen deger sayi degil uyari kodu "isNan' ile yazildi.
-return yazip isteilen sonucu cekince, tekrar console.log ile cagirilmasi gerekmedi.


*/
