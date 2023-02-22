// soru 1
function ilkSonHarfAyniMi(str) {
        var ilkHarf = str.charAt(0);
        var sonHarf = str.charAt(str.length-1);
      
        if (ilkHarf === sonHarf) {
          return true;
        } else {
          return false;
        }
      }
      console.log(ilkSonHarfAyniMi("araba"));
      console.log(ilkSonHarfAyniMi("merhaba"))
// soru 2
function tersCevir(str) {
        var karakterler = str.split("");
        var tersKarakterler = karakterler.reverse();
        var tersYaz = tersKarakterler.join("");
        return tersYaz;
      }
      console.log(tersCevir("limon"));
// soru 3
function kelimeSirasiTersCevir(str) {
        var kelimeDizisi = str.split("");
        kelimeDizisi.reverse();
        var yeniString = kelimeDizisi.join(" ");
        return yeniString;
      }
      console.log(kelimeSirasiTersCevir("Lorem ipsum dolor sit amet consectetur adipisicing elit."))

var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
var car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];
// soru 4
function ilkBesElemaniYazdir(car_brands) {
        var ilkBesEleman = car_brands.slice(0, 5);
        console.log(ilkBesEleman);
      }
      ilkBesElemaniYazdir(car_brands);
// soru 5
var virgulluString = car_brands.join(", ");
console.log(virgulluString);
// soru 6
function sonBesElemaniYazdir(car_brands) {
        var sonBesEleman = car_brands.slice(-5);
        console.log(sonBesEleman);
      }
      sonBesElemaniYazdir(car_brands);
// soru 7
console.log(car_brands[2]);
// soru 8
var carBrandsYeni = car_brands[3];
car_brands[3] = car_brands[5];
car_brands[5] = carBrandsYeni;
console.log(car_brands); 

//soru 9
// soru 10
// concat
var butunArabalar = car_brands.concat(car_brands2);
console.log(butunArabalar);
//spread
var butunArabalar2 = [...car_brands, ...car_brands2];
console.log(butunArabalar2);
//soru11
//slice
var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
console.log(car_brands.slice(3,9));
//splice
console.log(car_brands.splice(3,8));

