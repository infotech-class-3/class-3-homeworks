// ### soru1
var sonuç 
var kelime= "string giriniz"
function kontrol() {   
    if(kelime=="string giriniz"){
        sonuç= "string giriniz"
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

// ### soru2: *******
// - Verilen bir stringi tersine ceviren bir FONKSIYON yaziniz
// - Ornek sonuc: 'bugun hava cok guzel' -> 'lezug koc avah nugub'
console.log([...kelime])
// ### soru3: *************
// - Verilen bir stringdeki KELIMELERIn sirasini tersine ceviren bir FONKSIYON yaziniz
// - ornek: 'lorem ipsum dolor sit amet' -> 'tema sit dolor ipsum lorem'
///// S-split
console.log(kelime.split(" "));



var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
var car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

// ### soru4: *************
// - car_brands dizisinin ilk 5 elemanını console.log ile ekrana yazdırınız.
// - beklenen sonuc: ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel']

// ### soru5: car_brands dizisinin aralarina virgul koyarak yazdiriniz.
console.log("soru 5.1: "+ car_brands.toString());
console.log("soru 5.2: "+ car_brands.join(","));

// ### soru6: ***********
// - car_brands dizisinin son 5 elemanini console.log ile ekrana yazdiriniz.
// - beklenen sonuc: [ 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot' ]

// ### soru7:
// - car_brands dizisinin 3. elemanini console.log ile ekrana yazdiriniz.
// - beklenen sonuc: Audi
console.log(car_brands[2]);
// ### soru8: ***************
// - bir dizideki verilen indexlerdeki 2 elemanin yerlerini degistiren bir FONKSIYON yaziniz.
// - ornek: degistir(car_brands, 3, 5) => ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Peugeot']

// ### soru9: ************
// - bir dizideki elemanlari tekil yapan bir FONKSIYON yaziniz.
// - (Tekrar eden elemanlari siliniz.)
// - ornek: [1,2,3,3,4,5,5,6] => [1,2,3,4,5,6]

// ### soru10: car_brands dizisinin sonuna car_brands2 dizisinin elemanlarini ekleyiniz. CONCAT ve SPREAD operatoru ile ayri ayri yapiniz.
console.log(car_brands.concat(car_brands2))
console.log([...car_brands, ...car_brands2])

// ### soru11:
// - car_brands dizisinin ilk 3 elemanini siliniz. ayni islemi SPLICE ve SLICE ile ayri ayri yapiniz.
// - beklenen sonuc : ['Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands.splice(0, 3)
console.log(car_brands);
var car_brands_new = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
console.log(car_brands_new.slice(3, car_brands_new.length));