
function hesapla(sayi1, sayi2, islem) {
    result = {hata: null, sonuc: null, sayi1: sayi1, sayi2: sayi2, islem: islem};

    
    // islem + - * /
    if (islem != "+" && islem != "-" && islem != "*" && islem != "/") {
        result.hata = "İşlem + - * / olmalıdır.";
        return result;
    }

    if (typeof sayi1 != "number" || typeof sayi2 != "number") {
        result.hata = "Sayılar sayı olmalıdır.";
        return result;
    }

    // if (islem == "+") {
    //     result.sonuc = sayi1 + sayi2;
    // } else if (islem == "-") {
    //     result.sonuc = sayi1 - sayi2;
    // } else if (islem == "*") {
    //     result.sonuc = sayi1 * sayi2;
    // } else if (islem == "/") {
    //     if (sayi2 == 0) {
    //         result.hata = "Bir sayı 0'a bölünemez.";
    //         return result;
    //     }
    //     result.sonuc = sayi1 / sayi2;
    // }

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
            if (sayi2 == 0) {
                result.hata = "Bir sayı 0'a bölünemez.";
            } else {
                result.sonuc = sayi1 / sayi2;
            }
            break;
        default:
            result.hata = "İşlem + - * / olmalıdır.";
    }
       

    return result;
}

// sonuc = hesapla(1, 2, "+");
// console.log(sonuc);

// sonuc_sayi_degil = hesapla(1, "a", "+");
// console.log(sonuc_sayi_degil);

// sonuc_sayi_degil = hesapla("s1", 5, "/");
// console.log(sonuc_sayi_degil);

// carpma_sonuc = hesapla(5, 5, "*"); // 25
// console.log(carpma_sonuc);

// bolme_sonuc = hesapla(5, 0, "/"); // 0
// console.log(bolme_sonuc);


///// parametresiz fonksiyon ornekleri

// sayi1 = 1;
// sayi2 = 2;
// islem = "+";

// function topla() {
//     return sayi1 + sayi2;
// }

// function cikar() {
//     sonuc = sayi1 - sayi2;
//     return `${sayi1} - ${sayi2} = ${sonuc}`;
// }

// toplama_sonucu = topla()
// console.log(toplama_sonucu);


// cikar_sonucu = cikar();
// console.log(cikar_sonucu);

////// prompt ornegi

// prompt_sayi1 = Number(prompt("Sayı1 giriniz: "))
// prompt_sayi2 = Number(prompt("Sayı2 giriniz: "))
// islem = prompt("İşlem giriniz: ")

// promt_sonuc = hesapla(prompt_sayi1, prompt_sayi2, islem);

// if (promt_sonuc.hata) {
//     console.log(promt_sonuc.hata);
//     alert(promt_sonuc.hata);    
// } else {
//     console.log(promt_sonuc.sonuc);
//     alert(promt_sonuc.sonuc);
// }



