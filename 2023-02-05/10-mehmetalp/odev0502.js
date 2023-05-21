/* # homework

### soru1: 
- Verilen bir stringin ilk ve son karakteri ayni kontrolu yapan bir FONKSIYON yaziniz
- boolean(true/false) dondurmeli
- ornek: 'abcba' -> true
- ornek: 'abcde' -> false */

let yazi = "abcde";
console.log(yazi);

let yaziIlkHarf = yazi[0];
console.log(yaziIlkHarf);

let yaziSonHarf = yazi[yazi.length-1];
console.log(yaziSonHarf);

console.log(yaziIlkHarf == yaziSonHarf );

function kontrol(metin) {
    if(metin[0] == metin[metin.length-1]){
        return true;
    }else{
        return false;
    }
}
// alternatif
function kontrolShortcut(metin) {
    return (metin[0] == metin[metin.length-1]);
}

//arrow function ile 

const kontrolArrawFunct = (metin) => metin[0] == metin[metin.length-1];



let sonuc = kontrol("abcde");
console.log(sonuc);//false
console.log(kontrol("abcdea"));//true

let sonucShortcut = kontrolShortcut("asdfg");
console.log(sonucShortcut);
sonucShortcut = kontrolShortcut("asdfa");
console.log(sonucShortcut);

console.log(kontrolArrawFunct("abcda")); 
console.log(kontrolArrawFunct("abcde")); 

/* ### soru2: 
- Verilen bir stringi tersine ceviren bir FONKSIYON yaziniz
- Ornek sonuc: 'bugun hava cok guzel' -> 'lezug koc avah nugub' */

const tersineYAz = (metin1) => {
    yeni_metin = "";
    for (let index = metin1.length-1; index >= 0; index--) {
        yeni_metin += metin1[index];
    }

    return yeni_metin;
}

console.log(tersineYAz('bugun hava cok guzel'));
console.log("12345" == tersineYAz('54321'));

// js nin methodlari ile

metin2 = 'bugun hava cok guzel';
yeni_metin2 = metin2.split("").reverse().join("");

console.log(yeni_metin2);
console.log(metin2.split(""));//(20) ['b', 'u', 'g', 'u', 'n', ' ', 'h', 'a', 'v', 'a', ' ', 'c', 'o', 'k', ' ', 'g', 'u', 'z', 'e', 'l']
console.log(metin2.split("").reverse());//(20) ['l', 'e', 'z', 'u', 'g', ' ', 'k', 'o', 'c', ' ', 'a', 'v', 'a', 'h', ' ', 'n', 'u', 'g', 'u', 'b']

// js method ve function ile
function tersineYAzMethod(metin2) {
    return metin2.split("").reverse().join("");
}

console.log(tersineYAzMethod(" yigit akinci"));

// js method ve arrow function ile

const tersineYAzMethodArrow = (metin3) => metin3.split("").reverse().join("");

console.log(tersineYAzMethodArrow("atlastan cepkenli yigit akinci"));

/* ### soru3:
- Verilen bir stringdeki KELIMELERIn sirasini tersine ceviren bir FONKSIYON yaziniz
- ornek: 'lorem ipsum dolor sit amet' -> 'tema sit dolor ipsum lorem' */

let metin4 = 'lorem ipsum dolor sit amet';
metin4.split(" ");
console.log(metin4.split(" "));//(5) ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
metin4.split(" ").reverse();
console.log(metin4.split(" ").reverse());//(5) ['amet', 'sit', 'dolor', 'ipsum', 'lorem']
let yeni_metin4 = metin4.split(" ").reverse().join(" ");
console.log(yeni_metin4);//amet sit dolor ipsum lorem

function kelimeleriTersYapCümlede(metin5) {
    return metin5.split(" ").reverse().join(" ");
   
}
console.log(kelimeleriTersYapCümlede("almanya sistem ülkesi"));//ülkesi sistem almanya

const kelimeleriTersYapCümledeArrow = (metin5) => metin5.split(" ").reverse().join(" ");
console.log(kelimeleriTersYapCümledeArrow("Almanya da eve bulmak zor"));//zor bulmak eve da Almanya
//-------------------------------


/* asagidaki sorularda kullanilacak arraylar:
```javascript
car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];
``` */

/* ### soru4:
- car_brands dizisinin ilk 5 elemanını console.log ile ekrana yazdırınız.
- beklenen sonuc: ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel']
 */

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

console.log(car_brands.slice(0, 5));//(5) ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel']

/* ### soru5:
- car_brands dizisinin aralarina virgul yazdiriniz.
- beklenen soyarak yaonuc: BMW,Mercedes,Audi,Ford,Opel,Fiat,Volkswagen,Renault,Peugeot
 */

console.log(car_brands.join(", "));//BMW, Mercedes, Audi, Ford, Opel, Fiat, Volkswagen, Renault, Peugeot

/* ### soru6:
- car_brands dizisinin son 5 elemanini console.log ile ekrana yazdiriniz.
- beklenen sonuc: [ 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot' ] */

console.log(car_brands.slice(-5));//(5) ['Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']

/* ### soru7:
- car_brands dizisinin 3. elemanini console.log ile ekrana yazdiriniz.
- beklenen sonuc: Audi */

console.log(car_brands[2]);//Audi

/* ### soru8:
- bir dizideki verilen indexlerdeki 2 elemanin yerlerini degistiren bir FONKSIYON yaziniz.
- ornek: degistir(car_brands, 3, 5) => ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Peugeot'] */

const degistir = (aar, i3, i5) => {
    let temp = aar[i3];
    aar[i3] = aar[i5];
    aar[i5] = temp
 return aar;
}

console.log(degistir(car_brands, 3, 5));//(9) ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Peugeot']

/* ### soru9:
- bir dizideki elemanlari tekil yapan bir FONKSIYON yaziniz.
- (Tekrar eden elemanlari siliniz.)
- ornek: [1,2,3,3,4,5,5,6] => [1,2,3,4,5,6] */

aar = [1,2,3,3,4,5,5,6]
const teklestir = (aar) => {
    yeniDizi = [];
    for (let i = 0; i < aar.length; i++) {
        if(!yeniDizi.includes(aar[i])) {
            yeniDizi.push(aar[i]);
        }
    }
    return yeniDizi;
}

console.log(teklestir(aar));//(6) [1, 2, 3, 4, 5, 6]
console.log(teklestir("aabbbccc   ddddeeee88888".split("")));//(7) ['a', 'b', 'c', ' ', 'd', 'e', '8']
console.log(teklestir("aabbbccc   ddddeeee88888".split("").join("")));
function teklestirIndexof(aar1) {
    yeniDizi1 = [];
    for (let i = 0; i < aar1.length; i++) {
        if(yeniDizi1.indexOf(aar1[i]) === -1) {
            yeniDizi1.push(aar1[i]);
        }
    }
    return yeniDizi1;
}
console.log(teklestirIndexof("aaabbbcc   dddeeeeffff"));//(7) ['a', 'b', 'c', ' ', 'd', 'e', 'f']
console.log(teklestirIndexof("aaabbbcc   dddeeeeffff".split("")));//(7) ['a', 'b', 'c', ' ', 'd', 'e', 'f']
console.log(teklestirIndexof("aaabbbcc   dddeeeeffff".split("").join("")));

/* ### soru10:
- car_brands dizisinin sonuna car_brands2 dizisinin elemanlarini ekleyiniz. ayni islemi CONCAT ve SPREAD operatoru ile ayri ayri yapiniz.
- beklenen sonuc: ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot', 'Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'] */

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

birlesikConcat = car_brands.concat(car_brands2);
console.log(birlesikConcat);//18) ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot', 'Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi']

birlesikSpread = [...car_brands, ...car_brands2];
console.log(birlesikSpread);//(18) ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot', 'Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi']


/* ### soru11:
- car_brands dizisinin ilk 3 elemanini siliniz. ayni islemi SPLICE ve SLICE ile ayri ayri yapiniz.
- beklenen sonuc : ['Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot ']*/

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
console.log(car_brands.splice(1,3));//['Mercedes', 'Audi', 'Ford']

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
console.log(car_brands.splice(3));//(6) ['Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
console.log(car_brands.slice(1,3));//['Mercedes', 'Audi']
console.log(car_brands.slice(3));//(6) ['Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']s