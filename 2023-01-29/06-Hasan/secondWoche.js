function hesapla(sayi1, sayi2, islem){
    let sonuc;
    if(islem== "+"){
        sonuc=sayi1+sayi2;
    }
    else if(islem== "-"){
        sonuc=sayi1-sayi2;
    }
    else if(islem== "*"){
        sonuc=sayi1*sayi2;
    }
    else if(islem== "/"){
        sonuc=sayi1/sayi2;
    }
    else {
        alert("Yapmak istediğiniz işlemi konrol ediniz! Yanlış giriş yaptınız.");
    }
    
    
    //alert("sonuc: "+sonuc);

    if(islem=="/" && sayi2==0){
    alert("Dikkat: Bölme işleminde bölüm 0 olamaz!"); 
    }  
    if(isNaN(sayi1) || isNaN(sayi2)){
        alert("Dikkat: Hesaplama yapmak için bir sayı girmelisiniz.");
    } 
    else   
    alert("sonuc: "+sonuc);
}

let devam=true;
while(devam){
    devam=false;   
    let ilk=prompt("Yapmak istediğiniz işlem için ilk sayıyı giriniz!");
    ilk=parseFloat(ilk);  

    let ikinci=prompt("Yapmak istediğiniz işlem için ikinci sayıyı giriniz!");
    ikinci=parseFloat(ikinci);
      
    let istek=prompt("Yapmak istediğiniz işlemi giriniz ( + , - , / , * )");
    hesapla(ilk,ikinci,istek);

    let soru = confirm("YENİ BİR İŞLEM YAPMAK İSTER MİSİNİZ?");   
    if (soru==true)
        devam=true;   
}


