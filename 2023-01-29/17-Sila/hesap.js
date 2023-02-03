// Hesap makinesi //
var a;
var b;
var x;

// a = 4
// b = 3
// x = "+"

// var sonuç={
//     işlemSonucu: "?",
//     hata: "?"
// }

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
            break;
        default:
            sonuç1.hata= "4 işlem sembollerinden birini 3. değişkene tırnak işarei içinde giriniz"
            break;
    }
return sonuç1
}
var sonuç= calc(3, 5, "*");
console.log(sonuç);




// var toplam= {
//     sonuç: a+b,
//     not: "işlem başarili"
//     }
// var fark= {
//     sonuç: a-b,
//     not: "işlem başarili"
//     }
// var çarpım= {
//     sonuç: a*b,
//     not: "işlem başarili"
//     }
// var bölüm= {
//     sonuç: a/b,
//     not: "işlem başarili"
//     }
// var hata={
//     sonuç: "bulunamadı",
//     not: "sayı giriniz"
// }
// if (x == "+") {
//     console.log(toplam)
//     }
// else if (x == "-") { 
//     console.log(fark)
//     }
// else if (x == "*") {  
//     console.log(çarpım)
//     }
// else if (x == "/") { 
//     console.log(bölüm)
//     }

// if (a==Number & b==Number ) {
    
//     console.log(toplam)
// }
// else if(a== String||b==String) {
//     console.log(hata);
// }

// if (x=="+") {
//     sonuç= {
//         işlemSonucu: a+b,
//         hata: "yok"
//     }
// } else {
    
// }



    // switch (sonuç) {
    //     case x="+":
    //     sonuç.işlemSonucu = "a+b"
    //     sonuç.hata = "yok"
    //         break;
    //     case x="-":
    //     sonuç = a-b    
    //         break;
    //     case çarpim:
            
    //         break;
    //     case bölüm:
            
    //         break;
    //     default:
    //         break;
    // }