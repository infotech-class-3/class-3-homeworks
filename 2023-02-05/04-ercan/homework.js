// Soru 1

function ilkVeSonKarakterAyniMi(str) {
  if (str.length < 2) {
    return false;
  }
  return str[0] === str[str.length - 1];
}

console.log(ilkVeSonKarakterAyniMi("abcba")); // true
console.log(ilkVeSonKarakterAyniMi("abcde")); // false
console.log(ilkVeSonKarakterAyniMi("abcdefgh")); // false
console.log(ilkVeSonKarakterAyniMi("abcdecba")); // true

// Soru 2

function tersineCevir(str) {
  return str.split("").reverse().join("");
}

const str = "bugun hava cok guzel";
const tersStr = tersineCevir(str);
console.log(tersStr); // "lezug koc avah nugub"

// Soru 3

function kelime_sirasi_tersine(string) {
    // Girdi stringini boşluk karakterinden bölüyoruz.
    let kelimeler = string.split(" ");
  
    // Bölünmüş kelimeleri ters çeviriyoruz.
    let kelimeler_ters = kelimeler.reverse();
  
    // Ters çevrilmiş kelimeleri tekrar bir araya getiriyoruz.
    let string_ters = kelimeler_ters.join(" ");
  
    return string_ters;
  }

  console.log(kelime_sirasi_tersine('lorem ipsum dolor sit amet')); 
// 'tema sit dolor ipsum lorem' olarak çıktı verecektir.

// Soru 4

const car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
const car_brands2 = ['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

// İki diziyi birleştir
const birlesik_dizi = car_brands.concat(car_brands2);

// İlk 5 elemanı al
const ilk_yedi = birlesik_dizi.slice(0, 5);

// Ekrana yazdır
console.log(ilk_yedi); // ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel',]

// Soru 5

//const car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];

console.log(car_brands.join(',')); // BMW,Mercedes,Audi,Ford,Opel,Fiat,Volkswagen,Renault,Peugeot

// Soru 6

//const car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];

console.log(car_brands.slice(-5)); // [ 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot' ]

// Soru 7

//onst car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];

console.log(car_brands[2]); // Audi

//Soru 8

function swapElements(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  }
  function degistir(array, index1, index2) {
    return swapElements(array, index1, index2);
  }
  //const car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];

  function swapElements(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  }
  
  function degistir(array, index1, index2) {
    return swapElements(array, index1, index2);
  }
  
  console.log(degistir(car_brands, 3, 5)); // ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Peugeot']
    

//Soru 9

function tekilYap(dizi) {
    let tekilDizi = [];
    for (let i = 0; i < dizi.length; i++) {
      if (tekilDizi.indexOf(dizi[i]) === -1) {
        tekilDizi.push(dizi[i]);
      }
    }
    return tekilDizi;
  }
  
  let ornekDizi = [1, 2, 3, 3, 4, 5, 5, 6];
  let tekilDizi = tekilYap(ornekDizi);
  console.log(tekilDizi); // [1, 2, 3, 4, 5, 6]
  

//Soru 10

//let car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
//let car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

let concatenated_brands = car_brands.concat(car_brands2);
console.log(concatenated_brands);

//let car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
//let car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

let spread_brands = [...car_brands, ...car_brands2];
console.log(spread_brands);


// Soru 11

car_brands.splice(0, 3);
console.log(car_brands);

let sliced_brands = car_brands.slice(3);
console.log(sliced_brands);