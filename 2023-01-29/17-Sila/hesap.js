// Hesap makinesi
var a;
var b;
var x;

a = 4
b = 3
x = "+"


var toplam= {
    sonuç: a+b,
    not: "işlem başarili"
    }
var fark= {
    sonuç: a-b,
    not: "işlem başarili"
    }
var çarpım= {
    sonuç: a*b,
    not: "işlem başarili"
    }
var bölüm= {
    sonuç: a/b,
    not: "işlem başarili"
    }
var hata={
    sonuç: "bulunamadı",
    not: "sayı giriniz"
}
if (x == "+") {
    console.log(toplam)
    }
else if (x == "-") { 
    console.log(fark)
    }
else if (x == "*") {  
    console.log(çarpım)
    }
else if (x == "/") { 
    console.log(bölüm)
    }

if (a==Number & b==Number ) {
    
    console.log(toplam)
}
else if(a== String||b==String) {
    console.log(hata);
}


