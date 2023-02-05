var sonuc = function(a, b, secim) 
{
    switch(secim) {
        case 'toplama':
            return a + b;
        break;
        case 'cikarma':
            return a - b;
        break;
        case 'carpma':
            return a * b;
        break;
        case 'bolme':
            return a / b;
        break;
    }
};

var a = parseInt(prompt("Lütfen Birinci Sayıyı Giriniz : "));
var b = parseInt(prompt("Lütfen İkinci Sayıyı Giriniz : "));

if ((isNaN(a)) || (isNaN(b)))  
    { 
      alert("İşlemin Yapılabilmesi İçin Sayı Girmelisiniz !!!");
    }
else 
    {
    console.log("İki Sayının Toplamının Sonucu = ", sonuc(a, b, 'toplama')); 
    console.log("İki Sayının Farkının Sonucu = ", sonuc(a, b, 'cikarma'));
    console.log("İki Sayının Çarpımının Sonucu = ", sonuc(a, b, 'carpma'));
    console.log("İki Sayının Bölümünün Sonucu = ", sonuc(a, b, 'bolme'));
    }
