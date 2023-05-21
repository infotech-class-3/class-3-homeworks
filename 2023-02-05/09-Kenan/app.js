/* 
    soru1: 
    Verilen bir stringin ilk ve son karakteri ayni kontrolu yapan bir FONKSIYON yaziniz
    boolean(true/false) dondurmeli
    ornek: 'abcba' -> true
    ornek: 'abcde' -> false 
*/

function aynimiString(karakter)
    {
    console.log("Soru:1- Ilk ve son karakteri ayni kontrolu :", (karakter[0] == karakter[karakter.length-1]));
    }
    aynimiString("abcba");
    aynimiString("abcde");

/* 
    soru2:
    Verilen bir stringi tersine ceviren bir FONKSIYON yaziniz
    Ornek sonuc: 'bugun hava cok guzel' -> 'lezug koc avah nugub'
*/

function metinTersYazdir(metin) 
    {
    return metin.split("").reverse().join("");
    }
    console.log("Soru:2- Ters çevrilmesi istenen metin :","bugun hava cok guzel");
    console.log("Soru:2- Ters çevrilmiş hali :",metinTersYazdir("bugun hava cok guzel"));

/*  soru3:
    Verilen bir stringdeki KELIMELERIn sirasini tersine ceviren bir FONKSIYON yaziniz
    ornek: 'lorem ipsum dolor sit amet' -> 'amet sit dolor ipsum Lorem'
*/

function wordTersYazdir(word) 
    {
    return word.split(" ").reverse().join(" ");
    }
    console.log("Soru:3- Kelimelerinin sırasının tersine çevrilmesi istenen metin:","lorem ipsum dolor sit amet");
    console.log("Soru:3- Kelimelerinin sırası tersine çevrilmiş metin :",wordTersYazdir("lorem ipsum dolor sit amet")); 

/*  asagidaki sorularda kullanilacak arraylar:

    car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
    car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];
*/

/*  soru4:
    car_brands dizisinin ilk 5 elemanını console.log ile ekrana yazdırınız.
    beklenen sonuc: ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel']
*/

var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
    
    var newCarBrands = [];
    for (var i=0; i<5; i++)  
    { 
    newCarBrands.push(car_brands[i]);
    }
    console.log("Soru 4 - car_brands dizisinin ilk 5 elemanı : " ,newCarBrands);
    console.log("Soru 4 ",car_brands.splice(0, 5));


/*  soru5:
    car_brands dizisinin aralarina virgul koyarak yazdiriniz.
    beklenen sonuc: BMW,Mercedes,Audi,Ford,Opel,Fiat,Volkswagen,Renault,Peugeot
*/
    car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
    console.log("Soru 5 - car_brands dizisinin aralarina virgul koyarak yazdiriyoruz : ", car_brands.join(","));
   
/*  soru6:
    car_brands dizisinin son 5 elemanini console.log ile ekrana yazdiriniz.
    beklenen sonuc: [ 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot' ]
*/

    var sonCarBrands = [];
    for (var i=car_brands.length-5; i<=car_brands.length-1; i++)  
    { 
    sonCarBrands.push(car_brands[i]);
    }
    console.log("Soru 6 - car_brands dizisinin son 5 elemanini yazdiriyoruz : " ,sonCarBrands);
    console.log("Soru 6 ",car_brands.splice(4, car_brands.length));

/*  soru7:
car_brands dizisinin 3. elemanini console.log ile ekrana yazdiriniz.
beklenen sonuc: Audi
*/
 
console.log("Soru 7 - car_brands dizisinin 3. elemanini console.log ile ekrana yazdiriyoruz : ", car_brands[2]);
 
/*soru8:
bir dizideki verilen indexlerdeki 2 elemanin yerlerini degistiren bir FONKSIYON yaziniz.
ornek: degistir(car_brands, 3, 5) => ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Peugeot']
*/

// car_brands.splice(3, 1, 'Ford');
// car_brands.splice(5, 1, 'Fiat'); 
// console.log("Bir dizideki verilen indexlerdeki 2 elemanin yerlerini degistiriyoruz :",car_brands.slice());

var car_brands = ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Peugeot'];
function yerDegistir(yeni_brands, ilk, son) {
    car_memory=yeni_brands[ilk];
    yeni_brands[ilk]=yeni_brands[son];
    yeni_brands[son]=car_memory;
    return yeni_brands;
}

console.log("Soru 8: Verilen Elemanlar car_brands=", car_brands);
console.log("Soru 8 - car_brands dizisinin elemanlarini yer degistiriyoruz : ", yerDegistir(car_brands, 3, 5));

/*soru9:
bir dizideki elemanlari tekil yapan bir FONKSIYON yaziniz.
(Tekrar eden elemanlari siliniz.)
ornek: [1,2,3,3,4,5,5,6] => [1,2,3,4,5,6]
*/


array = [1,2,3,3,4,5,5,6]
function tekrarCikar(array) {
    let yeniArray = []
    for (let i = 0; i < array.length; i++) {
        if (!yeniArray.includes(array[i])) {
            yeniArray.push(array[i])
        }
    }    
    return yeniArray; 
}
console.log("Soru 9: Verilen array= ", array);
console.log("Soru 9: Bir dizideki elemanlarin tekrarlarini silen bir fonksiyon yaziyoruz", tekrarCikar(array));

/*soru10:
car_brands dizisinin sonuna car_brands2 dizisinin elemanlarini ekleyiniz. ayni islemi CONCAT ve SPREAD operatoru ile ayri ayri yapiniz.
beklenen sonuc: ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot', 'Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi']
*/

var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
var car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

console.log("Soru 10- car_brands dizisinin elemanları = ", car_brands);
console.log("Soru 10- car_brands2 dizisinin elemanları = ",car_brands2);
birlestirConcat = car_brands.concat(car_brands2)
console.log("Soru 10- Concat ile car_brands dizisinin sonuna car_brands2 dizisinin elemanlarini ekliyoruz", birlestirConcat);

birlestirSpread = [...car_brands, ...car_brands2]
console.log("Soru 10- Spread ile car_brands dizisinin sonuna car_brands2 dizisinin elemanlarini ekliyoruz", birlestirSpread);

/*soru11:
car_brands dizisinin ilk 3 elemanini siliniz. ayni islemi SPLICE ve SLICE ile ayri ayri yapiniz.
beklenen sonuc : ['Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
*/

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
console.log("Soru 11- car_brands dizisinin elemanları = ", car_brands);
console.log("Soru 11- Splice ile car_brands dizisinin ilk 3 elemanini siliyoruz = ", car_brands.splice(3));

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
console.log("Soru 11- Slice ile car_brands dizisinin ilk 3 elemanini siliyoruz = ", car_brands.slice(3));