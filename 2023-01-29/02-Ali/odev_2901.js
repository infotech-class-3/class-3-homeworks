
function hesap(sayi1,sayi2,islem){ // Fonksiyon tanimlandi
    if (isNaN(sayi1)) { // Fonksiyon tanimlandi sayi1 degeri rakam kontrolu yapildi
     hesapla.hata = 'Girilen değerlerden birincisi sayı değil! Hesaplama yapılamadı'; // sayi1 rakam degilse hata degeri yazildi
     return; // islemin ilerlemesi durduruldu
    } 
    else if(isNaN(sayi2)){ // Fonksiyon tanimlandi sayi2 degeri rakam kontrolu yapildi
  hesapla.hata = 'Girilen değerlerden ikincisi sayı değil! Hesaplama yapılamadı'; // sayi2 rakam degilse hata degeri yazildi
  return ;   // islemin ilerlemesi durduruldu
    }
    else if (islem == "bolme" && sayi2 === 0){ // islem bolme ve sayi2 0 olmasi kontrol edildi
            hesapla.hata = 'İkinci sayı sıfır olamaz! Hesaplama yapılamadı'; // sayi2 0 hata degeri yazildi
            return ; //islemin ilerlemesi durduruldu
    }
   if (islem == "bolme") { // girilen isleme gore gerekli matematiksel islemler yapildi ve hesapla Objeckt degiskenine atandi
   hesapla.sonuc = sayi1 / sayi2 ;
   } else if(islem == "topla"){
   hesapla.sonuc = sayi1 + sayi2 ;
   } else if(islem == "carpma"){
    hesapla.sonuc = sayi1 * sayi2 ;
    } else if(islem == "cikarma"){
    hesapla.sonuc = sayi1 - sayi2 ;
    }
 
 }
 let hesapla = { // hesapla Objeckt propetiersleri tanimlandi
    sonuc :"",
    hata : "" 
 };

hesap(32,4,"bolme"); // bolme,topla,carpma,cikarma islemleri girisi buradan yapilir
console.log(hesapla.sonuc); //sonuc ciktisi Console yazildi
console.log(hesapla.hata); //hata ciktisi Console yazildi
