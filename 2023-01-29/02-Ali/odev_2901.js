
function hesap(sayi1,sayi2,islem){
    
   if (isNaN(sayi1)) {
     hesapla.hata = 'Girilen değerlerden birincisi sayı değil! Hesaplama yapılamadı';
     return;
    } 
    else if(isNaN(sayi2)){
  hesapla.hata = 'Girilen değerlerden ikincisi sayı değil! Hesaplama yapılamadı';
  return ;
    }
    else if (islem == "division" && sayi2 === 0){
            hesapla.hata = 'İkinci sayı sıfır olamaz! Hesaplama yapılamadı';
            return ;
    }
    switch (islem) {
      case 'division':
         hesapla.sonuc = sayi1 / sayi2 ;
      break;
      case 'addition':
         hesapla.sonuc = sayi1 + sayi2 ;
      break;
      case 'multiplication':
         hesapla.sonuc = sayi1 * sayi2 ;
      break;
      case 'subtraction':
         hesapla.sonuc = sayi1 - sayi2 ;
      break;
      default:
        console.log("Böyle işlem yapamayız! Lütfen 50. satırdaki hesap kısmına kısmına division, addition, multiplication,subtraction işlem adı yazınız");
    }
    
 }
 let hesapla = {
    sonuc :"",
    hata : "" 
 };

hesap(32,4,"division");
console.log(hesapla.sonuc);
console.log(hesapla.hata);