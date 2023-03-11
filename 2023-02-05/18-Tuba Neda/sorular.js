//Soru 1: ilk ve son harf kontrolü
function kontrol(kelime) {
    console.log(Boolean(kelime[0] == kelime[kelime.length -1]));
 }

 kontrol("neden"); 
 kontrol("hep"); 
 kontrol("ödev"); 

//Soru 2: tersine cevrilen string


//Soru 3: kelimelerin sirasini tersine cevirme


// arraylar
let car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
let car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

//Soru 4: ilk bes array elemani

for (let i = 0; i < 5; i++) {
   const name = car_brands[i];
      console.log(name);
}
   
//Soru 5: virgul ekleme

console.log(car_brands.join(","));

//Soru 6: son 5 eleman


//Soru 7: 3. eleman

console.log(car_brands[2])

//Soru 8: eleman degistirme
function swapElements(car_brands, i1, i2) {
   [car_brands[i1], car_brands[i2]] = [car_brands[i2], car_brands[i1]];
 }
 
 
 swapElements(car_brands, 0, 3);
 
 console.log(car_brands);  
    

//Soru 9: tekrar eden elemani silme



//Soru 10: iki arrayi birlestirme 

//concat
const car_brands3 = car_brands.concat(car_brands2)
console.log(car_brands3)

//spread
const car_brands4 = [...car_brands,...car_brands2]
console.log(car_brands4)

//Soru 11: eleman silme

//splice
let less_cars = car_brands.splice(3,6)
console.log(less_cars)

//slice
let less_cars2 = car_brands.slice(3)
console.log(less_cars2)