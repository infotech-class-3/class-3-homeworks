// ### soru1: stringin ilk-son karakteri ayni kontrolu yapan FONKSIYON 
var sonuç 
var kelime= "string giriniz"
function kontrol() {   
    if(kelime=="string giriniz"){
        sonuç= "3. satıra string giriniz"
    }
    else if(kelime.charAt(0)==kelime.charAt(kelime.length-1)){
        var sonuç= true
    }
    else if(kelime.slice(0,1)!==kelime.slice(-1)){
        sonuç=false
    }
    return sonuç
}
console.log("soru 1: "+ kontrol());

// ### soru2: Stringi tersine ceviren FONKSIYON
var paragraf="paragraf giriniz";
var step1;
var step2;
var sonuc2;
function ters2() {
    if (paragraf=="paragraf giriniz") {
        sonuc2="19. satıra paragraf giriniz"
    }
    else {
    step1=[...paragraf];
    step2 = step1.reverse();
    sonuc2 = step2.join("")
    }
    return sonuc2
}
console.log("soru 2: "+ ters2());

// ### soru3: KELIMELERIN sirasini tersine ceviren FONKSIYON 
var paragraf2="paragraf giriniz";
var stepA;
var stepB;
var sonuc3;
function ters3() {
    if (paragraf2=="paragraf giriniz") {
        sonuc3="37. satıra paragraf giriniz"
    }
    else {
    stepA= paragraf2.split(" ");
    stepB = stepA.reverse();
    sonuc3 = stepB.join(" ")
    }
    return sonuc3
}
console.log("soru 3: "+ ters3());

var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
var car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

// ### soru4: car_brands dizisinin ilk 5 elemanı
console.log(car_brands.slice(0,5));

// ### soru5: car_brands dizisinin aralarina virgul koyarak yazdiriniz.
console.log("soru 5.1: "+ car_brands.toString());
console.log("soru 5.2: "+ car_brands.join(","));

// ### soru6: car_brands dizisinin son 5 elemanı
console.log(car_brands.slice(-5));

// ### soru7:
// - car_brands dizisinin 3. elemanini console.log ile ekrana yazdiriniz.
// - beklenen sonuc: Audi
console.log("soru 7: "+car_brands[2]);

// ### soru8: ***************
// - bir dizideki verilen indexlerdeki 2 elemanin yerlerini degistiren bir FONKSIYON yaziniz.
// - ornek: degistir(car_brands, 3, 5) => ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Peugeot']


// ### soru9: ************
// - bir dizideki elemanlari tekil yapan bir FONKSIYON yaziniz.
// - (Tekrar eden elemanlari siliniz.)
// - ornek: [1,2,3,3,4,5,5,6] => [1,2,3,4,5,6]

// ### soru10: car_brands + car_brands2. Hem CONCAT hem SPREAD ile
console.log(car_brands.concat(car_brands2))
console.log([...car_brands, ...car_brands2])

// ### soru11:
// - car_brands dizisinin ilk 3 elemanini siliniz. SPLICE ve SLICE ile
car_brands.splice(0, 3)
console.log(car_brands);
var car_brands_new = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
console.log(car_brands_new.slice(3, car_brands_new.length));