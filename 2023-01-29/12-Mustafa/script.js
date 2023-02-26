function number(number1,number2,islem){

    if (isNaN(number1)) {
     hesapla.hata = '1. girilen değer sayı olmalı işlem başarısız';
     return;
    } 

    else if(isNaN(number2)){
  hesapla.hata = '2. girilen değer sayı olmalı işlem başarısız';
  return ;
    }

    else if (islem == "division" && number2 === 0){
            hesapla.hata = '2.Sayı sıfır olamaz!! işlem geçersiz';
            return ;
    }


    switch (islem) {
        case 'division':
           hesapla.sonuc = number1 / number2 ;
        break;
        case 'addition':
           hesapla.sonuc = number1 + number2 ;
        break;
        case 'multiplication':
           hesapla.sonuc = number1 * number2 ;
        break;
        case 'subtraction':
           hesapla.sonuc = number1 - number2 ;
        break;
        default:
          console.log("işlem başarısız dört işlemden birini seçiniz");
      }

}
let hesapla = {
    sonuc :"",
    hata : "" 
 };

number(10,2,"division");
console.log(hesapla.sonuc);
console.log(hesapla.hata);




